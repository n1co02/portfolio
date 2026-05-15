import { renderHook, act } from '@testing-library/react'
import React from 'react'
import { useSectionInView } from './hooks'
import ActiveSectionContextProvider, {
  useActiveSectionContext,
} from '@/context/activeSectionContext'

const mockUseInView = jest.fn()

jest.mock('react-intersection-observer', () => ({
  useInView: (...args: unknown[]) => mockUseInView(...args),
}))

const wrapper = ({ children }: { children: React.ReactNode }) =>
  React.createElement(ActiveSectionContextProvider, null, children)

describe('useSectionInView', () => {
  beforeEach(() => {
    mockUseInView.mockReturnValue({ ref: { current: null }, inView: false })
    jest.restoreAllMocks()
  })

  it('returns ref and inView from the intersection observer', () => {
    const { result } = renderHook(() => useSectionInView('Home'), { wrapper })

    expect(result.current.ref).toBeDefined()
    expect(result.current.inView).toBe(false)
  })

  it('passes threshold to useInView', () => {
    renderHook(() => useSectionInView('About', 0.5), { wrapper })

    expect(mockUseInView).toHaveBeenCalledWith({ threshold: 0.5 })
  })

  it('uses default threshold of 0.75', () => {
    renderHook(() => useSectionInView('Home'), { wrapper })

    expect(mockUseInView).toHaveBeenCalledWith({ threshold: 0.75 })
  })

  it('sets activeSection when section comes into view and timeOfLastClick is old', () => {
    mockUseInView.mockReturnValue({ ref: { current: null }, inView: true })

    const { result } = renderHook(
      () => ({
        section: useSectionInView('About'),
        ctx: useActiveSectionContext(),
      }),
      { wrapper },
    )

    // timeOfLastClick defaults to 0, so Date.now() - 0 > 1000 is always true
    expect(result.current.ctx.activeSection).toBe('About')
  })

  it('does not set activeSection when section is not in view', () => {
    mockUseInView.mockReturnValue({ ref: { current: null }, inView: false })

    const { result } = renderHook(
      () => ({
        section: useSectionInView('Skills'),
        ctx: useActiveSectionContext(),
      }),
      { wrapper },
    )

    expect(result.current.ctx.activeSection).toBe('Home')
  })

  it('does not set activeSection when timeOfLastClick is recent', () => {
    const frozenNow = 100_000
    jest.spyOn(Date, 'now').mockReturnValue(frozenNow)

    mockUseInView.mockReturnValue({ ref: { current: null }, inView: false })

    const { result, rerender } = renderHook(
      () => ({
        section: useSectionInView('Skills'),
        ctx: useActiveSectionContext(),
      }),
      { wrapper },
    )

    act(() => {
      result.current.ctx.setTimeOfLastClick(frozenNow)
    })

    mockUseInView.mockReturnValue({ ref: { current: null }, inView: true })
    rerender()

    // Date.now() - timeOfLastClick = 0, which is not > 1000
    expect(result.current.ctx.activeSection).toBe('Home')
  })
})
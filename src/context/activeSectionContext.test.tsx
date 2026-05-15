import { renderHook, act } from '@testing-library/react'
import ActiveSectionContextProvider, {
  useActiveSectionContext,
} from './activeSectionContext'

describe('ActiveSectionContextProvider', () => {
  it('provides default activeSection as "Home"', () => {
    const { result } = renderHook(() => useActiveSectionContext(), {
      wrapper: ActiveSectionContextProvider,
    })

    expect(result.current.activeSection).toBe('Home')
  })

  it('provides default timeOfLastClick as 0', () => {
    const { result } = renderHook(() => useActiveSectionContext(), {
      wrapper: ActiveSectionContextProvider,
    })

    expect(result.current.timeOfLastClick).toBe(0)
  })

  it('updates activeSection when setActiveSection is called', () => {
    const { result } = renderHook(() => useActiveSectionContext(), {
      wrapper: ActiveSectionContextProvider,
    })

    act(() => {
      result.current.setActiveSection('About')
    })

    expect(result.current.activeSection).toBe('About')
  })

  it('updates timeOfLastClick when setTimeOfLastClick is called', () => {
    const { result } = renderHook(() => useActiveSectionContext(), {
      wrapper: ActiveSectionContextProvider,
    })

    act(() => {
      result.current.setTimeOfLastClick(12345)
    })

    expect(result.current.timeOfLastClick).toBe(12345)
  })
})

describe('useActiveSectionContext', () => {
  it('throws when used outside of ActiveSectionContextProvider', () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    expect(() => renderHook(() => useActiveSectionContext())).toThrow(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider',
    )

    consoleSpy.mockRestore()
  })
})
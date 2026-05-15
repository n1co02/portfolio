import { validateString, getErrorMessage } from './utils'

describe('validateString', () => {
  it('returns true for a valid string within maxLength', () => {
    expect(validateString('hello', 10)).toBe(true)
  })

  it('returns true for a string exactly at maxLength', () => {
    expect(validateString('hello', 5)).toBe(true)
  })

  it('returns false for a string exceeding maxLength', () => {
    expect(validateString('hello world', 5)).toBe(false)
  })

  it('returns false for an empty string', () => {
    expect(validateString('', 10)).toBe(false)
  })

  it('returns false for null', () => {
    expect(validateString(null, 10)).toBe(false)
  })

  it('returns false for undefined', () => {
    expect(validateString(undefined, 10)).toBe(false)
  })

  it('returns false for a number', () => {
    expect(validateString(42, 10)).toBe(false)
  })

  it('returns false for an object', () => {
    expect(validateString({}, 10)).toBe(false)
  })
})

describe('getErrorMessage', () => {
  it('returns the message from an Error instance', () => {
    expect(getErrorMessage(new Error('test error'))).toBe('test error')
  })

  it('returns the message from an object with a message property', () => {
    expect(getErrorMessage({ message: 'object error' })).toBe('object error')
  })

  it('returns the string itself when passed a string', () => {
    expect(getErrorMessage('string error')).toBe('string error')
  })

  it('returns fallback message for a number', () => {
    expect(getErrorMessage(42)).toBe('Something went wrong')
  })

  it('returns fallback message for null', () => {
    expect(getErrorMessage(null)).toBe('Something went wrong')
  })

  it('returns fallback message for undefined', () => {
    expect(getErrorMessage(undefined)).toBe('Something went wrong')
  })
})
import { useRef } from 'react'

export default (delay = 1000) => {
  const isDebouncing = useRef(false)

  return debouncedFunction => argument => {
    if (isDebouncing.current) return

    isDebouncing.current = true
    setTimeout(() => { isDebouncing.current = false }, delay)
    return debouncedFunction(argument)
  }
}

import { useRef } from 'react'

export default (start = 0) => {
  const lastValue = useRef(start)
  return () => ++lastValue.current
}

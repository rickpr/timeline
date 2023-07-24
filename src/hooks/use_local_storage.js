import { useEffect, useState } from 'react'

const useLocalStorage = key => {
  const [value, setValue] = useState(() => {
    return typeof window !== 'undefined' && JSON.parse(localStorage.getItem(key))
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage

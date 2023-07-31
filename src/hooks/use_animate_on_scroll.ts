import AOS from 'aos'
import { useEffect } from 'react'

const useAnimateOnScroll = () => {
  useEffect(() => { AOS.init({ easing: 'ease-out-back', duration: 1000, once: true }) }, [])
}

export default useAnimateOnScroll

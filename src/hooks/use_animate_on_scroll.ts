import AOS from 'aos'
import { useEffect } from 'react'

import 'aos/dist/aos.css'

const useAnimateOnScroll = (): void => {
  useEffect(() => { AOS.init({ easing: 'ease-out-back', duration: 1000, once: true }) }, [])
}

export default useAnimateOnScroll

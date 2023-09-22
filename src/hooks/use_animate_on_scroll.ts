import AOS from 'aos'
import { useEffect } from 'react'

import 'aos/dist/aos.css'

const useAnimateOnScroll = (): void => {
  useEffect(() => { AOS.init({ easing: 'ease-in-out', duration: 1000 }) }, [])
}

export default useAnimateOnScroll

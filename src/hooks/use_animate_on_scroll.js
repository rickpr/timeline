import AOS from 'aos'
import { useEffect } from 'react'

export default () => {
  useEffect(() => { AOS.init({ easing: 'ease-out-back', duration: 1000, once: true }) }, [])
}

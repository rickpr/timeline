import { useEffect } from 'react';


const useFadeIn = ref => {
  useEffect(() => {
    const windowChangeTypes = ['load', 'resize', 'scroll']
    windowChangeTypes.forEach(change => window.addEventListener(change, fadeInIfInWindow))
    const rectangleIsInWindow = rectangle =>
      rectangle.left >= 0 && rectangle.top >= 0 && rectangle.right <= window.innerWidth && rectangle.bottom <= window.innerHeight

    const removeEventListeners = () => windowChangeTypes.forEach(change => window.removeEventListener(change, fadeInIfInWindow))

    const fadeInIfInWindow = () => {
      if (!ref.domSelector || !ref.domSelector.current) return // browser isn't ready to measure rectangle yet

      const rectangle = ref.domSelector.current.getBoundingClientRect()
      if (rectangleIsInWindow(rectangle)) {
        ref.domSelector.current.classList.add('in-view')
        removeEventListeners();
      }
    }


    return removeEventListeners;
  }, [ref.domSelector])
}

export default useFadeIn

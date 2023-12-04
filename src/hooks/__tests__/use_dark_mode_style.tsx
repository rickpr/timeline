import { About, Projects } from 'project_data'
import useDarkModeStyle from '../use_dark_mode_style'

describe('useDarkModeStyle', () => {
  describe('background', () => {
    it('gives the default background when there is no project and it is dark mode', () => {
      const { background } = useDarkModeStyle(true)
      expect(background).toEqual('#121212')
    })
    it('gives the default background when there is no project and it is light mode', () => {
      const { background } = useDarkModeStyle(false)
      expect(background).toEqual('#F5F5F5')
    })
    it('gives the default background when the project has no dark mode background and it is dark mode', () => {
      const { background } = useDarkModeStyle(true, Projects.AirbrushArtStudio)
      expect(background).toEqual('#121212')
    })
    it('gives the default background when the project has no light mode background and it is light mode', () => {
      const { background } = useDarkModeStyle(false, Projects.AirbrushArtStudio)
      expect(background).toEqual('#F5F5F5')
    })

    it('gives the project dark mode background when it is dark mode', () => {
      const { background } = useDarkModeStyle(true, About)
      expect(background).toEqual(About.darkModeBackground)
    })
    it('gives the project light mode background when it is light mode', () => {
      const { background } = useDarkModeStyle(false, About)
      expect(background).toEqual(About.lightModeBackground)
    })
  })
})

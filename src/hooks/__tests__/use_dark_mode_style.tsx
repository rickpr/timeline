import { AboutTheme } from 'theme_context'
import CaseStudyThemes from 'case_study_themes'
import useDarkModeStyle from '../use_dark_mode_style'

describe('useDarkModeStyle', () => {
  describe('background', () => {
    it('gives the default background when there is no case study and it is dark mode', () => {
      const { background } = useDarkModeStyle(true)
      expect(background).toEqual('#090B0B')
    })
    it('gives the default background when there is no case study and it is light mode', () => {
      const { background } = useDarkModeStyle(false)
      expect(background).toEqual('#F5F5F5')
    })
    it('gives the default background when the case study has no dark mode background and it is dark mode', () => {
      const { background } = useDarkModeStyle(true, CaseStudyThemes.AirbrushArtStudio)
      expect(background).toEqual('#090B0B')
    })
    it('gives the default background when the case study has no light mode background and it is light mode', () => {
      const { background } = useDarkModeStyle(false, CaseStudyThemes.AirbrushArtStudio)
      expect(background).toEqual('#F5F5F5')
    })

    it('gives the case study dark mode background when it is dark mode', () => {
      const { background } = useDarkModeStyle(true, AboutTheme)
      const expectedBackground = AboutTheme.colors?.darkMode?.background
      expect(expectedBackground).not.toBeNull()
      expect(background).toEqual(expectedBackground)
    })
    it('gives the case study light mode background when it is light mode', () => {
      const { background } = useDarkModeStyle(false, AboutTheme)
      const expectedBackground = AboutTheme.colors?.lightMode?.background
      expect(expectedBackground).not.toBeNull()
      expect(background).toEqual(expectedBackground)
    })
  })
})

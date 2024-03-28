import { AboutTheme } from 'theme_context'
import CaseStudyThemes from 'case_study_themes'
import darkModeStyle from '../dark_mode_style'

describe('darkModeStyle', () => {
  describe('background', () => {
    it('gives the default background when there is no case study and it is dark mode', () => {
      const { background } = darkModeStyle(true)
      expect(background).toEqual('#090B0B')
    })
    it('gives the default background when there is no case study and it is light mode', () => {
      const { background } = darkModeStyle(false)
      expect(background).toEqual('#F5F5F5')
    })
    it('gives the default background when the case study has no dark mode background and it is dark mode', () => {
      const { background } = darkModeStyle(true, CaseStudyThemes.AirbrushArtStudio)
      expect(background).toEqual('#090B0B')
    })
    it('gives the default background when the case study has no light mode background and it is light mode', () => {
      const { background } = darkModeStyle(false, CaseStudyThemes.AirbrushArtStudio)
      expect(background).toEqual('#F5F5F5')
    })

    it('gives the case study dark mode background when it is dark mode', () => {
      const { background } = darkModeStyle(true, AboutTheme)
      const expectedBackground = AboutTheme.colors?.darkMode?.background
      expect(expectedBackground).not.toBeNull()
      expect(background).toEqual(expectedBackground)
    })
    it('gives the case study light mode background when it is light mode', () => {
      const { background } = darkModeStyle(false, AboutTheme)
      const expectedBackground = AboutTheme.colors?.lightMode?.background
      expect(expectedBackground).not.toBeNull()
      expect(background).toEqual(expectedBackground)
    })
  })
})

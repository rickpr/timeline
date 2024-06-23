import darkModeStyle from '../dark_mode_style'

describe('darkModeStyle', () => {
  describe('background', () => {
    it('gives the default background when it is dark mode', () => {
      const { background } = darkModeStyle(true)
      expect(background).toEqual('#090B0B')
    })
    it('gives the default background when it is light mode', () => {
      const { background } = darkModeStyle(false)
      expect(background).toEqual('#F5F5F5')
    })
  })
})

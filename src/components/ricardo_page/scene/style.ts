const colors = {
  primary: '#002B36',
  secondary: '#073642',
  accent1: '#D33682',
  accent2: '#268BD2',
  neutral: '#EEE8D5',
  text: '#586E75'
}

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: colors.neutral,
    color: colors.text,
    width: '100dvw',
    minHeight: '100dvh',
    padding: '0 10% 2em'
  },
  header: {
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.accent2,
    backgroundColor: colors.primary,
    fontSize: '2em',
    fontFamily: 'Open Sans'
  },
  heading: {
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'center',
    color: colors.text,
    fontSize: '1.5em',
    fontFamily: 'Open Sans'
  },
  body: {
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: colors.neutral,
    color: colors.text,
    fontFamily: 'Playfair Display'
  },
  image: {
    width: 'max-content',
    maxWidth: '100%',
    borderRadius: '0.5em'
  },
  inlineCode: {
    backgroundColor: colors.secondary,
    color: colors.accent1,
    padding: '0 0.5em',
    fontFamily: 'Inconsolata',
    marginLeft: '1ch',
    borderRadius: '0.5em',
    border: `1px solid ${colors.primary}`
  },
  blockCode: {
    backgroundColor: colors.secondary,
    color: colors.accent1,
    padding: '0.5em',
    fontFamily: 'Inconsolata',
    borderRadius: '0.5em',
    border: `1px solid ${colors.primary}`
  },
  link: {
    color: colors.accent2,
    textDecoration: 'underline'
  }
}

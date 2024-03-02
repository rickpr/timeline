import { glassStyles } from '../styles'

export const PADDING = 10

export const CardStyles = {
  ...glassStyles,
  width: '100%',
  height: '100%',
  borderRadius: '12px',
  padding: PADDING,
  display: 'flex',
  flexDirection: 'column' as const
}

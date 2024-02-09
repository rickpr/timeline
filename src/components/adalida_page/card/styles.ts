import { glassStyles } from '../styles'

const PADDING = 10
const GAP = 20
const MAX_COLUMNS = 2
const MAX_WIDTH = 950

const GAP_WIDTH = GAP * (MAX_COLUMNS - 1)
const PADDING_WIDTH = PADDING * 2
const MAX_TOTAL_SPACING_WIDTH = PADDING_WIDTH * MAX_COLUMNS + GAP_WIDTH

const MAX_IMAGE_WIDTH = (MAX_WIDTH - MAX_TOTAL_SPACING_WIDTH) / MAX_COLUMNS
const IMAGE_WIDTH_CSS = `min(${MAX_IMAGE_WIDTH}px, calc(95dvw - ${PADDING_WIDTH}px))`

const MAX_CARD_WIDTH = (MAX_WIDTH - GAP_WIDTH) / MAX_COLUMNS

export const ImageStyles = {
  width: IMAGE_WIDTH_CSS,
  maxHeight: `min(40dvh, calc(${IMAGE_WIDTH_CSS} * 2))`,
  minHeight: `calc(${IMAGE_WIDTH_CSS} / 2)`,
  objectFit: 'cover' as const,
  borderRadius: '12px'
}

export const CardStyles = {
  ...glassStyles,
  borderRadius: '12px',
  padding: PADDING,
  display: 'flex',
  flexDirection: 'column' as const
}

export const ContainerStyles = {
  display: 'grid',
  gap: GAP,
  gridTemplateColumns: `repeat(auto-fit, min(95dvw, ${MAX_CARD_WIDTH}px))`,
  justifyContent: 'center',
  maxWidth: `min(${MAX_WIDTH}px, 95dvw)`,
  margin: '25px auto'
}

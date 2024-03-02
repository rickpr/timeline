import { PADDING } from '../glass_card/styles'

const GAP = 20
const MAX_COLUMNS = 2
const MAX_WIDTH = 950

const GAP_WIDTH = GAP * (MAX_COLUMNS - 1)
const PADDING_WIDTH = PADDING * 2
const MAX_TOTAL_SPACING_WIDTH = PADDING_WIDTH * MAX_COLUMNS + GAP_WIDTH
const MAX_GRID_WIDTH = '85dvw'

const MAX_IMAGE_WIDTH = (MAX_WIDTH - MAX_TOTAL_SPACING_WIDTH) / MAX_COLUMNS
const IMAGE_WIDTH_CSS = `min(${MAX_IMAGE_WIDTH}px, calc(${MAX_GRID_WIDTH} - ${PADDING_WIDTH}px))`

const MAX_CARD_WIDTH = (MAX_WIDTH - GAP_WIDTH) / MAX_COLUMNS

export const ImageStyles = {
  width: IMAGE_WIDTH_CSS,
  maxHeight: `min(40dvh, calc(${IMAGE_WIDTH_CSS} * 2))`,
  minHeight: `calc(${IMAGE_WIDTH_CSS} / 2)`,
  objectFit: 'cover' as const,
  borderRadius: '12px'
}

export const ContainerStyles = {
  display: 'grid',
  gap: GAP,
  gridTemplateColumns: `repeat(auto-fit, min(${MAX_GRID_WIDTH}, ${MAX_CARD_WIDTH}px))`,
  justifyContent: 'center',
  maxWidth: `min(${MAX_WIDTH}px, ${MAX_GRID_WIDTH})`,
  margin: '25px auto'
}

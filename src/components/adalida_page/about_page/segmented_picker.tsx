import React from 'react'

const activeBackgroundColor = '#FE347E'

const styles = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '8vh',
  border: `1px solid ${activeBackgroundColor}`,
  borderRadius: '500px',
  width: 'max-content',
  cursor: 'pointer',
  position: 'relative' as const
}

const buttonStyles = {
  minWidth: 'calc(8ch + 1em)',
  border: 'none',
  padding: '1em',
  background: 'none',
  fontFamily: 'Work Sans',
  fontSize: '1.2em',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center' as const,
  transition: 'all 0.5s ease-in-out',
  borderRadius: '500px',
  position: 'relative' as const
}

const backgroundStyles = {
  position: 'absolute' as const,
  top: 0,
  left: 0,
  width: '50%',
  height: '100%',
  borderRadius: '500px',
  background: activeBackgroundColor,
  transition: 'all 0.5s ease-in-out'
}

interface Props {
  pickedSegment: string
  setPickedSegment: (segment: string) => void
  segments: string[]
}

const SegmentedPicker = ({ pickedSegment, setPickedSegment, segments }: Props): React.ReactElement => {
  const translateX = segments.indexOf(pickedSegment) * 100
  return (
    <div style={styles}>
      <div style={{ ...backgroundStyles, transform: `translateX(${translateX}%)` }} />
      {segments.map(segment => {
        const active = pickedSegment === segment
        const color = active ? '#FFFFFF' : 'inherit'
        return (
          <div
            key={segment}
            style={{ ...buttonStyles, color }}
            onClick={() => { setPickedSegment(segment) }}
            role='tab'
            tabIndex={0}
            onKeyDown={(event) => { [' ', 'Enter'].includes(event.key) && setPickedSegment(segment) }}
          >
            {segment}
          </div>
        )
      }
      )}
    </div>
  )
}

export default SegmentedPicker

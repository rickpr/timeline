import React from 'react'
import { makeMediaTag } from '../projects/media_with_text'

const style = {
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center',
  position: 'fixed' as const,
  width: '100%',
  height: '100%',
  background: '#000000CC',
  left: '0',
  top: '0',
  zIndex: 4
}

const Popup = ({ closePopUp, media }: { closePopUp: () => void, media: string }): JSX.Element => (
  <div
    style={style}
    role='tab'
    tabIndex={0}
    onClick={closePopUp}
    onKeyDown={(event) => { [' ', 'Enter', 'Escape'].includes(event.key) && closePopUp() }}
  >
    <div style={{ height: '90vh', width: '90vw', display: 'flex', placeItems: 'center', placeContent: 'center' }}>
      <div style={{ position: 'relative', width: 'max-content', maxWidth: '100%', background: '#000000' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, zIndex: 5, background: '#000000' }}>
          <button
            style={{
              cursor: 'pointer',
              color: 'white',
              fontSize: '4vmin',
              background: '#000000',
              border: 0
            }}
          >
            &#x2715;
          </button>
        </div>
        {makeMediaTag({ media, style: { maxHeight: '90vh', maxWidth: '90vw', height: '100%', width: '100%' } })}
      </div>
    </div>
  </div>
)

export default Popup

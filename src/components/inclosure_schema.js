import React, { useEffect, useState } from 'react'
import ColoredBadge from './colored_badge'

const InclosureSchema = () => {
  const [x, setX] = useState(new Set())

  const [Ω, setΩ] = useState(new Set())
  useEffect(() => { setΩ(oldΩ => new Set([...oldΩ, ...x])) }, [x])
  const φ = element => Ω.has(element)

  const [Universe, setUniverse] = useState(new Set())
  useEffect(() => { setUniverse(new Set([Ω, x, ...Ω, ...x])) }, [Ω, x])
  // const ψ = element => Universe.has(element) || element.every(member => Universe.has(member))

  const addToX = element => setX(new Set([element, ...x]))
  const addToΩ = element => setΩ(new Set([element, ...Ω]))

  const [δ, setδ] = useState(new Set())
  const diagonalize = x => setδ([...Universe].filter(element => φ(element) && !x.has(element)))

  const [elementToAddToΩ, setElementToAddToΩ] = useState()
  const [elementToAddToX, setElementToAddToX] = useState()
  const border = '1px solid black'
  const background = '#CCCCCC'
  const padding = '5px'
  const minHeight = '1em'

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <div style={{ border }}>
        <div style={{ border, background }}><h1>Ω</h1></div>
        <div style={{ border, minHeight }}>
          {[...Ω].map(element => <ColoredBadge key={element} text={element} />)}
          <div style={{ border, padding }}>
            <div style={{ border, background }}><h1>x</h1></div>
            <div style={{ border, minHeight }}>
              {[...x].map(element => <ColoredBadge key={element} text={element} />)}
            </div>
          </div>
        </div>
      </div>
      <div>
        <input type='text' onChange={event => setElementToAddToΩ(event.target.value)} className='form-control' />
        <div className='input-group-append'>
          <button onClick={() => addToΩ(elementToAddToΩ)} className='btn btn-primary'>Add to Ω</button>
        </div>
      </div>
      <div>
        <input type='text' onChange={event => setElementToAddToX(event.target.value)} className='form-control' />
        <div>
          <button onClick={() => addToX(elementToAddToX)} className='btn btn-primary'>Add to x</button>
        </div>
      </div>
      <div>
        <button onClick={() => diagonalize(x)} className='btn btn-primary'>Run δ on x</button>
        <button onClick={() => diagonalize(Ω)} className='btn btn-danger'>Run δ on Ω</button>
      </div>
      <div style={{ border, padding }}>
        <h1>δ = &#123;{[...δ].map(element => <ColoredBadge key={element} text={element} />)}&#125;</h1>
      </div>
    </div>
  )
}

export default InclosureSchema

import React, { useEffect, useState } from 'react'
import ColoredBadge from './colored_badge'

const InclosureSchema = () => {
  const [y, setY] = useState(new Set())

  const [Ω, setΩ] = useState(new Set())
  useEffect(() => setΩ(oldΩ => new Set([...oldΩ, ...y])), [y])
  const φ = Ω.has

  const [Universe, setUniverse] = useState(new Set())
  useEffect(() => setUniverse(new Set([Ω, y, ...Ω, ...y])), [Ω, y])
  const ψ = element => Universe.has(element) || element.every(member => Universe.has(member))

  const addToY = element => setY(new Set([element, ...y]))
  const addToΩ = element => setΩ(new Set([element, ...Ω]))

  const [δ, setδ] = useState(new Set())
  const diagonalize = x => setδ([...Ω].filter(element => !x.has(element)))

  const [elementToAddToΩ, setElementToAddToΩ] = useState()
  const [elementToAddToY, setElementToAddToY] = useState()

  return (
    <div className="container">
      <div className="card">
        <div className="card-header"><h1>Ω</h1></div>
        <div className="card-body">
          {[...Ω].map(element => <ColoredBadge key={element} text={element} />)}
          <div className="card">
            <div className="card-header"><h1>y</h1></div>
            <div className="card-body">
              {[...y].map(element => <ColoredBadge key={element} text={element} />)}
            </div>
          </div>
        </div>
      </div>
      <div className="input-group mb-3">
        <input type="text" onChange={ event => setElementToAddToΩ(event.target.value) } className="form-control" />
        <div className="input-group-append">
          <button onClick={ () => addToΩ(elementToAddToΩ) } className="btn btn-primary">Add to Ω</button>
        </div>
      </div>
      <div className="input-group mb-3">
        <input type="text" onChange={ event => setElementToAddToY(event.target.value) } className="form-control" />
        <div className="input-group-append">
          <button onClick={ () => addToY(elementToAddToY) } className="btn btn-primary">Add to y</button>
        </div>
      </div>
      <div className="btn-group mb-3" role="group">
        <button onClick={ () => diagonalize(y) } className="btn btn-primary">Run δ on y</button>
        <button onClick={ () => diagonalize(Ω) } className="btn btn-danger">Run δ on Ω</button>
      </div>
      <div className="card text-center">
        <h1>δ = &#123;{[...δ].map(element => <ColoredBadge text={element} />)}&#125;</h1>
      </div>
    </div>
  )
}

export default InclosureSchema

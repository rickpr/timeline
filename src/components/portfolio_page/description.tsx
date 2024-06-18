import React from 'react'

import type { ProjectTheme } from 'project_themes'

const Description = ({ theme }: { theme: ProjectTheme }): React.ReactElement => {
  const { description, name, link, roles, logo } = theme
  const external = link.url.includes(':')
  const arrow = <div className={`arrow ${external ? 'rotated' : ''}`} />

  return (
    <a href={link.url} className='project-description'>
      {logo !== undefined && (
        <div className='logo' style={{ backgroundColor: logo.color }}>
          <img src={logo.image} alt={`${name} logo`} />
        </div>
      )}
      <div className='title'>{name}</div>
      <div className='role-list'>
        {roles.map(role => <div className='role' key={role}>{role}</div>)}
      </div>
      <div className='description'>{description}</div>
      <div className='link'>{link.text}&nbsp; {arrow}</div>
    </a>
  )
}

export default Description
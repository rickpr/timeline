import React from 'react'

import GlassBadge from '../../glass_badge'

import type { Work as WorkType } from './works'

const Work = ({ work }: { work: WorkType }): JSX.Element => {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', minWidth: 'min(85dvw, 950px)' }}>
      <div style={{ width: 'min(274px, 85dvw)', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', gap: '12px' }}>
        <div style={{ fontSize: '1.625em', fontWeight: 800 }}>{work.name}</div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {work.badges.map(badge => <GlassBadge key={badge}>{badge}</GlassBadge>)}
        </div>
        <a style={{ fontWeight: 600, fontSize: '1.125em', display: 'flex', marginTop: '8px' }} href={work.url}>
          Visit website <div style={{ transform: 'rotate(-60deg)', fontWeight: 400 }}>➜</div>
        </a>
      </div>
      <div style={{ width: 'min(656px, 85dvw)' }}>
        <img src={work.coverImage} alt={work.name} style={{ width: '100%', borderRadius: '8px' }} />
      </div>
    </div>
  )
}

export default Work

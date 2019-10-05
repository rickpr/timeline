import React from 'react'
import TimelineItem from './timeline_item'

const Timeline = () => {
  const timelineItems = [
    { time: 2018, imageUrl: '', imageAlt: '', description: 'Test description' },
    { time: 2018, imageUrl: '', imageAlt: '', description: 'Test description' },
    { time: 2018, imageUrl: '', imageAlt: '', description: 'Test description' },
    { time: 2018, imageUrl: '', imageAlt: '', description: 'Test description' },
    { time: 2018, imageUrl: '', imageAlt: '', description: 'Test description' },
    { time: 2018, imageUrl: '', imageAlt: '', description: 'Test description' },
    { time: 2018, imageUrl: '', imageAlt: '', description: 'Test description' },
    { time: 2018, imageUrl: '', imageAlt: '', description: 'Test description' },
    { time: 2018, imageUrl: '', imageAlt: '', description: 'Test description' },
    { time: 2018, imageUrl: '', imageAlt: '', description: 'Test description' },
    { time: 2018, imageUrl: '', imageAlt: '', description: 'Test description' },
    { time: 2018, imageUrl: '', imageAlt: '', description: 'Test description' },
  ]

  return (
    <>
      <section className="intro">
        <div className="container">
          <h1>Vertical Timeline &darr;</h1>
        </div>
      </section>
      <section className="timeline">
        <ul>
          {timelineItems.map((timelineItem, index) => <TimelineItem description={timelineItem.description} key={index} />)}
        </ul>
      </section>
    </>
      )
    }

    export default Timeline

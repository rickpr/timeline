import React from 'react'
import Crossbar from './crossbar'

const WideTimeline = ({ timelinePosts }) => {
  let isFirstRow = true
  const posts = timelinePosts.map(timelinePost => {
    const padRow = row => row
    const topRow = [
      <Crossbar key="crossbar" isFirstRow={isFirstRow} />,
      timelinePost,
    ]
    isFirstRow = false
    return (
      <div className="wide-timeline">
        <div className="row" key={`${timelinePost.id}-top`}>
          {padRow(topRow)}
        </div>
      </div>
    )
  })
  const bottomBar = <div style={{borderBottom: '5px solid'}}></div>

  return [posts, bottomBar]
}

export default WideTimeline

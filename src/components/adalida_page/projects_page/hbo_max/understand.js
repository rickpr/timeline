const Understand = () => {
  const centerStyles = {
    placeContent: 'space-between center',
    placeItems: 'center center'
  }
  const text = (
    <div style={{ columnWidth: '80ch', width: '100%' }}>
      <p>
        For my research, I first used the HBOMax subreddit to find user frustrations and pain points.
        A consistent pain point reddit users experienced was trouble fast-forwarding and rewinding while watching a title.
      </p>

      <p>
        This coupled with phone interview helped me understand why people where frustrated with the HBOMax streaming service.
      </p>
      <p>
        After, I used my qualitative research to create user personas and understand the pain points and how to solve them.
      </p>

      <p>
        With a strong understanding of the problems I wanted to solve, I was able to create my information architecture began designing.
      </p>
    </div>
  )
  const carousel = <SwiperCarousel images={[userPersonaOne, userPersonaTwo, informationArchitecture, affinityDiagram]} />
  const style = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    width: '100%',
    height: '100%',
    ...centerStyles
  }
  return (
    <Card title='// Understand & Empathize'>
      <div style={style}>
        {text}
        {carousel}
      </div>
    </Card>
  )
}

export default Understand

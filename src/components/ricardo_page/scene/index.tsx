import React from 'react'

const colors = {
  primary: '#001F3F',
  secondary: '#7BC3D1',
  accent1: '#FF6B6B',
  accent2: '#FFD700',
  neutral: '#F4F4F4',
  text: '#333333'
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: colors.neutral,
    color: colors.text,
    width: '100dvw',
    minHeight: '100dvh',
    padding: '0 10%'
  },
  header: {
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.neutral,
    backgroundColor: colors.primary,
    fontSize: '2em',
    fontFamily: 'Open Sans'
  },
  heading: {
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'center',
    color: colors.text,
    fontSize: '1.5em',
    fontFamily: 'Open Sans'
  },
  body: {
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: colors.neutral,
    color: colors.text,
    fontFamily: 'Playfair Display'
  }
}

const Scene = (): JSX.Element => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        Crafting 3D Magic: Building Immersive Interactive Scenes for the Web
      </div>
      <div style={styles.body}>
        <p>
          I&apos;d like to recreate my desk environment in 3D for the web? How do I do that?
          Let&apos;s get started!
        </p>
        <div style={styles.heading}>
          1. What items should I model?
        </div>
        <p>
          I&apos; going to try to find as many 3D models as I can of the things
          I need - this reduces the amount of work I&all have to do.
          <ul>
            <li>
              <a href='https://www.vari.com/furniture-models/design-resources.html'>
                VariDesk
              </a>
            </li>
            <li>
              <a href='https://sketchfab.com/3d-models/hyperx-quadcast-f2c51a6d69d2498db3b3e9c1cda0e695'>
                HyperX Quadcast Microphone
              </a> -
              <a href='https://creativecommons.org/licenses/by/4.0/'>
                License
              </a>
            </li>
            <li>
              <a href='https://sketchfab.com/3d-models/apple-macbook-pro-16-inch-2021-6a42b31bac064b00a91fbfebec07c852'>
                MacBook Pro
              </a> -
              <a href='https://creativecommons.org/licenses/by/4.0/'>
                License
              </a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  )
}

export default Scene

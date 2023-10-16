import React from 'react'

import AddCameraScreenshot from 'images/ricardo/scene/add_camera.webp'
import AddonsScreenshot from 'images/ricardo/scene/add_ons.webp'
import BlenderScreenshot from 'images/ricardo/scene/blender.webp'
import CollectionsScreenshot from 'images/ricardo/scene/collections.webp'
import DesktopTexture from 'images/ricardo/scene/desktop_texture.webp'
import ErrorMessageScreenshot from 'images/ricardo/scene/error_message.webp'
import ExportCompressionScreenshot from 'images/ricardo/scene/export_compression.webp'
import FifthRender from 'images/ricardo/scene/fifth_render.webp'
import FirstRender from 'images/ricardo/scene/first_render.webp'
import FourGroupsScreenshot from 'images/ricardo/scene/four_groups.webp'
import ODAConverterScreenshot from 'images/ricardo/scene/oda_converter.webp'
import JoinScreenshot from 'images/ricardo/scene/join.webp'
import KeyboardScaleScreenshot from 'images/ricardo/scene/keyboard_scale.webp'
import MicrophoneScreenshot from 'images/ricardo/scene/microphone.webp'
import MouseScreenshot from 'images/ricardo/scene/mouse.webp'
import NoTexturesScreenshot from 'images/ricardo/scene/no_textures.webp'
import PreferencesScreenshot from 'images/ricardo/scene/preferences.webp'
import SecondRender from 'images/ricardo/scene/second_render.webp'
import ThirdRender from 'images/ricardo/scene/third_render.webp'
import Wood from 'images/ricardo/scene/wood.jpg'

import DeskScene from './desk_scene'

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
    padding: '0 10% 2em'
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
  },
  image: {
    width: 'max-content',
    maxWidth: '100%',
    borderRadius: '0.5em'
  },
  inlineCode: {
    backgroundColor: colors.secondary,
    color: colors.accent1,
    padding: '0 0.5em',
    fontFamily: 'Fira Code',
    marginLeft: '1ch',
    borderRadius: '0.5em',
    border: `1px solid ${colors.primary}`
  },
  blockCode: {
    backgroundColor: colors.secondary,
    color: colors.accent1,
    padding: '0.5em',
    fontFamily: 'Fira Code',
    borderRadius: '0.5em',
    border: `1px solid ${colors.primary}`
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
        </p>
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
          <li>Rain Design mStand</li>
          <li>
            <a href='https://sketchfab.com/3d-models/razer-huntsman-tkl-43618c6b85dd43e99c2aa85cac0ebda7'>
              Razer Huntsman Keyboard
            </a> -
            <a href='https://creativecommons.org/licenses/by/4.0/'>
              License
            </a>
          </li>
          <li>
            <a href='https://www.cgtrader.com/free-3d-models/electronics/computer/razer-deathadder-v2-pro'>
              Razer Deathadder V2 Mouse
            </a>
          </li>
          <li>
            <a href='https://sketchfab.com/3d-models/curved-gaming-monitor-2d272e0133524db9b6503d5d265b2278'>
              Computer monitor (mine is nothing fancy so I picked a fancy-looking one)
            </a> -
            <a href='https://creativecommons.org/licenses/by/4.0/'>
              License
            </a>
          </li>
          <li>
            <a href='https://sketchfab.com/3d-models/custom-gaming-pc-1a24273417534f69afa0f7c62b643ffc#download'>
              Lian Li Lancool II (I wasn&apos;t able to find my case, so I picked a close one)
            </a> -
            <a href='https://creativecommons.org/licenses/by/4.0/'>
              License
            </a>
          </li>
        </ul>
        <div style={styles.heading}>
          2. Building the scene
        </div>
        <p>
          I&apos;m going to use Blender to compose the 3D models. The first
          hurdle is importing the VariDesk model.
          It&apos;s in <a href='https://en.wikipedia.org/wiki/.dwg'>dwg</a>
          format, so I&apos;ll need to use a plugin.
          I&apos;m going to follow
          <a href='https://all3dp.com/2/dwg-blender-import-files/#google_vignette'>
            this blog post</a> to figure out how this is done. Here we go!
        </p>
        <img style={styles.image} src={PreferencesScreenshot} alt='Edit -> Preferences menu.' />
        <p>
          I&apos;m going to enable the Import DXF Add-on. Unlike the blog post,
          I won&apos;t need to enable exporting as I won&apos;t be exporting
          DXF.
        </p>
        <img style={styles.image} src={AddonsScreenshot} alt='Enabling Import DXF Add-on' />
        <p>
          Also, the blog post doesn&apos;t recommend one particular tool to
          convert DWG to DXF. When possible, I try to use the most official tool.
          This appears to me to be the
          <a href='https://www.opendesign.com/guestfiles/oda_file_converter'>
            Open Design Alliance&apos;s. DWG-DXF converter.</a> I&apos;m running
          EndeavourOS so I&apos;ll have to use the AppImage. After some trial and error,
          I was able to make 2018 ASCII DXF work.
        </p>
        <img style={styles.image} src={ODAConverterScreenshot} alt='ODA Converter' />
        <p>
          I&apos;ll import this into Blender - here is the start of the scene!
          <img style={styles.image} src={BlenderScreenshot} alt='Initial Scene' />
          Next I want to import the microphone - but first I learned about
          <a href='https://docs.blender.org/manual/en/latest/scene_layout/collections/collections.html'>
            Blender collections</a>. I&apos;ll create a collection for the desk so the
          pieces don&apos;t get mixed up.
        </p>
        <img style={styles.image} src={CollectionsScreenshot} alt='Collections' />
        <p>
          From now on, I&apos;ll create collections <em>before</em> importing,
          so things stay tidy. I&apos;ll import the microphone model next and
          use the move tool to place it on the desk.
        </p>
        <img style={styles.image} src={MicrophoneScreenshot} alt='Microphone on desk' />
        <p>
          The desk looked a bit weird, so I wanted to simplify the geometry. I
          started by reading
          <a href='https://all3dp.com/2/blender-simplify-mesh-simply-explained/'>
            this blog post</a>, and ended with a slightly different solution - I
    could use this object menu to join everything in the collection into a
    single object. I now also know I can use the Decimate modifier to
    reduce the number of faces later if I need to.
        </p>
        <img style={styles.image} src={JoinScreenshot} alt='Joining objects menu' />
        <p>
          Getting the keyboard up was a wild ride - it was a
          <span style={styles.inlineCode}>.blend</span> file, so I had to link
          the two files. I couldn&apos;t get the keyboard to link into my
          drawing, so I did the reverse and linked all of my objects into the
          keyboard&apos;s file. I had to scale the keyboard up by 20x so it
          would be a realistic size.
        </p>
        <img style={styles.image} src={KeyboardScaleScreenshot} alt='Now with keyboard' />
        <p>
          Next is the mouse. This one was also a
          <span style={styles.inlineCode}>.blend</span> file, and included some
          additional stuff besides the mouse. I&apos;ll remove this and group
          everything else into a single object and collection so I can easily
          link it. I&apos;ll use Object -&gt; Join to do this once again. Then
          I can link the mouse into the scene.
        </p>
        <img style={styles.image} src={MouseScreenshot} alt='Now with mouse' />
        <p>
          Now, I&apos;d like to render an image to make sure this will look good
          before proceeding. I try to render and see there is no camera in the
          scene, so I will add one. This is done by pressing Shift+A and selecting
          Camera.
        </p>
        <img style={styles.image} src={AddCameraScreenshot} alt='Adding a camera' />
        <p>
          After some trial and error with moving the camera, I was able to make a
          good render. The desk needs some textures. Everything else looks great
          so far.
        </p>
        <img style={styles.image} src={FirstRender} alt='First render' />
        <p>
          Next, I&apos;ll add the Macbook Pro. I made two changes - first, I
          deleted a nested collection that was unneeded, then I scaled it up by
          4x to make it a more realistic size.
        </p>
        <img style={styles.image} src={SecondRender} alt='Second render' />
        <p>
          Next is the monitor - this came as a <span style={styles.inlineCode}>
          .fbx</span> file, so all I need to do is import, move, and scale it.
          Let&apos;s look at the next render.
        </p>
        <img style={styles.image} src={ThirdRender} alt='Third render' />
        <p>
          Now, I&apos;m going to add textures to the desk. I realized I made a
          mistake aggressively joining objects - now it&apos;s not easy to apply
          different materials to different parts of the desk. I&apos;ll have to
          join them separately. I&aposll reopen this file, reimport the DXF, and
          split it into four groups.
        </p>
        <img style={styles.image} src={FourGroupsScreenshot} alt='Four groups' />
        <p>
          To add the top texture, I edited the top&apos;s material by clicking it
          and going to the Shader tab. I added a wave texture and applied some
          color curves until it looked like wood to me.
        </p>
        <img style={styles.image} src={DesktopTexture} alt='Desktop texture' />
        <p>
          I applied the default Plastic texture to the buttons, and the default
          Metal texture to the legs. I&apos;ll render again to see how it looks.
          This time I&apos;ll use the Cycles renderer instead of Eevee.
        </p>
        <img style={styles.image} src={FifthRender} alt='Fifth render' />
        <p>
          Now it&apos;s time to get this onto the web. We&apos;ll begin by
          exporting to glTF. Alas, we get an error message.
        </p>
        <img style={styles.image} src={ErrorMessageScreenshot} alt='Error message' />
        <p>
          The computer case was the most complex model, so I figured changing it
          could help. I went in and grouped as many objects as I could. I also
          learned that glb is like glTF but using binary instead of JSON. I was
          able to export thanks to the changes I made, and have a more efficient
          format thanks to glb.
        </p>
        <p>
          Yikes! The file is 82MB. I&apos;ll need to reduce the file size.
          I can use compression to do this - I&apos;ll start with the default of
          6, which reduced the file size to 23M. That&apos;s good enough for now.
        </p>
        <img style={styles.image} src={ExportCompressionScreenshot} alt='Export compression' />
      </div>
      <div style={styles.heading}>
        3. Getting the scene into the React app
      </div>
      <p>
        To get the scene into the React app, we&apos;ll use a tool called
        <a href='https://github.com/pmndrs/gltfjsx'>gltfjsx</a>. This will
        transform the scene and provide a React component for us. I run the
        following command:
      </p>
      <p style={styles.blockCode}>
        npx gltfjsx desk_scene.glb --transform -t
      </p>
      <p>
        This gives me a file called <span style={styles.inlineCode}>
        desk_scene-transformed.glb</span> and a React component called
        <span style={styles.inlineCode}>DeskScene</span>. I&apos;ll import this
        into the project. The transformed glb file is now only 12 megabytes.
        Unfortunately the textures don&apos;t work. I&apos;ll have to add them
        using Three.JS.
      </p>
      <img src={NoTexturesScreenshot} alt='No textures' />
      <p>
        I&apos;s grab a picture of wood from
        <a href='https://freestocktextures.com/texture/wooden-plank-floor,1661.html'>
        Free Stock Textures</a> and use it as a texture.
      </p>
      <img style={styles.image} src={Wood} alt='Wood texture' />
      <div><DeskScene /></div>
    </div>
  )
}

export default Scene

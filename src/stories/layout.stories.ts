import type { Meta, StoryObj } from '@storybook/react'

import { AllThemes } from './const'
import { Layout } from './layout'

const themeNames = Object.keys(AllThemes)

const meta = {
  title: 'Layout',
  component: Layout,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  argTypes: {
    theme: { options: themeNames }
  }
} satisfies Meta<typeof Layout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    darkMode: false,
    isProfessionPage: false,
    isHomePage: true,
    theme: 'About'
  }
}

import type { Meta, StoryObj } from '@storybook/react'

import FacetThemes from 'facet_themes'
import CaseStudyThemes from 'case_study_themes'
import { AboutTheme } from 'theme_context'

const themes = { ...FacetThemes, ...CaseStudyThemes, About: AboutTheme }
const themeNames = Object.keys(themes)

import { Layout } from './Layout'

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
    theme: {
      options: themeNames
    }
  }
} satisfies Meta<typeof Layout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

import type { Meta, StoryObj } from '@storybook/react'

import CaseStudyThemes from 'case_study_themes'
import { ProfessionPageCard } from './profession_page_card'

const themeNames = Object.keys(CaseStudyThemes)

const meta = {
  title: 'Profession Page Card',
  component: ProfessionPageCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  argTypes: {
    theme: {
      options: themeNames,
      control: { type: 'select' }
    }
  }
} satisfies Meta<typeof ProfessionPageCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    darkMode: false,
    theme: themeNames[0]
  }
}

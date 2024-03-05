import type { Meta, StoryObj } from '@storybook/react'

import CaseStudyThemes from 'case_study_themes'
import { PortfolioPageCard } from './portfolio_page_card'

const themeNames = Object.keys(CaseStudyThemes)

const meta = {
  title: 'Portfolio Page Card',
  component: PortfolioPageCard,
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
} satisfies Meta<typeof PortfolioPageCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    darkMode: false,
    theme: themeNames[0]
  }
}

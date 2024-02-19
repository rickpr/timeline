import FacetThemes from 'facet_themes'
import CaseStudyThemes from 'case_study_themes'
import { AboutTheme } from 'theme_context'

export const AllThemes = { ...FacetThemes, ...CaseStudyThemes, About: AboutTheme }

import React from 'react'

import StackingPairComponent from 'components/stacking_pair'
import Image from 'components/logo/image'

export const StackingPair = ({ reversed = false }: { reversed?: boolean }): JSX.Element => (
  <StackingPairComponent reversed={reversed}>
    <Image style={{}} />
    <div>
      You can pair any two things you want! Although text and images are the most common.
    </div>
  </StackingPairComponent>
)

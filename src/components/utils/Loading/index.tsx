import React from 'react'

import { Container } from './styles'
import LoadingGif from '../../../assets/images/loading.gif'

const Loading = () => {
  return (
    <Container>
      <img src={LoadingGif} alt="Loading" />
    </Container>
  )
}

export default Loading

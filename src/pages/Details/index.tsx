import React from 'react'
import DetailsCard from '../../components/DetailsCard'
import { Container } from './styles'
import { StaticContext, RouteComponentProps } from 'react-router'
import { Location } from 'history'
import { IPokemon } from '../../components/Card/interfaces/pokemon'

type RequestType<T> = {
  error: string
  data: T
}

const Details: React.FC<RouteComponentProps<null, StaticContext, Location<RequestType<IPokemon>>>> = (props) => {
  const poke: IPokemon = props.location.state.state.data

  return (
    <Container>
      <DetailsCard {...poke} />
    </Container>
  )
}

export default Details

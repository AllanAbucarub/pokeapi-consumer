import React from 'react'
import { IPokemon } from '../Card/interfaces/pokemon'

import Loading from '../../components/utils/Loading'

import Card from '../Card'

interface Props {
  pokemon: IPokemon | null
  error: string | null
}

const Searched: React.FC<Props> = ({ pokemon, error }) => {
  
  if (error) {
    let err: string = error + ''
    let response = null
    let isNotFound = err.indexOf('404') > -1

    isNotFound
      ? response = <h3>{`Pokémon not found `}</h3>
      : response = <h3>{`Error trying to search servidor data. ` + error}</h3>

    return response
  }

  if (pokemon === null) {
    return <Loading />
  }

  return <Card url={'/pokemon/' + pokemon?.id} />
}

export default Searched

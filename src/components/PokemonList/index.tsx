import React from 'react'
import { IPokemonList } from '../../pages/Home/interface'
import Loading from '../../components/utils/Loading'

import Card from '../Card'

interface Props {
  pokemons: IPokemonList | null
  error: string | null
}

const PokemonList: React.FC<Props> = ({ pokemons, error }) => {
  if (error) {
    return <div>Algo de errado não está certo</div>
  }
  if (pokemons === null) {
    return <Loading />
  }

  return (
    <>
      {pokemons.results.map((item, key) => (
        <Card key={key} url={item.url} />
      ))}
    </>
  )
}

export default PokemonList

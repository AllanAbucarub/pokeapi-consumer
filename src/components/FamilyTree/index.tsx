import React, { useEffect, useCallback } from 'react'

import Card from '../Card'
import Loading from '../utils/Loading'
import { Container, Title, Content } from './styles'

import api from '../../services/api'

import { IEvolutionChain, IChain } from './interfaces/evolutionChain'
import { IPokemonSpecies } from './interfaces/pokemonSpecies'

interface Props {
  id: number
}

const FamilyTree: React.FC<Props> = ({ id }) => {
  const [loadId, evolutionId] = api<IPokemonSpecies>({
    method: 'get',
  })

  const [loadChain, evolutionChain] = api<IEvolutionChain>({
    method: 'get',
  })

  useEffect(() => {
    loadId({ url: `/pokemon-species/${id}/` })
  }, [id])

  const getEvolves = useCallback((chain: IChain, ev: Array<Number>) => {
    chain?.species && ev.push(getIdFromUrl(chain?.species?.url))

    if (chain?.evolves_to?.length) {
      const nextChain: IChain = chain.evolves_to[0]
      getEvolves(nextChain, ev)
    }
  }, [])

  const getIdFromUrl = useCallback((url: string) => {
    if (url) {
      var splitedUrl = url?.split('/')
      return parseInt(splitedUrl[splitedUrl.length - 2])
    }
    return 0
  }, [])

  useEffect(() => {
    if (evolutionId?.data) {
      let chainId = getIdFromUrl(evolutionId.data?.evolution_chain.url)
      loadChain({
        url: `/evolution-chain/${chainId}/`,
      })
    }
  }, [evolutionId])

  const evolutions = Array<Number>()

  evolutionChain?.data && getEvolves(evolutionChain.data.chain, evolutions)

  return (
    <Container>
      {evolutions.length ? (
        <>
          <Title>Family Tree</Title>
          <Content>
            {evolutions.map(
              (currentId, key) =>
                currentId.toString() !== id.toString() && <Card key={key} url={'/pokemon/' + currentId + '/'} />
            )}
          </Content>
        </>
      ) : (
        <Loading />
      )}
    </Container>
  )
}

export default FamilyTree

import React, { useState, useEffect, useRef } from 'react'

import {
  Container,
  StyledLink,
  CardContainer,
  PokeId,
  Name,
  Attributes,
  Value,
  Label,
  Stats,
  Title,
  Info,
  StatsName,
  ProgressBar,
  Filler,
} from './styles'

import Back from '../../assets/images/arrow-left.svg'
import noImage from '../../assets/images/interrogation.svg'
import FamilyTree from '../FamilyTree'

import { upperCaseFirst } from '../../Utils'
import { IPokemon, IStat } from '../Card/interfaces/pokemon'

const defaultStats = [
  { name: 'hp', abbreviated: 'hp' },
  { name: 'attack', abbreviated: 'atk' },
  { name: 'defense', abbreviated: 'def' },
  { name: 'speed', abbreviated: 'spd' },
]

const initStats: IStat[] = [
  { base_stat: 1, stat: { name: '' } },
  { base_stat: 1, stat: { name: '' } },
  { base_stat: 1, stat: { name: '' } },
  { base_stat: 1, stat: { name: '' } },
]

const DetailsCard: React.FC<IPokemon> = (pokemonDetails) => {
  const [stats, setStats] = useState(initStats)
  const img = useRef('')
  const maxPoints = useRef(0)

  img.current = pokemonDetails.sprites.other.dream_world.front_default
    ? pokemonDetails.sprites.other.dream_world.front_default
    : pokemonDetails.sprites.other['official-artwork'].front_default

  if (!img.current) {
    img.current = noImage
  }

  maxPoints.current = stats
    .map((el) => el.base_stat)
    .reduce((a, b) => {
      return Math.max(a, b)
    }, 100)

  useEffect(() => {
    setStats(
      // retorna apenas os status desejados
      pokemonDetails.stats
        .filter(function (elem) {
          return defaultStats.findIndex((item) => item.name === elem.stat.name) >= 0
        })
        .map((elem) =>
          // retorna os pontos dos status e suas descrições abreviadas
          ({
            base_stat: elem.base_stat,
            stat: {
              name: defaultStats.find((el) => el.name === elem.stat.name)?.abbreviated.toUpperCase() || '',
            },
          })
        )
    )
    window.scrollTo(0, 0)
  }, [pokemonDetails.stats])

  return (
    <Container>
      <StyledLink to="/">
        <img src={Back} alt="Back" /> Back
      </StyledLink>
      <CardContainer>
        <PokeId># {pokemonDetails.id}</PokeId>
        <img src={img.current} alt="Pokémon" />
        <Name>{upperCaseFirst(pokemonDetails.name)}</Name>

        <Attributes>
          <Value>{pokemonDetails.weight / 10} KG</Value>
          <Value>{pokemonDetails.height / 10} M</Value>
          <Label>Weight</Label>
          <Label>Height</Label>
        </Attributes>

        <Stats>
          <Title>Stats</Title>
          {stats.map((el, key) => (
            <Info key={key}>
              <StatsName>{el.stat.name}</StatsName>
              <ProgressBar>
                <Filler percentage={(el.base_stat * 100) / maxPoints.current}>
                  {el.base_stat}/{maxPoints.current}
                </Filler>
              </ProgressBar>
            </Info>
          ))}
        </Stats>
      </CardContainer>

      <FamilyTree id={pokemonDetails?.id} />
    </Container>
  )
}

export default DetailsCard

import React, { useEffect, useRef } from 'react'

import { Container, MyLink, Content, CaptionName, CaptionType, Name, Type, PokeId } from './styles'

import Loading from '../../components/utils/Loading'
import noImage from '../../assets/images/interrogation.svg'

import { upperCaseFirst } from '../../Utils'
import { IPokemon } from './interfaces/pokemon'

import api from '../../services/api'

interface Props {
  url?: string
}

const Card: React.FC<Props> = React.memo(({ url }) => {
  const [callDataRequest, resultData] = api<IPokemon>({
    url: url,
    method: 'get',
  })
  const isLoading = useRef(false)
  const img = useRef<string | undefined>('')

  isLoading.current = !resultData?.data

  img.current = resultData?.data?.sprites?.other.dream_world.front_default
    ? resultData?.data?.sprites?.other.dream_world.front_default
    : resultData?.data?.sprites?.other['official-artwork'].front_default

  if (!img.current) {
    img.current = noImage
  }

  useEffect(() => {
    callDataRequest({ url })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return (
    <MyLink
      to={{
        pathname: '/details',
        state: { state: resultData },
      }}
    >
      <Container>
        <PokeId># {resultData?.data?.id}</PokeId>
        {isLoading.current ? <Loading /> : <img src={img.current} alt="Pokémon" />}

        {!isLoading.current && (
          <Content>
            <CaptionName>
              Name:
              <Name>{upperCaseFirst(resultData?.data?.name!)}</Name>
            </CaptionName>

            <CaptionType>
              Types:
              <Type>
                {resultData?.data?.types?.map(
                  (item) =>
                    upperCaseFirst(item.type.name) +
                    (resultData?.data?.types && item.slot < resultData?.data?.types.length ? ', ' : '')
                )}
              </Type>
            </CaptionType>
          </Content>
        )}
      </Container>
    </MyLink>
  )
})

export default Card
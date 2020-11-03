import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Container, Content } from './styles'

import api from '../../services/api'
import SearchBar from '../../components/SearchBar'
import Searched from '../../components/Searched'
import PokemonList from '../../components/PokemonList'
import InfiniteScroll from '../../components/utils/InfiniteScroll'

import Loading from '../../components/utils/Loading'

import { IPokemonList } from './interface'
import { IPokemon } from '../../components/Card/interfaces/pokemon'

const Home: React.FC = () => {
  const [typedText, setTypedText] = useState('')
  const [fixSearchBar, setFixSearchBar] = useState(false)
  const lastScrollY = useRef(0)
  const isSearching = useRef(false)

  const [callListRequest, resultList] = api<IPokemonList>({ method: 'get' })
  const [callSearchRequest, resultSearch, clearResults] = api<IPokemon>({
    method: 'get',
    debouncedDelay: 300,
    debounced: true,
  })

  useEffect(() => {
    fetchData(typedText)
  }, [typedText])

  useEffect(() => {
    const scrollListner = () => {
      setFixSearchBar(lastScrollY.current > window.scrollY && window.scrollY > 122)
      lastScrollY.current = window.scrollY
    }

    window.addEventListener('scroll', scrollListner)

    return () => {
      window.removeEventListener('scroll', scrollListner)
    }
  }, [lastScrollY])

  const fetchData = useCallback((text) => {
    console.log(isSearching.current)
    isSearching.current ? callSearchRequest({ url: '/pokemon/' + text }) : callListRequest({ url: '/pokemon/' })
  }, [])

  const fetchMore = useCallback(() => {
    const url = resultList?.data?.next

    callListRequest({
      url: url,
      updateRequestInfo: (newRequestInfo, prevRequestInfo) => {
        const newArray = [...prevRequestInfo.data.results, ...newRequestInfo.data.results]
        newRequestInfo.data.results = newArray
        return { ...newRequestInfo }
      },
    })
  }, [resultList])

  const handleChange = useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
    const text = ev.target.value.trim()

    isSearching.current = text !== ''
    !isSearching.current && clearResults()

    setTypedText(text)
  }, [])

  return (
    <Container>
      <SearchBar handleChange={handleChange} typedText={typedText} fixBar={fixSearchBar} />

      <Content searching={isSearching.current}>
        {isSearching.current && resultSearch && <Searched pokemon={resultSearch?.data} error={resultSearch?.error} />}

        {!isSearching.current && resultList && <PokemonList pokemons={resultList?.data} error={resultList?.error} />}

        {resultList?.data?.results && !isSearching.current && resultList?.data?.next && (
          <InfiniteScroll fetchMore={fetchMore}>
            <Loading />
          </InfiniteScroll>
        )}
      </Content>
    </Container>
  )
}

export default Home

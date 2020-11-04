import React, { ChangeEvent, useRef, useEffect } from 'react'
import { Container, Search, Input } from './styles'

import SearchIcon from '../../assets/images/search.svg'

interface Props {
  handleChange(ev: ChangeEvent<HTMLInputElement>): void
  typedText: string
  fixBar: boolean
}

const SearchBar: React.FC<Props> = React.memo(({ handleChange, typedText, fixBar }) => {
  const inputSearch = useRef<HTMLInputElement>(null);

useEffect(() => {
  inputSearch.current?.focus()
}, [])

  return(
    <Container fixBar={fixBar}>
      <Search>
        <img src={SearchIcon} alt="Ícone de busca" />

        <Input ref={inputSearch} type="text" placeholder="Type the Pokémon name" value={typedText} onChange={handleChange} />
      </Search>
    </Container>
  )
  
})

export default SearchBar

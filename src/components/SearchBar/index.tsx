import React, { ChangeEvent } from 'react'
import { Container, Search, Input } from './styles'

import SearchIcon from '../../assets/images/search.svg'

interface Props {
  handleChange(ev: ChangeEvent<HTMLInputElement>): void
  typedText: string
  fixBar: boolean
}

const SearchBar: React.FC<Props> = React.memo(({ handleChange, typedText, fixBar }) => (
  <Container fixBar={fixBar}>
    {console.log('search bar - - - - ')}
    <Search>
      <img src={SearchIcon} alt="Ícone de busca" />

      <Input type="text" placeholder="Type the Pokémon name" value={typedText} onChange={handleChange} />
    </Search>
  </Container>
))

export default SearchBar

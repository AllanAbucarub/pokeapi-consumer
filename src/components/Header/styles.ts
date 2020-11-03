import styled from 'styled-components'
import PokeballIcon from '../../assets/pokeball.svg'

export const Title = styled.h1`
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1em;
  line-height: 33px;
  margin: auto;
`

export const Image = styled.img.attrs({ src: `${PokeballIcon}` })`
  max-width: 20%;
  position: static;
  margin-left: 30px;
`

export const Container = styled.div`
  display: flex;
  background: #28262e;
  height: 15%;
  align-items: center;
  z-index: 999;
  font-size: 1.75em;

  @media (max-width: 580px) {
    font-size: 1.5em;
  }

  @media (max-width: 450px) {
    font-size: 1.25em;
  }

  @media (max-width: 350px) {
    font-size: 1em;
    justify-content: center;
    ${Image} {
      margin-left: unset;
    }

    ${Title} {
      margin: 0 0 0 15px;
    }
  }
`

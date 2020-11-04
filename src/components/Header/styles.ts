import styled from 'styled-components'
import PokeballIcon from '../../assets/pokeball.svg'

export const Title = styled.h1`
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1em; 
`

export const Image = styled.img.attrs({ src: `${PokeballIcon}` })`
  width: 80px;
  position: static;
  margin-left: 20px;
`

export const Container = styled.div`
  display: flex;
  background: #28262e;
  height: 116px;
  max-height: 140px;
  align-items: center;
  z-index: 999;
  font-size: 1.75em;
  overflow: visible;

  @media (max-width: 580px) {
    font-size: 1.5em;
  }

  @media (max-width: 450px) {
    font-size: 1.3em;
    ${Title} {
      margin-left: 20px;
    }
  }

  @media (min-width: 450px) {
    ${Title} {
      margin: auto;
      transform: translate(-40px, 0);
      white-space: nowrap;
    }
    ${Image} {
      margin-left: 30px;      
    }
  } 

  @media (max-width: 350px) {
    font-size: 1.1em;    
    ${Image} {
      margin-left: 15px;
      width: 60px;
    }

    ${Title} {
      margin-left:15px;      
    }
  }

  @media (max-width: 350px) {
    font-size: 1em;  
  }
`

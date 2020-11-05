import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  height: 240px;
  max-width: 320px;
  background: #3e3b47;
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: background 0.1s ease-in-out;

  img {
    height: 101px;
    width: 102px;
    margin-top: 20px;
  }

  @media (max-width: 320px) {
    margin: 0 10px;
  }

  &:hover {
    background: #4e495a;
  }
`

export const MyLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;
  width: 100%;
  max-width: 320px;
`

export const PokeId = styled.h1`
  position: absolute;
  align-self: flex-start;
  font-size: 1.5rem;
  color: #666360;
  margin: 12px 0 0 25px;
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`

export const CaptionName = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  margin-top: 10px;
  max-width: 85%;

  @media (max-width: 340px) {
    font-size: 1.2rem;
  }
`

export const Name = styled.h1`
  margin-left: 10px;
  color: #ff9000;
  font-weight: bold;
  font-size: 1.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 340px) {
    font-size: 1.2rem;
  }
`

export const CaptionType = styled(CaptionName)`
  font-size: 1.25rem;
  margin-top: 26px;

  @media (max-width: 340px) {
    font-size: 1.05rem;
  }
`

export const Type = styled(Name)`
  font-size: 1.25rem;

  @media (max-width: 340px) {
    font-size: 1.05rem;
  }
`
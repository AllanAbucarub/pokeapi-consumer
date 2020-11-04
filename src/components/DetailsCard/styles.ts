import styled from 'styled-components'
import { Link } from 'react-router-dom'

type IBarConfig = {
  percentage: number
}

export const StyledLink = styled(Link)`
  display: flex;
  width: 98px;
  position: absolute;
  align-self: flex-start;
  font-size: 24px;
  color: #ff9000;
  text-decoration: none;  

  img {
    margin: 0 10px 0 5px;
  }

  &:hover {
    text-decoration: underline;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  padding: 30px 38px;
  position: relative;

  @media (max-width: 700px) {
    padding: 10px 10px 30px 10px;

    ${StyledLink}{
      margin-left: 28px;
      font-size: 20px;
      img {
        width: 24px;
        height: 24px;
      }

      @media (max-width: 400px) {
        margin-left: 0;
      }
    }
  }
  
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 320px;
  height: 444px;
  background: #3e3b47;
  margin-top: 40px;
  border-radius: 8px;

  img {
    width: 101px;
    height: 102px;
    margin-top: 17px;
  }
`

export const PokeId = styled.h1`
  position: absolute;
  align-self: flex-start;
  margin: 11px 0 0 17px;
  font-weight: bold;
  font-size: 24px;
  color: #666360;
`

export const Name = styled.span`
  font-weight: bold;
  font-size: 28px;
  color: #ff9000;
`

export const Attributes = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-flow: wrap;
  margin-top: 30px;
  padding: 0 40px;
`

export const Value = styled.span`
  font-size: 24px;
  width: 50%;
  text-align: center;
  color: #f4ede8;
`

export const Label = styled.span`
  font-size: 16px;
  align-items: center;
  color: #666360;
`

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 12px;
`

export const Title = styled.span`
  font-size: 20px;
  color: #f4ede8;
  margin-bottom: 19px;
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  font-size: 16px;
  color: #f4ede8;
  margin-bottom: 12px;
`

export const StatsName = styled.span`
  width:15%;
`;

export const ProgressBar = styled.div`
  position: relative;
  height: 20px;
  width: 85%;
  border-radius: 50px;
  background: #c4c4c4;
  margin-left: 10px;
`

export const Filler = styled.div<IBarConfig>`
  display: flex;
  font-size: 14px;
  color: #f4ede8;
  justify-content: ${(props) => (props.percentage < 25 ? 'flex-start' : 'flex-end')};
  align-items: center;

  ${(props) => (props.percentage > 25 ? 'overflow: hidden' : '')};
  ${(props) => (props.percentage < 25 ? 'padding-left: 12px' : 'padding-right: 12px')};

  background: #ff9000;
  border-radius: 20px;
  height: 100%;
  width: ${(props) => (props.percentage ? props.percentage : '100')}%;
  border-radius: inherit;
  transition: width 1s ease-in;
`

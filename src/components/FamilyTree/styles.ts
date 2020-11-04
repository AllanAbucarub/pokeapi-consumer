import styled from 'styled-components'

interface ILoading {
  isLoading :boolean
}

export const Container = styled.div<ILoading>`
  display: flex;
  width: 100%;
  flex-flow: column;
  margin-top: 20px;
  gap: 25px;  
  
  ${(props) => (props.isLoading ? 'align-items: center;' : '')};

  @media (max-width: 650px) {
    width: 100vw;
  }
`

export const Title = styled.span`
  font-size: 28px;
  line-height: 37px;
  width: 100%;
  color: #f4ede8;
  margin-bottom: -10px;

  @media (max-width: 770px) {
    text-align: center;
  }
`

export const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 38px;

  @media (max-width: 780px) {
    justify-content: center;
  }
`

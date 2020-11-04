import styled from 'styled-components'

type SearchMode = {
  searching: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 21px 0;
  width: 100vw;
`

export const Content = styled.div<SearchMode>`
  display: grid;
  position: relative;
  left: 0;
  right: 0;
  bottom: 0;
  grid-template-columns: ${(props) => (props.searching ? '320px' : 'repeat(auto-fit, minmax(280px,320px))')};
  justify-content: center;
  grid-gap: 56px;
  padding: 21px 0;
  text-align: center;

  @media (min-width: 780px) {
    padding: 21px 38px;
  }

  @media (max-width: 330px) {
    grid-gap: 30px;
  }

  @media (max-width: 400px) {
    grid-gap: 40px;
  }
`

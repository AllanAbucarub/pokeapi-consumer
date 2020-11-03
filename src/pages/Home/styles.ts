import styled from 'styled-components'

type SearchMode = {
  searching: boolean
}

export const Container = styled.div`
  display: grid;
  padding: 21px 0;

  @media (max-width: 420px) {
    padding: 21px 0;
  }
`

export const Content = styled.div<SearchMode>`
  display: grid;
  position: relative;
  left: 0;
  right: 0;
  bottom: 0;
  grid-template-columns: ${(props) => (props.searching ? '320px' : 'repeat(auto-fill, 320px)')};
  justify-content: center;
  grid-gap: 56px;
  padding: 21px 38px;
  text-align: center;
`

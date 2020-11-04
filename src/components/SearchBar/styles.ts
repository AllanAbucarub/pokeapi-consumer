import styled from 'styled-components'

interface FixedBar {
  fixBar: boolean
}

export const Container = styled.div<FixedBar>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 76px;
  background: rgba(49, 46, 56, 0.9);
  box-shadow: 0 6px 6px rgba(49, 46, 56, 0.9);

  ${(props) => (props.fixBar ? 'position: fixed' : '')};
  ${(props) => (props.fixBar ? 'top: 0px' : '')};
  ${(props) => (props.fixBar ? 'left: 0px' : '')};
  ${(props) => (props.fixBar ? 'right: 0px' : '')};
  ${(props) => (props.fixBar ? 'padding-top: 15px' : '')};
  ${(props) => (props.fixBar ? 'z-index:1' : '')};
`

export const Search = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 10px;
  height: 56px;
  background: #232129;
  margin: 0 38px;

  img {
    height: 22px;
    width: 22px;
    margin-left: 22px;
  }

  @media (max-width: 300px) {
    input {
      font-size: 14px;
    }
  }

  @media (max-width: 400px) {
    margin: 0 20px;
  }
`

export const Input = styled.input`
  flex: 1;
  font-family: 'Roboto Slab', serif;
  text-transform: capitalize;
  font-size: 16px;
  border: 0;
  line-height: 21px;
  color: #666360;
  background: inherit;
  margin: 0 16px;
`

import styled from 'styled-components/macro'

export default styled.button`
  .Button {
    padding: 5px;
    background-color: ${props => (props.bgColor ? props.bgColor : 'hotpink')};
    border: 1px solid #888;
  }
`

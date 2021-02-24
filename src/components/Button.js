import styled from 'styled-components/macro'

export default styled.button`
  width: 100%;
  height: 40px;
  padding: 5px;
  background-color: ${props => (props.bgColor ? props.bgColor : 'hotpink')};
  border: 1px solid #888;
`

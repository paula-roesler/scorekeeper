import styled from 'styled-components/macro'

export default function Grid({ children }) {
  return <AppGrid className="Grid">{children}</AppGrid>
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: 48px auto 48px;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 414px;
  margin: 0 auto;
`

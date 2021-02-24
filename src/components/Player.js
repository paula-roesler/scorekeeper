import styled from 'styled-components/macro'
import Button from './Button'

const MAX_HUE_VALUE = 120 // 120 is green
const MIN_HUE_VALUE = 0 // 0 is red

export default function Player({ name, score, onMinus, onPlus }) {
  const maxHue = Math.min(score * 10, MAX_HUE_VALUE)
  const hue = Math.max(maxHue, MIN_HUE_VALUE)
  const color = score === 0 ? 'royalblue' : `hsl(${hue}, 50%, 50%)`
  return (
    <PlayerWrapper>
      {name}
      <PlayerScore color={color}>
        <PlusMinusButton onClick={onMinus}>-</PlusMinusButton>
        <span>{score}</span>
        <PlusMinusButton onClick={onPlus}>+</PlusMinusButton>
      </PlayerScore>
    </PlayerWrapper>
  )
}

const PlayerWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: royalblue;
  margin-bottom: 10px;
`
const PlayerScore = styled.div`
  color: ${props => props.color || 'royalblue'};
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
`

const PlusMinusButton = styled(Button)`
  width: 40px;
  height: 40px;
  border: 2px solid royalblue;
  background-color: transparent;
  color: royalblue;
`

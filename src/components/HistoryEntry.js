import styled from 'styled-components/macro'

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <HistoryEntryWrapper>
      <GameTitle>{nameOfGame}</GameTitle>
      {players.map((player, index) => (
        <HistoryEntryPlayer key={index}>
          <span>{player.name}</span>
          <span>{player.score}</span>
        </HistoryEntryPlayer>
      ))}
    </HistoryEntryWrapper>
  )
}

const HistoryEntryWrapper = styled.section`
  display: grid;
  gap: 10px;
`
const GameTitle = styled.h2`
  width: 100%;
  color: royalblue;
`

const HistoryEntryPlayer = styled.div`
  display: flex;
  justify-content: space-between;
  color: royalblue;s
`

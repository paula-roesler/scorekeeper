import styled from 'styled-components/macro'

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <HistoryEntryContainer>
      {nameOfGame}
      {players.map((player, index) => (
        <div key={index} className="HistoryEntry__player">
          <span>{player.name}</span>
          <span>{player.score}</span>
        </div>
      ))}
    </HistoryEntryContainer>
  )
}

const HistoryEntryContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

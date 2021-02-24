import { useState } from 'react'
import styled from 'styled-components/macro'
import AppGrid from './components/AppGrid'
import AppHeader from './components/AppHeader'
import Button from './components/Button'
import GameForm from './components/GameForm'
import Player from './components/Player'
import PlayerForm from './components/PlayerForm'
import HistoryEntry from './components/HistoryEntry'
import Navigation from './components/Navigation'

function App() {
  const [players, setPlayers] = useState([])

  return (
    <AppGrid>
      <AppHeader title="Play the game" />
      <AppGridMain>
        <PlayerForm onAddPlayer={handleAddPlayer} />
        {players.map(({ name, score }, index) => (
          <Player
            key={name}
            name={name}
            score={score}
            onPlus={() => handlePlus(index)}
            onMinus={() => handleMinus(index)}
          />
          // React.createElement(Player, {name, score, onPlus: () => handlePlus(index)})
        ))}

        <ButtonGrid>
          <Button onClick={resetScores}>Reset scores</Button>
          <DangerButton onClick={resetAll}>Reset all</DangerButton>
        </ButtonGrid>

        <GameForm onCreateGame={data => console.log('onCreateGame', data)} />

        <HistoryEntry
          nameOfGame="Carcassonne"
          players={[
            { name: 'John Doe', score: 10 },
            { name: 'Jane Doe', score: 20 },
          ]}
        />
      </AppGridMain>
      <Navigation
        activeIndex={0}
        onNavigate={index => console.log('onNavigate', index)}
      />
    </AppGrid>
  )

  function handleAddPlayer(name) {
    setPlayers(oldPlayers => [...oldPlayers, { name, score: 0 }])
  }

  function resetAll() {
    setPlayers([])
  }

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function handlePlus(index) {
    const currentPlayer = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score + 1 },
      ...players.slice(index + 1),
    ])
  }

  function handleMinus(index) {
    const currentPlayer = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score - 1 },
      ...players.slice(index + 1),
    ])
  }
}

const DangerButton = styled(Button)`
  background-color: white;
  border: 2px solid royalblue;
  color: royalblue;
`
const ButtonGrid = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr 1fr;
`

const AppGridMain = styled.main`
  overflow-y: scroll;
  padding: 20px;
  display: grid;
  gap: 20px;
`

export default App

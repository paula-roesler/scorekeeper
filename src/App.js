import { useState } from 'react'
import styled from 'styled-components/macro'
import AppGrid from './components/AppGrid'
import AppHeader from './components/AppHeader'
import Button from './components/Button'
import Player from './components/Player'
import PlayerForm from './components/PlayerForm'
import Navigation from './components/Navigation'

function App() {
  const [players, setPlayers] = useState([])

  return (
    <AppGrid>
      <AppHeader title="Play the game" />
      <AppGridMain>
        <PlayerForm onAddPlayer={handleAddPlayer} />
        {players.map((player, index) => (
          <Player
            name={player.name}
            score={player.score}
            onPlus={() => handlePlus(index)}
            onMinus={() => handleMinus(index)}
          />
        ))}

        <Button bgColor="cornflowerblue" onClick={resetScore}>
          Reset scores
        </Button>
        <ResetButton onClick={resetAll}>Reset all</ResetButton>
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

  function resetScore() {
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

const ResetButton = styled(Button)`
  background-color: cornflowerblue;
`

const AppGridMain = styled.main`
  display: grid;
  justify-items: center;
  gap: 20px;
  overflow-y: scroll;
  padding: 20px;
`

export default App

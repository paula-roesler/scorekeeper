import './App.css';
import Header from './components/Header'
import GameForm from './components/GameForm'
import Player from './components/Player'
import Button from './components/Button'
import HistoryEntry from './components/HistoryEntry'
import Navigation from './components/Navigation'


function App() {
  return (
    <div className="App">
      {/* Seite 1 */}
      <GameForm />
      <Navigation />

      {/* Seite 2 */}
      <Header title="Carcassonne"/>
      <Player name="John Doe" score="20"/>
      <Player name="Jane Doe" score="30"/>
      <Button text="Reset scores"/>
      <Button text="End game"/>

      {/* Seite 3 */}
      <HistoryEntry 
      GameName="Carcassonne"
      PlayerName1="John Doe"
      PlayerScore1="20"
      PlayerName2="Jane Doe"
      PlayerScore2="30"
      />

      <HistoryEntry 
      GameName="Wingspan"
      PlayerName1="John Doe"
      PlayerScore1="30"
      PlayerName2="Jane Doe"
      PlayerScore2="25"
      />

    </div>
  );
}

export default App;

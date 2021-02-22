import './App.css';
import Header from './components/Header'
import GameForm from './components/GameForm'
import Navigation from './components/Navigation'
import Player from './components/Player'
import Button from './components/Button';


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
      

    </div>
  );
}

export default App;

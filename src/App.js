import './App.css';
import PlayerForm from './components/PlayerForm/PlayerForm';
import Player from './components/Player/Player';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <PlayerForm />
      <Player />
      <Button />
    </div>
  );
}

export default App;

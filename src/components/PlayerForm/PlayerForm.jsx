import './PlayerForm.css'

export default function PlayerForm({playerName, PlayerNameInput}) {
    return (
        <div className="PlayerForm">
            <h2>Add Player:</h2>
            <input name="PlayerNameInput" placeholder="Player name">{playerName}</input>
        </div>
    )
}
import './HistoryEntry.css'

export default function HistoryEntry({GameName, PlayerName1, PlayerScore1, PlayerName2, PlayerScore2}) {
    return (
        <div className="HistoryEntry">
            <h2>{GameName}</h2>
            <div className="HistoryEntry__players">
            <p>{PlayerName1}</p>
            <p>{PlayerScore1}</p>
            </div>
            <div className="HistoryEntry__players">
            <p>{PlayerName2}</p>
            <p>{PlayerScore2}</p>
            </div> 
        </div>

    )
}
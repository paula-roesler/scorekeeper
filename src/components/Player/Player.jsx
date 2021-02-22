import Button from '../Button/Button'
import './Player.css'

export default function Player({name, score}) {
    return (
        <div className="Player">
            <span>{name}</span>
            <button>-</button>
            <span>{score}</span>
            <button>+</button>
        </div>
    )
}
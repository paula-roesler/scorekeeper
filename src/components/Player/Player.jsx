import Button from '../Button/Button'
import './Player.css'

export default function Player({name, score}) {
    return (
        <div className="Player">
            <span className="Player__name">{name}</span>
            <button className="Player__button">-</button>
            <span>{score}</span>
            <button className="Player__button">+</button>
        </div>
    )
}
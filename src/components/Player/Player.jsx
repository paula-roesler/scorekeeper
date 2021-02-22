import Button from '../Button/Button'
import './Player.css'

export default function Player({name, score}) {
    return (
        <div className="Player">
            <span>{name}</span>
            <Button />
        </div>
    )
}
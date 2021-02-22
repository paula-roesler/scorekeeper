import './Button.css'

export default function Button() {
    return (
        <>
            <button>-</button>
        <span className="Player__score">{score}</span>
        <button>+</button>
        <Button/>
    )
}
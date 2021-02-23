// import './Player.css'
import Button from '../Button'

export default function Player({ name, score, onMinus, onPlus }) {
  return (
    <section className="Player">
      {name}
      <div className="Player__score">
        <Button onClick={onMinus}>-</Button>
        <span>{score}</span>
        <Button onClick={onPlus}>+</Button>
      </div>
    </section>
  )
}

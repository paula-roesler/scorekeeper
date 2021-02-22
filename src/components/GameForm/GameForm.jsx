import './GameForm.css'
import Input from '../Input'
import Button from '../Button'

export default function GameForm() {
    return (
        <form>
            <Input labelText="Name of Game" placeholderText="e.g. Carcassonne"/>
            <Input labelText="Player Names" placeholderText="e.g. John Doe, Jane Doe"/>
            <Button />
        </form>
    )
}
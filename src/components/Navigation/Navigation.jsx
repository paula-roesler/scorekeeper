import './Navigation.css'

export default function Navigation({onNavigate}) {
    return (
        <nav className="Navigation">
            <button onclick={onNavigate} className="Navigation__button">Play</button>
            <button onclick={onNavigate} className="Navigation__button">History</button>
        </nav>
    )
}
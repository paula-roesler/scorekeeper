import './Navigation.css'

export default function Navigation({onNavigate, index}) {
    return (
        <nav className="Navigation">
            <button 
                key={index}
                onclick={onNavigate} 
                className="Navigation__button">Play</button>
            <button onclick={onNavigate} className="Navigation__button">History</button>
        </nav>
    )
}
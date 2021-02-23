import './Navigation.css'

export default function Navigation({ pages, onNavigate, activeIndex }) {
  return (
    <nav className="Navigation">
      {pages.map((page, index) => (
        <button
          key={page}
          className="Navigation__button"
          disabled={index === activeIndex}
          onClick={() => onNavigate(index)}
        >
          {page}
        </button>
      ))}
    </nav>
  )
}

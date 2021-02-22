import './Input.css'

export default function Input({labelText, placeholderText}) {
    return (
        <label className="Input__label">
            {labelText}
            <input className="Input__input" pLaceholder={placeholderText} />
        </label>

    )
    
}
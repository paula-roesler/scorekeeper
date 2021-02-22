import './Input.css'

export default function Input(labelText, placeholderText) {
    return (
        <label>
            {labelText}
            <input pLaceholder={placeholderText} />
        </label>

    )
    
}
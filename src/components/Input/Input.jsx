import './Input.css'

export default function Input({ labelText, placeholderText }) {
  return (
    <label className="Input__label">
      {labelText}
      <input
        type="text"
        className="Input__input"
        placeholder={placeholderText}
      />
    </label>
  )
}

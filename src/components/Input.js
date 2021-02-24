import styled from 'styled-components/macro'

export default function Input({ labelText, placeholderText, name }) {
  return (
    <Label>
      {labelText}
      <InputField
        name={name}
        type="text"
        placeholder={placeholderText}
      ></InputField>
    </Label>
  )
}

const Label = styled.form`
  border: 2px solid royalblue;
  color: royalblue;
  margin-top: 5px;
  width: 100%;
  font-weight: bold;
`

const InputField = styled.input`
  border: 2px solid royalblue;
  color: royalblue;
  margin-top: 5px;
  width: 100%;
`

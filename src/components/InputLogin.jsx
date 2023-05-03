import { useEffect, useState } from 'react'

export function InputLogin({
  type,
  id,
  name,
  htmlFor,
  label,
  valueInput,
  valueAutoComplete,
}) {
  const [value, setValue] = useState(valueInput)

  function handleChange(e) {
    setValue(e.target.value)
  }

  return (
    <>
      <label htmlFor={htmlFor}>
        <span>{label}</span>
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          //https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-autocomplete-current-password
          autoComplete={valueAutoComplete}
        />
      </label>
    </>
  )
}

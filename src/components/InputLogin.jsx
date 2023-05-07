import { useState } from 'react'

export function InputLogin({
  type: t,
  id: i,
  name: n,
  htmlFor: h,
  label: l,
  valueInput: vi,
  valueAutoComplete: va,
}) {
  const [value, setValue] = useState(vi)

  function handleChange(e) {
    setValue(e.target.value)
  }

  return (
    <>
      <label htmlFor={h}>
        <span>{l}</span>
        <input
          type={t}
          id={i}
          name={n}
          value={value}
          onChange={handleChange}
          //https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-autocomplete-current-password
          autoComplete={va}
        />
      </label>
    </>
  )
}

import { useEffect, useState } from 'react'

export function InputLogin({ type, id, name, htmlFor, label, valueInput }) {
  const [value, setValue] = useState(valueInput)

  useEffect(() => {
    console.log(value)
  }, [value])

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
        />
      </label>
    </>
  )
}

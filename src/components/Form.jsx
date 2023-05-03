import { useState } from 'react'
import { Input } from './Input.jsx'
import style from './Form.module.css'

export function Form() {
  const [formData, setformData] = useState({
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    height: 0.0,
  })

  function handleChance(e) {
    e.preventDefault()
    setformData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <form action='' onSubmit={handleSubmit} className={style.form}>
      <label htmlFor='name'>
        <span>Name</span>
        <Input type={'text'} id='firstName' name='firstName' onchance={handleChance} step='0' />
      </label>
      <label htmlFor='name'>
        <span>Last Name</span>
        <Input type={'text'} id='lastName' name='lastName' onchance={handleChance} step='0' />
      </label>
      <label htmlFor='name'>
        <span>Age</span>
        <Input type={'number'} id='age' name='age' onchance={handleChance} step='0' />
      </label>
      <label htmlFor='name'>
        <span> E-mail</span>
        <Input type={'email'} id='email' name='email' onchance={handleChance} step='0' />
      </label>
      <label htmlFor='name'>
        <span>Height</span>
        <Input type={'number'} id='height' name='height' onchance={handleChance} step='0.01' />
      </label>
      <div className={style.section_button}>
        <button type='submit'>Submit</button>
      </div>
    </form>
  )
}

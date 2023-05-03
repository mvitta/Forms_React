import { InputLogin } from '../components/InputLogin'
import styles from '../pages/FormLogin.module.css'
import ThemeContext from '../context/ThemeContext'
import { useContext } from 'react'

export function FormLogin() {
  const { green } = useContext(ThemeContext)
  return (
    <>
      <h1>Login</h1>
      <form
        method='post'
        className={styles.form_login}
        onSubmit={(e) => {
          const formData = new FormData(e.target)
          const data = Object.fromEntries(formData)

          //collect all data with FormData
          console.log(data)

          e.preventDefault()
        }}
      >
        <InputLogin
          htmlFor='userName'
          id='userName'
          name='userName'
          label='User Name'
          type='text'
          valueInput=''
          valueAutoComplete='username'
        />
        <InputLogin
          htmlFor='password'
          id='password'
          name='password'
          label='Password'
          type='password'
          valueInput=''
          valueAutoComplete='current-password'
        />
        <button className={green} type='submit'>
          Submit
        </button>
      </form>
    </>
  )
}

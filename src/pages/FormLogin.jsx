import { InputLogin } from '../components/InputLogin'
import styles from '../pages/FormLogin.module.css'

export function FormLogin() {
  return (
    <>
      <h1>Login</h1>
      <form
        action=''
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
        />
        <InputLogin
          htmlFor='password'
          id='password'
          name='password'
          label='Password'
          type='password'
          valueInput=''
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

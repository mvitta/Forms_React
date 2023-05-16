import { Suspense } from 'react'
import { Form } from './components/Form.jsx'
import { Teams } from './components/Teams.jsx'
import { FormLogin } from './pages/FormLogin.jsx'
import { PageSearch } from './pages/PageSearch.jsx'
import { Grid } from './components/Grid.jsx'
import './styles/App.css'

function App() {
  return (
    <>
      <h1>Manejo de Formularios </h1>
      {/* src/components */}
      <Form />
      <hr />
      {/*src/pages */}
      <FormLogin />
      <hr />
      <h1>Search</h1>
      {/* src/pages*/}
      <PageSearch />
      {/* src/components */}

      <Teams />

      <form
        style={{
          width: '320px',
          margin: '1rem auto 1rem auto',
          display: 'grid',
          backgroundColor: 'yellow',
        }}
        method='POST'
        onSubmit={async (e) => {
          e.preventDefault()
          try {
            const url1 = 'http://localhost:3000/api/v1'
            const url2 = 'http://localhost:3000/api/v1/findAlumnos'
            const response = await fetch(url1, {
              method: 'POST',
              body: JSON.stringify({ username: 'example' }),
              headers: {
                'Content-Type': 'application/json',
              },
            })
            const json = await response.json()
            console.log(json)
          } catch (error) {
            console.log(error)
          }
        }}
      >
        <button type='submit'>Request to Server</button>
      </form>
      <Grid />
    </>
  )
}

export default App
//

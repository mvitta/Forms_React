import { Suspense } from 'react'
import { Form } from './components/Form.jsx'
import { Teams } from './components/Teams.jsx'
import { FormLogin } from './pages/FormLogin.jsx'
import { PageSearch } from './pages/PageSearch.jsx'
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
    </>
  )
}

export default App
//

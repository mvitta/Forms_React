import { Form } from './components/Form.jsx'
import { FormLogin } from './pages/FormLogin.jsx'
import { PageSearch } from './pages/PageSearch.jsx'

import './styles/App.css'
function App() {
  return (
    <>
      <h1>Manejo de Formularios </h1>
      <Form />
      <hr />
      <FormLogin />
      <hr />
      <h1>Search</h1>
      <PageSearch />
    </>
  )
}

export default App
//

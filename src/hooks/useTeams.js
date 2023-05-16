import { useState, useEffect } from 'react'
import { fetchTeams } from '../services/fetchTeams'

export function useTeams({ url }) {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')
  // para codigo asincrono no funciona try catch
  // usar try catch para capturar errores en el flujo de ejecucion
  //por ejemplo: error de json a object, variable undefined etc
  // https://javascript.info/try-catch

  useEffect(
    function () {
      async function fetchTeams() {
        try {
          const res = await fetch(url, {
            headers: {
              'Content-Type': 'application/json',
              'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
              'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
            },
          })
          const data = await res.json()
          if (!res.ok) {
            const message = `${data.message}, HTTP ${res.status} - url: ${res.url}`
            setErr(message)
            throw message
          }

          setTeams(data.data)
          setLoading(true)
        } catch (error) {
          setErr(error)
        }
      }

      fetchTeams()

      return () => {
        setErr('')
        setLoading(false)
        setTeams([])
      }
    },
    [url]
  )

  return [teams, loading, err]
}

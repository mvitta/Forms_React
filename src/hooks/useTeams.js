import { useState, useEffect } from 'react'

export function useTeams({ url }) {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')

  useEffect(
    function () {
      const fetchTeams = async () => {
        try {
          const res = await fetch(url, {
            headers: {
              'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
              'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
            },
          })
          if (res.ok && res.status == 200) {
            const data = await res.json()
            setTeams(data.data)
            setLoading(true)
            setErr('')
            return
          }
          throw 'Error en la API NBA'
        } catch (error) {
          setLoading(false)
          setErr(error)
        }
      }

      fetchTeams()
    },
    [url, err]
  )

  return [teams, loading, err]
}

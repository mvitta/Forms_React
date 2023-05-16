export async function fetchTeams(url) {
  const BASE_URL = 'https://free-nba.p.rapidapi.com'
  if (!url.includes(BASE_URL)) {
    return new Promise((resolve) => {
      resolve({ message: 'Error en la Url' })
    })
  }

  return fetch(url, {
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
    },
  })
    .then((res) => res.json())
    .catch((err) => err)
}

import { useState } from 'react'
import { getPresidentByName } from '../services/President'

export function usePresident() {
  const [president, setPresident] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getPresident = async ({ name, id }) => {
    try {
      setLoading(true)
      setError(null)
      const presidentData = await getPresidentByName({ namePresident: name })

      const presidentDataFilter= presidentData.filter((president) => president.id === parseInt(id))

      setPresident(presidentDataFilter)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }
  return { presidentFetching: getPresident, president, loading, error }
}

import { useEffect, useState } from 'react'

export const useApi = (
  endpoint,
  { initialState = null, initialLoad = true, initialParams = null } = {},
) => {
  const [data, setData] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const loadData = async (params = null) => {
    setLoading(true)
    try {
      const response = await endpoint(params || initialParams)
      setData(response)
      setError(null)
    } catch (e) {
      setError(e.message)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (initialLoad) loadData()
    // eslint-disable-next-line
  }, [])

  return { data, loading, error, loadData }
}

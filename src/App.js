import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import './App.sass'
import { router } from './pages/router'
import { initializeStorage } from './utils'

const App = () => {
  useEffect(() => {
    initializeStorage()
  }, [])

  return <RouterProvider router={router} />
}

export default App

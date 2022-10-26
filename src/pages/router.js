import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Layout } from '../components/Layout/Layout'
import { CreatePerson } from './CreatePerson/CreatePerson'
import { Companies } from './Companies/Companies'
import { UnlinkedPersons } from './UnlinkedPersons/UnlinkedPersons'

export const routes = [
  {
    path: 'create-person',
    element: <CreatePerson />,
    navigationTitle: 'Create person',
  },
  {
    path: 'companies',
    element: <Companies />,
    navigationTitle: 'Companies',
  },
  {
    path: 'unlinked-persons',
    element: <UnlinkedPersons />,
    navigationTitle: 'Unlinked persons',
  },
]

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='create-person' />,
  },
  {
    element: <Layout routes={routes} />,
    path: '/*',
    children: routes,
  },
])

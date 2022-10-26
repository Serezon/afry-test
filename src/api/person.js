import { generateId, getStorageItem, setStorageItem } from '../utils'
import { getCompaniesList } from './company'

export const getPersonsList = () => Promise.resolve(getStorageItem('persons'))

export const getUnlinkedPersonsList = async () => {
  const personsList = await getPersonsList()
  const companiesList = await getCompaniesList()
  const assignedEmployees = companiesList.reduce((acc, c) => {
    c.employees.forEach((id) => (acc[id] = true))
    return acc
  }, {})
  return personsList.filter((p) => !assignedEmployees[p.id])
}

export const createPerson = async (data) => {
  const personsList = await getPersonsList()
  const person = {
    ...data,
    id: generateId(),
  }
  setStorageItem('persons', personsList.concat(person))
  return person
}



import { generateId, getStorageItem, setStorageItem } from '../utils'
import { getPersonsList } from './person'

export const getCompaniesList = () => Promise.resolve(getStorageItem('companies'))

export const createCompany = async (data) => {
  const companiesList = await getCompaniesList()
  const company = {
    ...data,
    id: generateId(),
    employees: [],
  }
  setStorageItem('companies', companiesList.concat(company))
  return company
}

export const getCompany = async (id) => {
  const companiesList = await getCompaniesList()
  const personsList = await getPersonsList()
  const company = companiesList.find((c) => c.id === id)
  const employees = personsList.filter((p) => company.employees.includes(p.id))
  return {
    ...company,
    employees,
  }
}

export const linkEmployeeToCompany = async (companyId, id) => {
  const companiesList = await getCompaniesList()
  const companyIndex = companiesList.findIndex((c) => c.id === companyId)
  companiesList[companyIndex].employees.push(id)
  setStorageItem('companies', companiesList)
  return companiesList
}

export const removeEmployeeFromCompany = async (companyId, personId) => {
  const companiesList = await getCompaniesList()
  const companyIndex = companiesList.findIndex((c) => c.id === companyId)
  const employees = companiesList[companyIndex].employees
  const index = employees.findIndex((e) => e.id === personId)
  employees.splice(index, 1)
  setStorageItem('companies', companiesList)
}

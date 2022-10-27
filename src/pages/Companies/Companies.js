import { Button, PageHeader, Table } from 'antd'
import { useMemo, useState } from 'react'
import { CompanyCreate } from './CompanyCreate/CompanyCreate'
import { CompanyDetails } from './CompanyDetails/CompanyDetails'

import './Companies.sass'
import { useApi } from '../../hooks'
import { getCompaniesList } from '../../api'

export const Companies = () => {
  const { data: companies, loadData: loadCompanies } = useApi(getCompaniesList, {
    initialState: [],
  })
  const [isCompanyOpen, setIsCompanyOpen] = useState(false)
  const [isCompanyCreateOpen, setIsCompanyCreateOpen] = useState(false)
  const [currentId, setCurrentId] = useState(false)
  const columns = [
    {
      title: 'Company name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Button
          type='primary'
          onClick={() => {
            setCurrentId(record.id)
            setIsCompanyOpen(true)
          }}
        >
          Details
        </Button>
      ),
      width: '100px',
    },
  ]
  const dataSource = useMemo(
    () =>
      companies.map((c) => ({
        key: c.id,
        id: c.id,
        name: c.name,
      })),
    [companies],
  )
  return (
    <div className='companies'>
      <PageHeader
        title='Companies'
        extra={[
          <Button type='primary' key='1' onClick={() => setIsCompanyCreateOpen(true)}>
            Create company
          </Button>,
        ]}
      />
      <Table
        className='companies-list'
        bordered
        pagination={false}
        columns={columns}
        dataSource={dataSource}
      />
      <CompanyDetails
        isOpen={isCompanyOpen}
        setIsOpen={setIsCompanyOpen}
        id={currentId}
      />
      <CompanyCreate
        isOpen={isCompanyCreateOpen}
        onSuccess={loadCompanies}
        setIsOpen={setIsCompanyCreateOpen}
      />
    </div>
  )
}

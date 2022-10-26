import { Button, PageHeader, Table } from 'antd'
import { useState } from 'react'
import { CompanyCreate } from './CompanyCreate/CompanyCreate'
import { CompanyDetails } from './CompanyDetails/CompanyDetails'

import './Companies.sass'

const dataSource = [
  { key: '1', name: 'test' },
  { key: '2', name: 'test' },
  { key: '3', name: 'test' },
  { key: '4', name: 'test' },
]

export const Companies = () => {
  const [isCompanyOpen, setIsCompanyOpen] = useState(false)
  const [isCompanyCreateOpen, setIsCompanyCreateOpen] = useState(false)
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
            setIsCompanyOpen(true)
          }}
        >
          Details
        </Button>
      ),
      width: '100px',
    },
  ]
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
      <CompanyDetails isOpen={isCompanyOpen} setIsOpen={setIsCompanyOpen} />
      <CompanyCreate isOpen={isCompanyCreateOpen} setIsOpen={setIsCompanyCreateOpen} />
    </div>
  )
}

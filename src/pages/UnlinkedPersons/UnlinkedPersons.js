import { PageHeader, Button, Table } from 'antd'
import { useState } from 'react'
import { LinkPersonToCompany } from './LinkPersonToCompany/LinkPersonToCompany'
import './UnlinkedPersons.sass'

const dataSource = [
  { key: '1', name: 'test' },
  { key: '2', name: 'test' },
  { key: '3', name: 'test' },
  { key: '4', name: 'test' },
]

export const UnlinkedPersons = () => {
  const [isLinkPersonToCompanyOpen, setIsLinkPersonToCompanyOpen] = useState(false)
  const columns = [
    {
      title: 'Employee name',
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
            setIsLinkPersonToCompanyOpen(true)
          }}
        >
          Link to company
        </Button>
      ),
      width: '100px',
    },
  ]
  return (
    <div className='unlinked-persons'>
      <PageHeader title='Unlinked persons' />
      <Table
        className='unlinked-persons-list'
        bordered
        pagination={false}
        columns={columns}
        dataSource={dataSource}
      />
      <LinkPersonToCompany
        isOpen={isLinkPersonToCompanyOpen}
        setIsOpen={setIsLinkPersonToCompanyOpen}
      />
    </div>
  )
}

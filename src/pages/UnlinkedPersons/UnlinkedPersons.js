import { PageHeader, Button, Table } from 'antd'
import { useMemo, useState } from 'react'
import { getUnlinkedPersonsList } from '../../api'
import { useApi } from '../../utils'
import { LinkPersonToCompany } from './LinkPersonToCompany/LinkPersonToCompany'
import './UnlinkedPersons.sass'

export const UnlinkedPersons = () => {
  const { data: unlinkedPersons, loadData: loadPersonsList } = useApi(getUnlinkedPersonsList, {
    initialState: [],
  })
  const [isLinkPersonToCompanyOpen, setIsLinkPersonToCompanyOpen] = useState(false)
  const [currentId, setCurrentId] = useState(null)
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
            setCurrentId(record.id)
            setIsLinkPersonToCompanyOpen(true)
          }}
        >
          Link to company
        </Button>
      ),
      width: '100px',
    },
  ]

  const dataSource = useMemo(
    () =>
      unlinkedPersons.map((p) => ({
        key: p.id,
        id: p.id,
        name: p.name,
      })),
    [unlinkedPersons],
  )

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
        id={currentId}
        onSuccess={loadPersonsList}
        setIsOpen={setIsLinkPersonToCompanyOpen}
      />
    </div>
  )
}

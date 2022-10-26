import { Button, Modal, notification, Table } from 'antd'
import { useEffect, useMemo } from 'react'
import { getCompany, removeEmployeeFromCompany } from '../../../api'
import { useApi } from '../../../utils'

export const CompanyDetails = ({ isOpen, setIsOpen, id }) => {
  const { data: company, loadData: loadCompany } = useApi(getCompany, {
    initialLoad: false,
    initialParams: id,
  })
  const dataSource = useMemo(
    () =>
      company?.employees
        ? company.employees.map((e) => ({
            key: e.id,
            id: e.id,
            name: e.name,
          }))
        : [],
    [company],
  )
  useEffect(() => {
    if (id && isOpen) loadCompany(id)
  }, [id, isOpen, loadCompany])

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
          type='default'
          danger
          onClick={async () => {
            await removeEmployeeFromCompany(company.id, record.id)
            notification.success({ message: 'Employee was removed' })
            loadCompany(id)
          }}
        >
          Remove
        </Button>
      ),
      width: '100px',
    },
  ]

  return (
    <Modal
      title='Company details'
      footer={null}
      closable
      onCancel={() => setIsOpen(false)}
      open={isOpen}
    >
      <Table
        className='companies-list'
        bordered
        pagination={false}
        columns={columns}
        dataSource={dataSource}
      />
    </Modal>
  )
}

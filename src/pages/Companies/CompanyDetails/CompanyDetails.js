import { Button, Modal, Table } from 'antd'

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
      <Button type='default' danger>
        Remove
      </Button>
    ),
    width: '100px',
  },
]

const dataSource = [{ name: 'test' }, { name: 'test' }, { name: 'test' }, { name: 'test' }]

export const CompanyDetails = ({ isOpen, setIsOpen }) => {
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

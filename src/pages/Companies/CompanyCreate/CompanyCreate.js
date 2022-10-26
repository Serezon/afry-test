import { Modal, Form, Input, Button } from 'antd'

export const CompanyCreate = ({ isOpen, setIsOpen }) => {
  return (
    <Modal
      title='Create company'
      footer={null}
      closable
      onCancel={() => setIsOpen(false)}
      open={isOpen}
    >
      <Form
        name='create-company'
        autoComplete='off'
        onFinish={(values) => {
          console.log(values)
        }}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          label='Company name'
          name='name'
          rules={[{ required: true, message: 'Required field' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

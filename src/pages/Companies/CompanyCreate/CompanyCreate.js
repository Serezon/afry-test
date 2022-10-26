import { Modal, Form, Input, Button, notification } from 'antd'
import { createCompany } from '../../../api'

export const CompanyCreate = ({ isOpen, setIsOpen, onSuccess }) => {
  const [form] = Form.useForm()

  const onFinish = async (values) => {
    await createCompany(values)
    form.resetFields()
    notification.success({ message: 'Company was created' })
    onSuccess()
    setIsOpen(false)
  }
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
        form={form}
        autoComplete='off'
        onFinish={onFinish}
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

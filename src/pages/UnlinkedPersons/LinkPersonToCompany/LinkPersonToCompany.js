import { Modal, Form, Select, Button, notification } from 'antd'
import { getCompaniesList, linkEmployeeToCompany } from '../../../api'
import { useApi } from '../../../utils'

export const LinkPersonToCompany = ({ isOpen, setIsOpen, id, onSuccess }) => {
  const { data: companies } = useApi(getCompaniesList, { initialState: [] })
  const [form] = Form.useForm()

  const onFinish = async (values) => {
    await linkEmployeeToCompany(values.company, id)
    form.resetFields()
    notification.success({ message: 'Person was linked to company' })
    onSuccess()
    setIsOpen(false)
  }

  return (
    <Modal
      title='Link person to company'
      footer={null}
      closable
      onCancel={() => setIsOpen(false)}
      open={isOpen}
    >
      <Form
        name='link-person'
        autoComplete='off'
        form={form}
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          label='Company'
          name='company'
          rules={[{ required: true, message: 'Required field' }]}
        >
          <Select
            showSearch
            placeholder='Select a company'
            optionFilterProp='children'
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            {companies.map((c) => (
              <Select.Option key={c.id} value={c.id}>
                {c.name}
              </Select.Option>
            ))}
          </Select>
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

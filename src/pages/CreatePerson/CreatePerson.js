import { Button, Form, Input, notification, PageHeader, Select } from 'antd'
import { createPerson, getCompaniesList, linkEmployeeToCompany } from '../../api'
import { useApi } from '../../hooks'
import './CreatePerson.sass'

export const CreatePerson = () => {
  const { data: companies } = useApi(getCompaniesList, { initialState: [] })

  const [form] = Form.useForm()

  const onFinish = async (values) => {
    const person = await createPerson({ name: values.name })
    if (values.company) await linkEmployeeToCompany(values.company, person.id)
    form.resetFields()
    notification.success({ message: 'Person was created' })
  }

  return (
    <div className='create-person'>
      <PageHeader title='Create person' />
      <Form
        form={form}
        name='create-person'
        autoComplete='off'
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item label='Name' name='name' rules={[{ required: true, message: 'Required field' }]}>
          <Input />
        </Form.Item>
        <Form.Item label='Company' name='company'>
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
    </div>
  )
}

import { Button, Form, Input, PageHeader, Select } from 'antd'
import './CreatePerson.sass'

export const CreatePerson = () => {
  return (
    <div className='create-person'>
      <PageHeader title='Create person' />
      <Form
        name='create-person'
        autoComplete='off'
        onFinish={(values) => {
          console.log(values)
        }}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item label='Name' name='name' rules={[{ required: true, message: 'Required field' }]}>
          <Input />
        </Form.Item>
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
            <Select.Option value='test'>Test</Select.Option>
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

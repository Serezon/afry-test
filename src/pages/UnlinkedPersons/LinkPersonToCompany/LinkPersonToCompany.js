import { Modal, Form, Select, Button } from 'antd'

export const LinkPersonToCompany = ({ isOpen, setIsOpen }) => {
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
        onFinish={(values) => {
          console.log(values)
        }}
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
            <Select.Option value='test'>Test</Select.Option>
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

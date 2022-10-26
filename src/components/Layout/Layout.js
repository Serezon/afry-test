import { Layout as AntLayout, Menu } from 'antd'
import { useMemo } from 'react'
import { useNavigate, useRoutes } from 'react-router-dom'
import './Layout.sass'

const { Header, Content } = AntLayout

export const Layout = ({ routes = [] }) => {
  const navItems = useMemo(
    () =>
      routes
        .filter((r) => r.navigationTitle)
        .map((r, i) => ({
          key: i,
          label: r.navigationTitle,
          path: r.path,
        })),
    [routes],
  )
  const children = useRoutes(routes)
  const navigate = useNavigate()
  return (
    <AntLayout className='layout'>
      <Header>
        <Menu
          theme='dark'
          mode='horizontal'
          onClick={({ item }) => {
            navigate(item.props.path)
          }}
          items={navItems}
        />
      </Header>
      <Content className='content'>
        <div className='wrapper'>{children}</div>
      </Content>
    </AntLayout>
  )
}

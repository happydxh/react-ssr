import Home from './containers/Home';
import List from './containers/List'

export default [
  {
    path: "/",
    component: Home,
    exact: true,
    loadData: Home.loadData, // 服务端获取异步数据的函数
    key: 'home'
  },
  {
    path: '/list',
    component: List,
    exact: true,
    key: 'list'
  }
]
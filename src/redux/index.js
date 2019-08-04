// 组合器 合并所有reducer 并且返回 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { home } from './home.rudex'

const reducer = combineReducers({ home })

// 导出创建的store
// 这种写法在客户端可取，但在服务器端会导致所有用户共用了同一个状态
// export default createStore(reducer, applyMiddleware(thunk))
// export default () => createStore(reducer, applyMiddleware(thunk))
export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}
export const getClientStore = () => {
  const defaultState = window.context ? window.context.state : {}
  return createStore(reducer, defaultState, applyMiddleware(thunk))
}


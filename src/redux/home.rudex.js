import axios from 'axios'

const CHANGE_INFO = 'CHANGE_INFO'
const CHANGE_LIST = 'CHANGE_LIST'

const initState = {
  info: '这里是主页',
  list: []
}

// reducer
export function home(state = initState, action) {
  switch (action.type) {
    case CHANGE_INFO:
      return { ...state, info: action.info }
    case CHANGE_LIST:
      return { ...state, list: action.list }
    default:
      return state
  }
}

// action
export function changeInfo(info) {
  return { type: CHANGE_INFO, info }
}

export function changeList(list) {
  return { type: CHANGE_LIST, list }
}

// redux-thunk
export const getHomeList = () => {
  return ( dispatch, getState ) => {
    return axios.get('http://localhost:9999/list').then(res => {
      const list = res.data
      dispatch(changeList(list))
    })
  }
}

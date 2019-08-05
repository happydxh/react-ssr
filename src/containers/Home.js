import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { changeInfo, getHomeList } from './../redux/home.rudex'

const Home = props => {
  const go = () => {
    props.history.push('/list')
  }
  const changeInfo = () => {
    props.changeInfo('我改变了')
  }
  const getHomeList = () => {
    props.getHomeList()
  }
  
  useEffect(() => {
    if (!props.list.length) {
      props.getHomeList()
    }
  }, [])
  return (
    <>
      <div>{props.info}</div>
      <div>
        {props.list.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <button
        onClick={() => {
          alert('click')
        }}
      >
        click
      </button>
      <button onClick={go}>toList</button>
      <button onClick={changeInfo}>changeInfo</button>
      <button onClick={getHomeList}>getHomeList</button>
    </>
  )
}

Home.loadData = store => {
  return store.dispatch(getHomeList())
}

const mapStateToProps = state => ({
  info: state.home.info,
  list: state.home.list
})

const mapDispatchToProps = dispatch => ({
  changeInfo(info) {
    dispatch(changeInfo(info))
  },
  getHomeList() {
    dispatch(getHomeList())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

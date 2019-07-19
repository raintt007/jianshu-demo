import { 
  HomeWrapper,
  HomeLeft, 
  HomeRight,
  BackTop
} from "./style";
import {connect} from 'react-redux'
import Topic from './components/Topic';
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import List from './components/List'
import React, { PureComponent } from "react";
import  {actionCreators} from './store'
class Home extends PureComponent {

  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src="https://img.mukewang.com/5d22db6300012cc016000540.jpg" alt=""/>
          <Topic></Topic>
          <List></List>

        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {
          this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
        }
        
      </HomeWrapper>
    )
  }

  componentDidMount() {
    const {changeHomeData} = this.props
    this.bindEvents()
    changeHomeData()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}
const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action)
  },
  changeScrollTopShow() {
     if (document.documentElement.scrollTop > 80) {
       dispatch(actionCreators.toggleTopShow(true))
     } else {
       dispatch(actionCreators.toggleTopShow(false))
     }
  }
})

const mapState = (state) => ({
  showScroll: state.getIn(["home", "showScroll"])
})
export default connect(mapState, mapDispatch)(Home);
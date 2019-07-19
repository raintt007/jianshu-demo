import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { LoginWrapper, Input, LoginBox, Button } from './style'
import {actionCreators} from './store'
class Login extends Component {
  render() {
    const {loginStatus} = this.props

    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' ref={(input) => {this.account = input}}></Input>
            <Input placeholder='密码' ref={(input) => {this.password = input}} type="password"></Input>
            <Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/' />
    }
    
  }
}
const mapState = (state) =>({
  loginStatus: state.getIn(['login', 'login'])
})
const mapDispatch = (dispatch) =>({
  login(accountElem, passwordElem) {
    dispatch(actionCreators.login(accountElem.value, passwordElem.value))
    // console.log(accountElem.value, passwordElem.value);
  }
})
export default connect(mapState, mapDispatch)(Login)
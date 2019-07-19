import React from 'react';
import {GlobalStyled} from './style.js';
import {GlobalIcon} from './statics/Iconfont/iconfont'
import Header from './common/header'
import Home from './pages/home'
import Login from './pages/login'
import Detail from './pages/detail/loadable'
import Write from './pages/write'
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalIcon></GlobalIcon>
      <GlobalStyled></GlobalStyled>

      <BrowserRouter>
        <Header></Header>
        <Route path='/' exact component={Home}></Route>
        <Route path='/detail/:id' exact component={Detail}></Route>
        <Route path='/login' exact component={Login}></Route>
        <Route path='/write' exact component={Write}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

import React, { Component } from 'react'
/* 按需加载 */
import AC from './components/AC/AC';
/* 路由拦截器 */
import RouteInterceptor from './components/RouteInterceptor/example'

/* react-router4.0 Examples*/
import RedirectsAuth from './components/Examples/RedirectsAuth'
import NavLink from './components/NavLink'


export default class App extends Component {
  render() {
    return (
      <div>
        {/* <AC /> */}
        {/* <RouteInterceptor /> */}
        {/* <RedirectsAuth /> */}
        <NavLink />
      </div>
    )
  }
}

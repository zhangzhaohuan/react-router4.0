/**
 * RouteInterceptor 路由拦截器
 */
import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';

export default class RouteInterceptor extends Component {
  //假设：登陆后才能进入（登陆后localstorage:isLogin:true）
  constructor() {
    super();
    this.state = {
      isLogin: 'false'
    }
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('in');
    
    console.log(localStorage.getItem('isLogin'));
    
    return {
      isLogin: localStorage.getItem('isLogin')
    };
  } 

  render() {
    console.log(this.state.isLogin);
    
    const { component: Component, ...rest } = this.props;
    return (
      <div>
        <Route
          {...rest}
          render={props =>
            this.state.isLogin ? (
              <Component {...props} />
            ) : (
                <Redirect
                  to={{
                    pathname: "/",
                    state: { from: props.location }
                  }}
                />
              )
          }
        />
      </div>
    )
  }
}

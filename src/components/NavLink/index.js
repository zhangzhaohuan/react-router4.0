/**
 * <NavLink>
  * @param {string} activeClassName 激活时的类命名 default:active
  * @param {object} activeStyle 激活时的样式
  * @param {bool} exact 精确匹配
  * @param {bool} strict 匹配末尾的分隔符
  * @param {func} isActive 是否激活的额外的判断：@return {bool} true:激活;false: 不激活
  * @param {object} location
 * </NavLink>
 */

/**
 * <NavLink> 渲染DOM  
 * 未激活状态： <a aria-current="false"></a>   aria-current:地址栏路径和NavLink to的路径是否匹配 ;
 * 激活状态： <a aria-current="true" class='active'></a>
 */

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from "react-router-dom";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Test = () => (
  <div>
    <h2>Test</h2>
  </div>
)

export default class Demo1 extends Component {

  //是否激活的额外判断
  Event = (match, location) => {
    console.log(location);
    console.log(match);
    //未匹配地址时match为null
    if (!match) {
      return false
    }else{
      return true
    }
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li><NavLink to="/about/1" isActive={this.Event}>About1</NavLink></li>
              <li><NavLink to="/about/2" isActive={this.Event}>About2</NavLink></li>
              <li><NavLink to="/test">Test</NavLink></li>
              <li><NavLink to="/other">Other</NavLink></li>
              <li><NavLink to="/">Home</NavLink></li>
            </ul>
            <hr />
            <Switch>
              <Route path="/about/:id" component={About} />
              <Route path="/test" render={() => <Test />} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

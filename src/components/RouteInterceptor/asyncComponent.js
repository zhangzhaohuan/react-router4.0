/**
 * 按需加载二：函数asyncComponent
 */

import React from 'react';

export default function asyncComponent(importComponent) {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        component: null
      };
    }
    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({
        component: component
      });
    }
    render() {
      const Component = this.state.component;
      return Component ? <Component {...this.props} /> : <div>null</div>
    }
  }
}
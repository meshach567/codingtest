// React class component with lifecycle methods

import { Component } from "react";

class LifecycleComponent extends Component {
  componentDidMount() {
    console.log('Component did mount');
  }

  componentDidUpdate() {
    console.log('Component did update');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return <div>Check the console for lifecycle messages.</div>;
  }
}

export default LifecycleComponent;

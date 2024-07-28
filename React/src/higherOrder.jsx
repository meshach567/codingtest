/* eslint-disable react/display-name */
// Higher-order component to add logging
import React from 'react';

const withLogging = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} mounted`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

const SimpleComponent = () => <div>Hello, world!</div>;

const LoggedComponent = withLogging(SimpleComponent);

export default LoggedComponent;

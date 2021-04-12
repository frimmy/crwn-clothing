import React from 'react'

import { ErrorImageContainer, ErrorImageText, ErrorImageOverlay } from './error-boundary.styles'

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }
  static getDerivedStateFromError(error) {
    // process error
    // need this to determine how to handle the children
    // that threw this error
    //  this lets us catch the error ahead of time

    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    // perform side effects on error
    console.log(error);
  }
  render() {
    // handle error when it has been determined that a child
    // component has errored.
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={'https://i.imgur.com/FOeYt4E.png'} />
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
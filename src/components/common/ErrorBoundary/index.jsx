import React from 'react';
import Oops from '@src/assets/image/error1.jpg';

const style = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '50%',
};
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    const { errorInfo, error } = this.state;
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    if (errorInfo) {
      // You can render any custom fallback UI
      return (
        <div style={style}>
          <img src={Oops} alt="errorImage" height="900px" width="800px" />
          <h2>Something went wrong.</h2>
          <details
            open
            style={{
              whiteSpace: 'pre-wrap',
              color: 'red',
              fontWeight: 500,
              fontSize: '18px',
            }}
          >
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return children;
  }
}
export default ErrorBoundary;

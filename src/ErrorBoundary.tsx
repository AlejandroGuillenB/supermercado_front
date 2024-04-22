import { Alert } from '@mui/material';
import React from 'react';

class ErrorBoundary extends React.Component <any, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    return (<Alert severity='error'> Error: {error}, message: {errorInfo}</Alert>);
  }

  render() {
    if (this.state.hasError) {
      return (<h1>Something went wrong.</h1>);
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
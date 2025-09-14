/**
 * ErrorBoundary component to catch JavaScript errors anywhere in its child component tree,
 * log those errors, and display a fallback UI instead of the component tree that crashed.
 * Uses GOV.UK styling for the fallback message.
 *
 * Usage:
 * <ErrorBoundary>
 *   <YourComponent />
 * </ErrorBoundary>
 */
import React, { ErrorInfo, ReactNode } from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="govuk-heading-m">Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
export default ErrorBoundary;

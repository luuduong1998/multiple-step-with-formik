import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../../components/error-boundary-fallback';
import Farewell from './components/farewell';

const ErrorBoundaryPage = () => {
  const [name, setName] = useState({});

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        setName('John');
      }}
    >
      <Farewell name={name} />
    </ErrorBoundary>
  );
};

export default ErrorBoundaryPage;

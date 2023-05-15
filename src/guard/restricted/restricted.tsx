/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-undef */
import * as React from 'react';

type IRestrictedProps = {
  to: string;
  fallback: JSX.Element;
  loadingComponent?: JSX.Element;
  children: React.ReactNode;
};

const useIsPermitted = (to: string) => {
  const listPageUserCanAccess = [
    'checkout',
    '/upload',
    '/component',
    '/mui-table',
    '/checkout',
  ];
  const isPermitted = listPageUserCanAccess.includes(to);
  return { isPermitted };
};

const Restricted = (props: IRestrictedProps) => {
  const { to, fallback, loadingComponent, children } = props;
  // do some thing like get user from local storage or get user permission
  const { isPermitted } = useIsPermitted(to);
  const isLoading = false;
  if (isLoading) {
    return <>{loadingComponent}</>;
  }
  if (isPermitted) {
    return <>{children}</>;
  }
  return <>{fallback}</>;
};

export default Restricted;

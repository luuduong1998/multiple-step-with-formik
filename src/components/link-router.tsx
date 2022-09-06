import Link, { LinkProps } from '@mui/material/Link';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useGetActiveUrl } from '../hooks/use-get-active-url';

const LinkRouter = React.forwardRef<
  HTMLAnchorElement,
  LinkProps & { to: string }
>((props, ref) => {
  const { to } = props;
  const match = useGetActiveUrl(to);
  return (
    <Link
      {...props}
      ref={ref}
      component={RouterLink}
      underline="hover"
      color={match ? '#495cd6' : 'initial'}
      sx={{
        ':hover': {
          color: '#495cd6',
        },
      }}
    />
  );
});

export default LinkRouter;

import { useMatch, useResolvedPath } from 'react-router-dom';

export const useGetActiveUrl = (to: string) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return match;
};

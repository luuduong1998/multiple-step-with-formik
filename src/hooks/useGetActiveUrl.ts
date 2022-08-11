import { useMatch, useResolvedPath } from "react-router-dom";

export const useGetActiveUrl = (to: string) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return match;
};

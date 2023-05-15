/* eslint-disable react/jsx-closing-tag-location */
import { useRequest } from 'ahooks';
import { getAllData } from '../../services/user';

export const UseRequestPage = () => {
  const { data, error, loading, cancel, run } = useRequest(getAllData, {
    cacheKey: 'test',
    manual: true,
  });
  console.log(data);
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {loading && <div>loading...</div>}
      <button onClick={run}>fetch</button>
      <button onClick={cancel}>refresh</button>
      <p>Username: {data && <span>abc</span>}</p>
    </div>
  );
};

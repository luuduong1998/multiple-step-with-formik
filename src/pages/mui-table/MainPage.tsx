import React from 'react';
import TableBase from '../../components/table';

const MainPage = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    [],
  );
  return (
    <TableBase
      columns={columns}
      data={[
        {
          firstName: 'firstName',
          lastName: 'lastName',
          age: 'age',
          visits: 'visits',
          status: 'status',
          progress: 'progress',
        },
      ]}
    />
  );
};

export default MainPage;

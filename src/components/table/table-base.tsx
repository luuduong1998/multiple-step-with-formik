import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  // eslint-disable-next-line comma-dangle
  TableRow
} from '@mui/material';
import { useTable } from 'react-table';

const TableBase = ({ columns, data }: { columns: any; data: any }) => {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });
  return (
    <TableContainer {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup: any) => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <TableCell {...column.getHeaderProps()}>
                {column.render('Header')}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row: any) => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map((cell: any) => (
                <TableCell {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </TableContainer>
  );
};

export default TableBase;

import React, { useCallback, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import { Box } from '@mui/material';

export interface IOlympicData {
  athlete: string;
  age: number;
  country: string;
  year: number;
  date: string;
  sport: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
}

const GridExample = () => {
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState<IOlympicData[]>();
  // eslint-disable-next-line no-unused-vars
  const [columnDefs, setColumnDefs] = useState<(ColDef | ColGroupDef)[]>([
    // using default ColDef
    { field: 'athlete' },
    { field: 'sport' },
    // using number column type
    { field: 'age', type: 'numberColumn' },
    { field: 'year', type: 'numberColumn' },
    // using date and non-editable column types
    { field: 'date', type: ['dateColumn', 'nonEditableColumn'] },
    {
      headerName: 'Medals',
      groupId: 'medalsGroup',
      children: [
        // using medal column type
        { headerName: 'Gold', field: 'gold', type: 'medalColumn' },
        { headerName: 'Silver', field: 'silver', type: 'medalColumn' },
        { headerName: 'Bronze', field: 'bronze', type: 'medalColumn' },
        {
          headerName: 'Total',
          field: 'total',
          type: 'medalColumn',
          columnGroupShow: 'closed',
        },
      ],
    },
  ]);
  const defaultColDef = useMemo<ColDef>(
    () => ({
      // set the default column width
      // width: 200,
      // make every column editable
      editable: true,
      // make every column use 'text' filter by default
      filter: 'agTextColumnFilter',
      // enable floating filters by default
      floatingFilter: true,
      // make columns resizable
      // resizable: true,
    }),
    [],
  );
  const defaultColGroupDef = useMemo<Partial<ColGroupDef>>(
    () => ({
      marryChildren: true,
    }),
    [],
  );
  const columnTypes = useMemo<{
    [key: string]: ColDef;
  }>(
    () => ({
      numberColumn: { filter: 'agNumberColumnFilter' },
      medalColumn: { columnGroupShow: 'open', filter: false },
      nonEditableColumn: { editable: false },
      dateColumn: {
        // specify we want to use the date filter
        filter: 'agDateColumnFilter',
        // add extra parameters for the date filter
        filterParams: {
          // provide comparator function
          comparator: (filterLocalDateAtMidnight: Date, cellValue: string) => {
            // In the example application, dates are stored as dd/mm/yyyy
            // We create a Date object for comparison against the filter date
            const dateParts = cellValue.split('/');
            const day = Number(dateParts[0]);
            const month = Number(dateParts[1]) - 1;
            const year = Number(dateParts[2]);
            const cellDate = new Date(year, month, day);
            // Now that both parameters are Date objects, we can compare
            if (cellDate < filterLocalDateAtMidnight) {
              return -1;
            }
            if (cellDate > filterLocalDateAtMidnight) {
              return 1;
            }
            return 0;
          },
        },
      },
    }),
    [],
  );

  const onGridReady = useCallback(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then(resp => resp.json())
      .then((data: IOlympicData[]) => setRowData(data));
  }, []);

  return (
    <Box sx={{ height: '70vh', mt: 3, width: '100%' }}>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact<IOlympicData>
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          defaultColGroupDef={defaultColGroupDef}
          columnTypes={columnTypes}
          onGridReady={onGridReady}
        />
      </div>
    </Box>
  );
};

export default GridExample;

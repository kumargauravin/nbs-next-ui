"use client"
import * as React from 'react';
import { DataGrid, GridColDef, GridColumnGroupingModel } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'day', headerName: 'DAY', width: 90},
  // { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'Channel',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Total Count',
    width: 150,
  },
  {
    field: 'age',
    headerName: '2% Count',
    type: 'number',
    width: 110,
  },
  {
    field: 'id',
    headerName: '2% Rate',
    type: 'number',
    width: 110,
  },
];

let rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, day: 1 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, day: 1 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, day: 1 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, day: 1 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, day: 1 },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, day: 2 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, day: 2 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, day: 1 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, day: 1 },
  { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35, day: 1 },
  { id: 11, lastName: 'Lannister', firstName: 'Cersei', age: 42, day: 1 },
  { id: 12, lastName: 'Lannister', firstName: 'Jaime', age: 45, day: 1 },
  { id: 13, lastName: 'Stark', firstName: 'Arya', age: 16, day: 1 },
  { id: 14, lastName: 'Targaryen', firstName: 'Daenerys', age: null, day: 1 },
  { id: 15, lastName: 'Melisandre', firstName: null, age: 150, day: 2 },
  { id: 16, lastName: 'Clifford', firstName: 'Ferrara', age: 44, day: 2 },
  { id: 17, lastName: 'Frances', firstName: 'Rossini', age: 36, day: 1 },
  { id: 18, lastName: 'Roxie', firstName: 'Harvey', age: 65, day: 1 },  
];

const columnGroupingModel: GridColumnGroupingModel = [
  {
    groupId: 'Internal',
    description: '',
    children: [{ field: 'day' }],
  }
];

export default function DataTable() {

  // for(let i=19; i<9999; i++) {
  //   rows.push({"id": i, lastName: 'Roxie', firstName: 'Harvey', age: 65, day: 1 });
  // }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        // experimentalFeatures={{ columnGrouping: true }}
        rows={rows}
        columns={columns}
        // checkboxSelection
        disableRowSelectionOnClick
        // columnGroupingModel={columnGroupingModel}
      />
    </div>
  );
}
"use client"
// import { DataGrid } from "@mui/x-data-grid/DataGrid";
// import { GridColDef } from "@mui/x-data-grid/models";
import React from "react";
import ReactDOM from "react-dom";
//import PivotTableUI from "react-pivottable/PivotTableUI";
import PivotTable from "react-pivottable/PivotTable";
import "react-pivottable/pivottable.css";
import TableRenderers from "react-pivottable/TableRenderers";

export default function DataPivotTable() {
    try {
    const [p, setP] = React.useState<any>({});
    // const columns: GridColDef[] = [
    //     { field: 'day', headerName: 'DAY', width: 90},
    //     { field: 'id', headerName: 'ID', width: 90 },
    //     {
    //       field: 'real_value',
    //       headerName: 'First name',
    //       width: 150,
    //     },
    //     {
    //       field: 'channel',
    //       headerName: 'Last name',
    //       width: 150,
    //     },
    //     {
    //       field: '$3_Match',
    //       headerName: '$3_Match',
    //       type: 'number',
    //       width: 110,
    //     },
    //   ];

    const rows: any[] = [
        { "id": "1", "channel": "Channel1", "real_value": "100", "$3_Match": "35", "day": "1" },
        { "id": "2", "channel": "Channel2", "real_value": "100", "$3_Match": "42", "day": "1" },
        { "id": "3", "channel": "Channel3", "real_value": "100", "$3_Match": "45", "day": "1" },
        { "id": "4", "channel": "Channel4", "real_value": "100", "$3_Match": "16", "day": "1" },
        { "id": "6", "channel": "Channel5", "real_value": "100", "$3_Match": "36", "day": "1" },
        { "id": "7", "channel": "Channel1", "real_value": "100", "$3_Match": "65", "day": "2" },
        { "id": "5", "channel": "Channel2", "real_value": "100", "$3_Match": "44", "day": "2" },
    ];

    //Try to see options to expand totals to complete row and hide totals on right
    return <>
        {typeof window !== 'undefined' ? (<PivotTable data={rows} onChange={(s: any) => setP(s)}
            renderers={Object.assign({}, TableRenderers)} //,PlotlyRenderers)}
            rows={["day", "channel", "real_value", "$3_Match"]}
            {...p}
        />) : <>Loading...</>} 
    </>;
    } catch(err) {console.log("error",err);return <>Loading...</>;}
}
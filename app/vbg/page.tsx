// 'use client'
import React from 'react';
import Box from '@mui/material/Box';
import BarCharts from '../components/bar-charts/bar-charts';
import LineCharts from '../components/line-charts/line-charts';
import Grid from '@mui/material/Grid';
// import DataTable from '@/components/data-table/data-table';
// import Typography from '@mui/material/Typography';
// import DataPivotTable from '../components/pivot-table/pivot-table';
// import DenseTable from '../components/basic-table/basic-table';
// import DataTable from '../components/data-table/data-table';
// import { useSearchParams } from 'next/navigation';
// import { useParams } from 'next/navigation'
// import { headers } from 'next/headers'
import CustomTabPanel, { a11yProps } from '../components/tabs/tab-panels';
import ReactTable from '../components/react-table/react-table';
import BasicFilter from '../components/filter/filter';
import DashTabs from '../components/tabs/tabs';

export default function VbgHome() {
  // const [value, setValue] = React.useState(0);
  // const queryParams = useSearchParams();
  // const pathParams = useParams();
  // const headersList = headers();
  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   setValue(newValue);
  // };

  // let x: string[] = [];
  // for (const [key, value] of queryParams.entries()) {
  //   x.push(`${key}, ${value}`);
  // }

  // let y: string[] = [];
  // for (const [key, value] of headersList.entries()) {
  //   x.push(`${key}, ${value}`);
  // }

  return (
    <>
      <Box component="main">
          {/* <Box>
            QueryParams: {JSON.stringify(x)}
          </Box> */}
          {/* <Box>
            Headers: {JSON.stringify(y)}
          </Box> */}
          {/* <Box>
            PathParams: {JSON.stringify(pathParams)}
          </Box> */}
          <Box>
            <Grid container>
              <Grid item xs={12}>
                <BasicFilter/>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ width: '100%' }}>
                  <DashTabs />
                </Box>
              </Grid>
            </Grid>
          </Box>
      </Box>
    </>
  )
}

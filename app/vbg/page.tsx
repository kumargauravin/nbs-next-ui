'use client'
import React from 'react';
import Box from '@mui/material/Box';
import BarCharts from '../components/bar-charts/bar-charts';
import LineCharts from '../components/line-charts/line-charts';
import Grid from '@mui/material/Grid';
// import DataTable from '@/components/data-table/data-table';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import DataPivotTable from '../components/pivot-table/pivot-table';
// import DenseTable from '../components/basic-table/basic-table';
import DataTable from '../components/data-table/data-table';
import { useSearchParams } from 'next/navigation';
import { useParams } from 'next/navigation'
// import { headers } from 'next/headers'
import CustomTabPanel, { a11yProps } from '../components/tabs/tab-panels';
import ReactTable from '../components/react-table/react-table';

export default function VbgHome() {
  const [value, setValue] = React.useState(0);
  const queryParams = useSearchParams();
  const pathParams = useParams();
  // const headersList = headers();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  let x: string[] = [];
  for (const [key, value] of queryParams.entries()) {
    x.push(`${key}, ${value}`);
  }

  // let y: string[] = [];
  // for (const [key, value] of headersList.entries()) {
  //   x.push(`${key}, ${value}`);
  // }

  return (
    <>
      <Box component="main">
          <Box>
            QueryParams: {JSON.stringify(x)}
          </Box>
          {/* <Box>
            Headers: {JSON.stringify(y)}
          </Box> */}
          <Box>
            PathParams: {JSON.stringify(pathParams)}
          </Box>
          <Box>
            <Grid container>
              <Grid item xs={12}>
                <Box sx={{ width: '100%' }}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs selectionFollowsFocus value={value} variant="scrollable" scrollButtons="auto" onChange={handleChange} aria-label="Tabs for different data groups">
                      <Tab label="Quote to NBS Next Bill" {...a11yProps(0)} />
                      <Tab label="Quote to NBS Steady Stage" {...a11yProps(1)} disabled />
                      <Tab label="Quote to Bill CIR%" {...a11yProps(2)} disabled />
                      <Tab label="Quote CIR%" {...a11yProps(3)} disabled />
                      <Tab label="Summary" {...a11yProps(3)} />
                    </Tabs>
                  </Box>
                  <CustomTabPanel value={value} index={0}>
                      <ReactTable />
                      <Grid container>
                      <Grid item xs={12} md={6}>
                        <BarCharts />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <LineCharts />
                      </Grid>
                    </Grid>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                    to be soon available
                    <Grid container>
                      <Grid item xs={12} md={6}>
                        <BarCharts />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <LineCharts />
                      </Grid>
                    </Grid>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={2}>
                    to be soon available
                    <Grid container>
                      <Grid item xs={12} md={6}>
                        <BarCharts />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <LineCharts />
                      </Grid>
                    </Grid>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={3}>
                    to be soon available
                    <Grid container>
                      <Grid item xs={12} md={6}>
                        <BarCharts />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <LineCharts />
                      </Grid>
                    </Grid>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={4}>
                    <Grid container>
                      <Grid item xs={12} md={6}>
                        <BarCharts />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <LineCharts />
                      </Grid>
                    </Grid>
                  </CustomTabPanel>
                </Box>
              </Grid>
            </Grid>
          </Box>
      </Box>
    </>
  )
}

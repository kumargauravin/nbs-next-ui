'use client'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from 'react';
import CustomTabPanel, { a11yProps } from './tab-panels';
import ReactTable from '../react-table/react-table';
import BarCharts from '../bar-charts/bar-charts';
import LineCharts from '../line-charts/line-charts';
import { Box, Grid } from '@mui/material';

export default function DashTabs() {
    const [value, setValue] = React.useState(0);
    // const queryParams = useSearchParams();
    // const pathParams = useParams();
    // const headersList = headers();
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

 return  <>
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
                </>

}
  
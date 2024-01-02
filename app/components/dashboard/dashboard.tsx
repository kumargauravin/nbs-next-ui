'use client'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from 'react';
import CustomTabPanel, { a11yProps } from './dashboard-tab-panels';
// import ReactTable from '../react-table/react-table';
import BarCharts from '../bar-charts/bar-charts';
import LineCharts from '../line-charts/line-charts';
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography } from '@mui/material';
import BasicFilter from '../filter/filter';
import TreeTable from '../tree-table/treeTable';
import { useDashboardStore } from '../../store/store';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import { useApiDataStore } from '@/app/store/apiData';


export default function DashTabs(props:any) {
    const [value, setValue] = React.useState(0);
    const state = useDashboardStore((state: any) => state);
    // const apiDataState = useApiDataStore((state: any) => state);
    // const DashboardContext = React.createContext({ctx: {config:{}, state:{ filters:{} }}, setContext: () => {}});
    // const queryParams = useSearchParams();
    // const pathParams = useParams();
    // const headersList = headers();

    const tabs = [
        {label:'Quote to NBS Next Bill', enabled:true},
        {label:'Summary', enabled:true}
    ];

    React.useEffect(()=>{
        console.log("Tab Change API call to be done here.");
        
    }
    ,[value]);
  

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return <>
      {/* <DashboardContext.Provider value={{ctx: {config:{}, state:{ filters:{} }}, setContext: () => {}}}> */}
        <Grid container spacing={2}>
            <Grid item xs={12}>  {/* Only for debug */}
            <Accordion elevation={0}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>State Status</Typography>
                </AccordionSummary>
                <AccordionDetails>
                {Object.keys(state || {}).map((stateKey,index)=>{
                if (stateKey.startsWith("set")) return;
                return <Typography key={"d1"+index} variant='body2'>{stateKey + ":" + JSON.stringify(state[stateKey])}</Typography>;
                })}                
                </AccordionDetails>
            </Accordion> 
            {/* <Accordion elevation={0}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content-api"
                    id="panel1a-header-api"
                >
                    <Typography>Api Data State Status</Typography>
                </AccordionSummary>
                <AccordionDetails>
                {Object.keys(apiDataState || {}).map((stateKey, index)=>{
                if (stateKey.startsWith("set")) return;
                return <Typography key={"d2"+index} variant='body2'>{stateKey + ":" + JSON.stringify(state[stateKey])}</Typography>;
                })}                
                </AccordionDetails>
            </Accordion>  */}
            </Grid>
            <Grid item xs={12}>
                <BasicFilter />
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ width: '100%' }}>

                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

                        <Tabs selectionFollowsFocus value={value} variant="scrollable" scrollButtons="auto" onChange={handleChange} aria-label="Tabs for different data groups">
                            {
                                tabs?.map?.((tab,index)=>{
                                    return <Tab key={"tabs-"+index} label={tab?.label} {...a11yProps(index)} />
                                })
                            }
                            {/* <Tab label="Quote to NBS Next Bill" {...a11yProps(0)} />
                            <Tab label="Quote to NBS Steady Stage" {...a11yProps(1)} disabled />
                            <Tab label="Quote to Bill CIR%" {...a11yProps(2)} disabled />
                            <Tab label="Quote CIR%" {...a11yProps(3)} disabled />
                            <Tab label="Summary" {...a11yProps(3)} /> */}
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TreeTable />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <BarCharts />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <LineCharts />
                            </Grid>
                        </Grid>
                    </CustomTabPanel>
                    {/* <CustomTabPanel value={value} index={1}>
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
                    </CustomTabPanel> */}
                    <CustomTabPanel value={value} index={1}>
                        <Grid container spacing={2}>
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
        {/* </DashboardContext.Provider> */}
    </>

}

'use client'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, Grid } from '@mui/material';
import SelectChannels from './select-channels';
import SelectReportPeriod from './select-report-period';
import { useDashboardStore } from '@/app/store/store';

export default function BasicFilter() {
    const [reportType, setReportType] = React.useState('daily');
    const setFilterReportType = useDashboardStore((state: any) => state.setFilterReportType);
    const state = useDashboardStore((state:any) => state);
    //const apiDataState = useDashboardStore((state: any) => state);

    React.useEffect(()=>{
        if(state.firstLoadPending) {
            console.log("## Trigger initial API load");
            async function fetchMyAPI() {
                let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
                response = await response.json();
                console.log("## API called");
                const response2 = {"data":"received"};
                state.setFirstLoadPending(false);
                state.setApiDetails(response2);
              }
            fetchMyAPI();        
        }
    },[]);

  const handleChange = (event: SelectChangeEvent) => {
    setReportType(event.target.value as string);
    setFilterReportType(event.target.value as string);
  };

    return (
        <div>
            <Accordion elevation={0}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Filter Options</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid container item> 
                        <Box sx={{ minWidth: 240 }}>
                            <FormControl fullWidth size="small">
                                <InputLabel size="small" id="select-report-type-label">Report Type</InputLabel>
                                <Select
                                    labelId="select-report-type-label"
                                    id="select-report-type"
                                    value={reportType}
                                    label="Report Type"
                                    onChange={handleChange}
                                    size='small'
                                >
                                    <MenuItem value={"daily"}>Daily</MenuItem>
                                    <MenuItem value={"weekly"}>Weekly</MenuItem>
                                    <MenuItem value={"monthly"}>Monthly</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        </Grid>
                        <Grid container item> 
                        <Box sx={{ minWidth: "80%", maxWidth: "90%" }}>
                                <SelectChannels/>
                        </Box>
                        </Grid> 
                        <Grid container item> 
                            <SelectReportPeriod />
                        </Grid>
                        <Grid container item> 
                            <Button variant='outlined'>Apply</Button>
                        </Grid>                                               
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
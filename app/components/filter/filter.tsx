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


export default function BasicFilter() {
    const [reportType, setReportType] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setReportType(event.target.value as string);
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
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Report Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={reportType}
                                    label="Report Type"
                                    onChange={handleChange}
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
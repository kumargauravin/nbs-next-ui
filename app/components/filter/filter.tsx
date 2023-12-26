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
import { Grid } from '@mui/material';

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
                        <Grid item xs={12} sm={4}> 
                        <Box sx={{ minWidth: 120 }}>
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
                        <Grid item xs={12} sm={4}> 
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Channels</InputLabel>
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
                        <Grid item xs={12} sm={4}> 
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Report Period</InputLabel>
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
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            {/* https://mui.com/x/react-date-pickers/ */}
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
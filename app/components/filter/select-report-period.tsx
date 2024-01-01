import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

export default function SelectReportPeriod(props: any) {
    const [ reportPeriod, setReportPeriod ] = React.useState("currentMonth");

    const handleChange = (event: SelectChangeEvent) => {
        setReportPeriod(event.target.value as string);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Box sx={{ minWidth: 240 }}>
                        <FormControl fullWidth>
                            <InputLabel id="nbs-select-report-period-label">Report Period</InputLabel>
                            <Select
                                labelId="nbs-select-report-period-label"
                                id="nbs-select-report-period"
                                value={reportPeriod}
                                label="Report Type"
                                onChange={handleChange}
                            >
                                <MenuItem value={"currentMonth"}>This Month</MenuItem>
                                <MenuItem value={"ytd"}>YTD</MenuItem>
                                <MenuItem value={"lastSixMonths"}>Last Six Months</MenuItem>
                                <MenuItem value={"custom"}>Custom Period</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                { reportPeriod === 'custom' ? <><Grid item>
                    <Box sx={{ minWidth: "100%" }}>
                        <DatePicker label="Start Date" />
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{ minWidth: "100%" }}>
                        <DatePicker label="End Date" />
                    </Box>
                </Grid></>
                : <></>
              }   
            </Grid>
        </LocalizationProvider>
    );
}
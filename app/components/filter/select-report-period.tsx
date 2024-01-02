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
import { useDashboardStore } from '../../store/store';
import dayjs from 'dayjs';

export default function SelectReportPeriod(props: any) {
    const [ reportPeriod, setReportPeriod ] = React.useState("currentMonth");
    const [ start, setStart ] = React.useState<any>(null);
    const [ end, setEnd ] = React.useState<any>(null);

    //const state = useDashboardStore((state: any) => state);
    const setFilterReportPeriod = useDashboardStore((state: any) => state.setFilterReportPeriod);
    const setFilterReportPeriodStart = useDashboardStore((state: any) => state.setFilterReportPeriodStart);
    const setFilterReportPeriodEnd = useDashboardStore((state: any) => state.setFilterReportPeriodEnd);


    const handleChange = (event: SelectChangeEvent) => {
        setReportPeriod(event.target.value as string);
        setFilterReportPeriod(event.target.value as string);
    };

    React.useEffect(()=>{
        setFilterReportPeriodStart(dayjs(start?.$d).format('YYYYMMDD'));
        setFilterReportPeriodEnd(dayjs(end?.$d).format('YYYYMMDD'));
    },[start,end]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Box sx={{ minWidth: 240 }}>
                        <FormControl fullWidth size="small">
                            <InputLabel size="small" id="nbs-select-report-period-label">Report Period</InputLabel>
                            <Select
                                labelId="nbs-select-report-period-label"
                                id="nbs-select-report-period"
                                value={reportPeriod}
                                label="Report Type"
                                onChange={handleChange}
                                size='small'
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
                        <DatePicker
                          slotProps={{ textField: { size: 'small' } }}
                          value={start}
                          onChange={setStart}
                          disableFuture
                         label="Start Date" />
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{ minWidth: "100%" }}>
                        <DatePicker
                         slotProps={{ textField: { size: 'small' } }} 
                         value={end}
                         onChange={setEnd}
                         disableFuture
                         label="End Date" />
                    </Box>
                </Grid></>
                : <></>
              }   
            </Grid>
        </LocalizationProvider>
    );
}
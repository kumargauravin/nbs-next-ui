// 'use client'
import React from 'react';
import Box from '@mui/material/Box';
import DashTabs from './components/dashboard/dashboard';
export const revalidate = false;
export const fetchCache = 'force-no-store';
export default function Home() {
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
            <DashTabs/>
          </Box>
      </Box>
    </>
  )
}

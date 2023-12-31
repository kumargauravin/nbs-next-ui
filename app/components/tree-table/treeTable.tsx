import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso, TableComponents } from "react-virtuoso";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Suspense } from "react";
import Skeleton from "@mui/material/Skeleton";

interface Data {
  calories: number;
  carbs: number;
  dessert: string;
  fat: number;
  id: number;
}

interface ColumnData {
  dataKey: keyof Data;
  label: string;
  numeric?: boolean;
  width: number;
}

type Sample = [string, number, number, number];

const sample: readonly Sample[] = [
  ["Channel 1", 159, 6.0, 24],
  ["Channel 2", 237, 9.0, 37],
];

function createData(
  id: number,
  dessert: string,
  calories: number,
  fat: number,
  carbs: number
): Data {
  return { id, dessert, calories, fat, carbs };
}

const columns: ColumnData[] = [
  {
    width: 200,
    label: "Channel ID",
    dataKey: "dessert",
  },
  {
    width: 120,
    label: "Total Count",
    dataKey: "calories",
    numeric: true,
  },
  {
    width: 120,
    label: "Matched Count",
    dataKey: "fat",
    numeric: true,
  },
  {
    width: 120,
    label: "Error Percentage",
    dataKey: "carbs",
    numeric: true,
  },
];

const month = [
  "",
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const randNumber = () => sample[Math.floor(Math.random() * sample.length)];
const rows: any[] = Array.from({ length: 10000 }, (_, index: number) => {
  return {
    node: month[12 - (index % 12)] + " " + (2023 - parseInt(index / 12)),
    data: [
      createData(index, ...randNumber()),
      createData(index, ...randNumber()),
      createData(index, ...randNumber()),
      createData(index, ...randNumber()),
    ],
    summary: [createData(index, ...["Total", 1000, 7000, 82.9])],
  };
});

const VirtuosoTableComponents: TableComponents<Data> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? "right" : "left"}
          style={{ width: column.width }}
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index: number, row: any) {
  console.log(row);
  return (
    <React.Fragment>
      <>
        <TableCell colSpan={4} sx={{ padding: 0 }}>
          <Accordion elevation={0} defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={"panel1a-content" + _index}
              id={"panel1a-header" + _index}
            >
              <Typography>{row.node}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <TableContainer component={Paper} elevation={0}>
                <Table
                  size="small"
                >
                  <TableBody>
                    {row.data.map((rowData, rowDataIndex) => {
                      return (
                        <TableRow>
                          {columns.map((column, i) => {
                            return (
                              <>
                                <TableCell
                                  style={{ width: column.width }}
                                  align={
                                    column.numeric || false ? "right" : "left"
                                  }
                                >
                                  {rowData[column.dataKey]}
                                </TableCell>
                              </>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                    {row.summary.map((rowData, rowDataIndex) => {
                      return (
                        <TableRow>
                          {columns.map((column, i) => {
                            return (
                              <>
                                <TableCell
                                  style={{ width: column.width }}
                                  align={
                                    column.numeric || false ? "right" : "left"
                                  }
                                >
                                  {rowData[column.dataKey]}
                                </TableCell>
                              </>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
        </TableCell>
      </>
    </React.Fragment>
  );
}

export default function TreeTable(props:any) {

  const [treeData, setTreeData] = React.useState<any[]>([]);

  React.useEffect(()=>{
    async function fetchMyAPI() {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        response = await response.json();
        setTreeData(rows);
      }
    fetchMyAPI();
    // setTimeout(()=>{setTreeData(rows);}, 10000);
  }
  ,[]);
  
  return (
    <Paper style={{ height: 400, width: "100%" }}>
      { treeData?.length>0 ?
        <Suspense fallback="loading...">  
      <TableVirtuoso
        data={treeData}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
      </Suspense> :     <Skeleton variant="rectangular" width={210} height={118} />

    }
    </Paper>
  );
}

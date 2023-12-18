'use client'
import React from 'react';
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { useTree } from "@table-library/react-table-library/tree";

// import { DocumentationSee } from "../documentation";
// import { nodes } from "../data";

const ReactTable = () => {
    const list = [
        {
          id: "1",
          name: "VSCode",
          deadline: new Date(2020, 1, 17),
          type: "SETUP",
          isComplete: true,
        },
        {
          id: "2",
          name: "JavaScript",
          deadline: new Date(2020, 2, 28),
          type: "LEARN",
          isComplete: true,
          nodes: [
            {
              id: "2.1",
              name: "Data Types",
              deadline: new Date(2020, 2, 28),
              type: "LEARN",
              isComplete: true,
            },
            {
              id: "2.2",
              name: "Objects",
              deadline: new Date(2020, 2, 28),
              type: "LEARN",
              isComplete: true,
            },
            {
              id: "2.3",
              name: "Code Style",
              deadline: new Date(2020, 2, 28),
              type: "LEARN",
              isComplete: true,
            },
          ],
        },
        {
          id: "3",
          name: "React",
          deadline: new Date(2020, 3, 8),
          type: "LEARN",
          isComplete: false,
          nodes: [
            {
              id: "3.1",
              name: "Components",
              deadline: new Date(2020, 3, 8),
              type: "LEARN",
              isComplete: true,
            },
            {
              id: "3.2",
              name: "JSX",
              deadline: new Date(2020, 3, 8),
              type: "LEARN",
              isComplete: true,
            },
          ],
        },
      ];
      
  const data = { nodes : list };

  const theme = useTheme(getTheme());

  const tree = useTree(data, {
    onChange: onTreeChange,
  });

  function onTreeChange(action, state) {
    console.log(action, state);
  }

  const COLUMNS = [
    { label: "Task", renderCell: (item) => item.name, tree: true },
    {
      label: "Deadline",
      renderCell: (item) =>
        item.deadline.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
    },
    { label: "Type", renderCell: (item) => item.type },
    {
      label: "Complete",
      renderCell: (item) => item.isComplete.toString(),
    },
    { label: "Tasks", renderCell: (item) => item.nodes?.length },
  ];

  return (
    <>
      <CompactTable columns={COLUMNS} data={data} theme={theme} tree={tree} />
    </>
  );
};

export default ReactTable;
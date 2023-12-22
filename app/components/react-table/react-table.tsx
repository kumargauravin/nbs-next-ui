'use client'
import React from 'react';
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { useTree } from "@table-library/react-table-library/tree";
import { Virtualized } from "@table-library/react-table-library/virtualized";

import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from "@table-library/react-table-library/table";


import {
  useSort,
  HeaderCellSort,
} from "@table-library/react-table-library/sort";

import UnfoldMoreOutlinedIcon from "@mui/icons-material/UnfoldMoreOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import {
  useRowSelect,
  HeaderCellSelect,
  CellSelect,
  SelectClickTypes,
  SelectTypes,
} from "@table-library/react-table-library/select";

import {
  CellTree,
  TreeExpandClickTypes,
} from "@table-library/react-table-library/tree";

// import { DocumentationSee } from "../documentation";
// import { nodes } from "../data";

const ReactTable = () => {
  const nodes = [
    {
      id: "0",
      name: "Operating System",
      deadline: "2020-02-15T05:00:00.000Z",
      type: "SETUP",
      isComplete: true,
      nodes: null,
    },
    {
      id: "1",
      name: "VSCode",
      deadline: "2020-02-17T05:00:00.000Z",
      type: "SETUP",
      isComplete: true,
      nodes: [],
    },
    {
      id: "2",
      name: "JavaScript",
      deadline: "2020-03-28T04:00:00.000Z",
      type: "LEARN",
      isComplete: true,
      nodes: [
        {
          id: "22",
          name: "Data Types",
          deadline: "2020-03-20T04:00:00.000Z",
          type: "LEARN",
          isComplete: true,
          nodes: [
            {
              id: "221",
              name: "Strings",
              deadline: "2020-03-18T04:00:00.000Z",
              type: "LEARN",
              isComplete: true,
              nodes: null,
            },
            {
              id: "222",
              name: "Numbers",
              deadline: "2020-03-19T04:00:00.000Z",
              type: "LEARN",
              isComplete: true,
              nodes: null,
            },
          ],
        },
        {
          id: "23",
          name: "Objects",
          deadline: "2020-03-22T04:00:00.000Z",
          type: "LEARN",
          isComplete: true,
          nodes: [
            {
              id: "231",
              name: "Object Methods",
              deadline: "2020-03-20T04:00:00.000Z",
              type: "LEARN",
              isComplete: true,
              nodes: null,
            },
            {
              id: "232",
              name: "Garbage Collection",
              deadline: "2020-03-21T04:00:00.000Z",
              type: "LEARN",
              isComplete: true,
              nodes: null,
            },
          ],
        },
        {
          id: "24",
          name: "Code Style",
          deadline: "2020-03-23T04:00:00.000Z",
          type: "LEARN",
          isComplete: true,
          nodes: [],
        },
      ],
    },
    {
      id: "3",
      name: "React",
      deadline: "2020-04-08T04:00:00.000Z",
      type: "LEARN",
      isComplete: false,
      nodes: [
        {
          id: "31",
          name: "Create React App",
          deadline: "2020-04-01T04:00:00.000Z",
          type: "SETUP",
          isComplete: true,
          nodes: null,
        },
        {
          id: "32",
          name: "JSX",
          deadline: "2020-04-01T04:00:00.000Z",
          type: "LEARN",
          isComplete: true,
          nodes: null,
        },
        {
          id: "33",
          name: "Components",
          deadline: "2020-05-01T04:00:00.000Z",
          type: "LEARN",
          isComplete: false,
          nodes: [],
        },
        {
          id: "34",
          name: "Props",
          deadline: "2020-06-01T04:00:00.000Z",
          type: "LEARN",
          isComplete: false,
          nodes: null,
        },
        {
          id: "35",
          name: "State",
          deadline: "2020-07-01T04:00:00.000Z",
          type: "LEARN",
          isComplete: false,
          nodes: [
            {
              id: "351",
              name: "Remote State",
              deadline: "2020-08-01T04:00:00.000Z",
              type: "LEARN",
              isComplete: true,
              nodes: [],
            },
            {
              id: "352",
              name: "Local State",
              deadline: "2020-08-01T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: [],
            },
          ],
        },
      ],
    },
    {
      id: "4",
      name: "Git",
      deadline: "2020-05-28T04:00:00.000Z",
      type: "SETUP",
      isComplete: false,
      nodes: [],
    },
    {
      id: "5",
      name: "Node",
      deadline: "2020-06-18T04:00:00.000Z",
      type: "LEARN",
      isComplete: true,
      nodes: [
        {
          id: "51",
          name: "Express",
          deadline: "2020-06-10T04:00:00.000Z",
          type: "LEARN",
          isComplete: false,
          nodes: null,
        },
      ],
    },
    {
      id: "6",
      name: "GraphQL",
      deadline: "2020-07-30T04:00:00.000Z",
      type: "LEARN",
      isComplete: false,
      nodes: [
        {
          id: "61",
          name: "Queries and Mutations",
          deadline: "2020-07-28T04:00:00.000Z",
          type: "LEARN",
          isComplete: false,
          nodes: [
            {
              id: "611",
              name: "Fields",
              deadline: "2020-07-20T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "612",
              name: "Arguments",
              deadline: "2020-07-21T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "613",
              name: "Aliases",
              deadline: "2020-07-22T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "614",
              name: "Fragments",
              deadline: "2020-07-23T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: [
                {
                  id: "6141",
                  name: "Inline Fragments",
                  deadline: "2020-07-23T04:00:00.000Z",
                  type: "LEARN",
                  isComplete: false,
                  nodes: null,
                },
              ],
            },
            {
              id: "615",
              name: "Variables",
              deadline: "2020-07-24T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "616",
              name: "Directives",
              deadline: "2020-07-25T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
          ],
        },
      ],
    },
    {
      id: "6",
      name: "GraphQL",
      deadline: "2020-07-30T04:00:00.000Z",
      type: "LEARN",
      isComplete: false,
      nodes: [
        {
          id: "61",
          name: "Queries and Mutations",
          deadline: "2020-07-28T04:00:00.000Z",
          type: "LEARN",
          isComplete: false,
          nodes: [
            {
              id: "611",
              name: "Fields",
              deadline: "2020-07-20T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "612",
              name: "Arguments",
              deadline: "2020-07-21T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "613",
              name: "Aliases",
              deadline: "2020-07-22T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "614",
              name: "Fragments",
              deadline: "2020-07-23T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: [
                {
                  id: "6141",
                  name: "Inline Fragments",
                  deadline: "2020-07-23T04:00:00.000Z",
                  type: "LEARN",
                  isComplete: false,
                  nodes: null,
                },
              ],
            },
            {
              id: "615",
              name: "Variables",
              deadline: "2020-07-24T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "616",
              name: "Directives",
              deadline: "2020-07-25T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
          ],
        },
      ],
    },
    {
      id: "6",
      name: "GraphQL",
      deadline: "2020-07-30T04:00:00.000Z",
      type: "LEARN",
      isComplete: false,
      nodes: [
        {
          id: "61",
          name: "Queries and Mutations",
          deadline: "2020-07-28T04:00:00.000Z",
          type: "LEARN",
          isComplete: false,
          nodes: [
            {
              id: "611",
              name: "Fields",
              deadline: "2020-07-20T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "612",
              name: "Arguments",
              deadline: "2020-07-21T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "613",
              name: "Aliases",
              deadline: "2020-07-22T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "614",
              name: "Fragments",
              deadline: "2020-07-23T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: [
                {
                  id: "6141",
                  name: "Inline Fragments",
                  deadline: "2020-07-23T04:00:00.000Z",
                  type: "LEARN",
                  isComplete: false,
                  nodes: null,
                },
              ],
            },
            {
              id: "615",
              name: "Variables",
              deadline: "2020-07-24T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "616",
              name: "Directives",
              deadline: "2020-07-25T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
          ],
        },
      ],
    },
    {
      id: "6",
      name: "GraphQL",
      deadline: "2020-07-30T04:00:00.000Z",
      type: "LEARN",
      isComplete: false,
      nodes: [
        {
          id: "61",
          name: "Queries and Mutations",
          deadline: "2020-07-28T04:00:00.000Z",
          type: "LEARN",
          isComplete: false,
          nodes: [
            {
              id: "611",
              name: "Fields",
              deadline: "2020-07-20T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "612",
              name: "Arguments",
              deadline: "2020-07-21T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "613",
              name: "Aliases",
              deadline: "2020-07-22T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "614",
              name: "Fragments",
              deadline: "2020-07-23T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: [
                {
                  id: "6141",
                  name: "Inline Fragments",
                  deadline: "2020-07-23T04:00:00.000Z",
                  type: "LEARN",
                  isComplete: false,
                  nodes: null,
                },
              ],
            },
            {
              id: "615",
              name: "Variables",
              deadline: "2020-07-24T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "616",
              name: "Directives",
              deadline: "2020-07-25T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
          ],
        },
      ],
    },
    {
      id: "6",
      name: "GraphQL",
      deadline: "2020-07-30T04:00:00.000Z",
      type: "LEARN",
      isComplete: false,
      nodes: [
        {
          id: "61",
          name: "Queries and Mutations",
          deadline: "2020-07-28T04:00:00.000Z",
          type: "LEARN",
          isComplete: false,
          nodes: [
            {
              id: "611",
              name: "Fields",
              deadline: "2020-07-20T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "612",
              name: "Arguments",
              deadline: "2020-07-21T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "613",
              name: "Aliases",
              deadline: "2020-07-22T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "614",
              name: "Fragments",
              deadline: "2020-07-23T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: [
                {
                  id: "6141",
                  name: "Inline Fragments",
                  deadline: "2020-07-23T04:00:00.000Z",
                  type: "LEARN",
                  isComplete: false,
                  nodes: null,
                },
              ],
            },
            {
              id: "615",
              name: "Variables",
              deadline: "2020-07-24T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "616",
              name: "Directives",
              deadline: "2020-07-25T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
          ],
        },
      ],
    },
    {
      id: "6",
      name: "GraphQL",
      deadline: "2020-07-30T04:00:00.000Z",
      type: "LEARN",
      isComplete: false,
      nodes: [
        {
          id: "61",
          name: "Queries and Mutations",
          deadline: "2020-07-28T04:00:00.000Z",
          type: "LEARN",
          isComplete: false,
          nodes: [
            {
              id: "611",
              name: "Fields",
              deadline: "2020-07-20T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "612",
              name: "Arguments",
              deadline: "2020-07-21T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "613",
              name: "Aliases",
              deadline: "2020-07-22T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "614",
              name: "Fragments",
              deadline: "2020-07-23T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: [
                {
                  id: "6141",
                  name: "Inline Fragments",
                  deadline: "2020-07-23T04:00:00.000Z",
                  type: "LEARN",
                  isComplete: false,
                  nodes: null,
                },
              ],
            },
            {
              id: "615",
              name: "Variables",
              deadline: "2020-07-24T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "616",
              name: "Directives",
              deadline: "2020-07-25T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
          ],
        },
      ],
    },
    {
      id: "6",
      name: "GraphQL",
      deadline: "2020-07-30T04:00:00.000Z",
      type: "LEARN",
      isComplete: false,
      nodes: [
        {
          id: "61",
          name: "Queries and Mutations",
          deadline: "2020-07-28T04:00:00.000Z",
          type: "LEARN",
          isComplete: false,
          nodes: [
            {
              id: "611",
              name: "Fields",
              deadline: "2020-07-20T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "612",
              name: "Arguments",
              deadline: "2020-07-21T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "613",
              name: "Aliases",
              deadline: "2020-07-22T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "614",
              name: "Fragments",
              deadline: "2020-07-23T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: [
                {
                  id: "6141",
                  name: "Inline Fragments",
                  deadline: "2020-07-23T04:00:00.000Z",
                  type: "LEARN",
                  isComplete: false,
                  nodes: null,
                },
              ],
            },
            {
              id: "615",
              name: "Variables",
              deadline: "2020-07-24T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "616",
              name: "Directives",
              deadline: "2020-07-25T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
          ],
        },
      ],
    },
    {
      id: "6",
      name: "GraphQL",
      deadline: "2020-07-30T04:00:00.000Z",
      type: "LEARN",
      isComplete: false,
      nodes: [
        {
          id: "61",
          name: "Queries and Mutations",
          deadline: "2020-07-28T04:00:00.000Z",
          type: "LEARN",
          isComplete: false,
          nodes: [
            {
              id: "611",
              name: "Fields",
              deadline: "2020-07-20T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "612",
              name: "Arguments",
              deadline: "2020-07-21T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "613",
              name: "Aliases",
              deadline: "2020-07-22T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "614",
              name: "Fragments",
              deadline: "2020-07-23T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: [
                {
                  id: "6141",
                  name: "Inline Fragments",
                  deadline: "2020-07-23T04:00:00.000Z",
                  type: "LEARN",
                  isComplete: false,
                  nodes: null,
                },
              ],
            },
            {
              id: "615",
              name: "Variables",
              deadline: "2020-07-24T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "616",
              name: "Directives",
              deadline: "2020-07-25T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
          ],
        },
      ],
    },
    {
      id: "6",
      name: "GraphQL",
      deadline: "2020-07-30T04:00:00.000Z",
      type: "LEARN",
      isComplete: false,
      nodes: [
        {
          id: "61",
          name: "Queries and Mutations",
          deadline: "2020-07-28T04:00:00.000Z",
          type: "LEARN",
          isComplete: false,
          nodes: [
            {
              id: "611",
              name: "Fields",
              deadline: "2020-07-20T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "612",
              name: "Arguments",
              deadline: "2020-07-21T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "613",
              name: "Aliases",
              deadline: "2020-07-22T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "614",
              name: "Fragments",
              deadline: "2020-07-23T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: [
                {
                  id: "6141",
                  name: "Inline Fragments",
                  deadline: "2020-07-23T04:00:00.000Z",
                  type: "LEARN",
                  isComplete: false,
                  nodes: null,
                },
              ],
            },
            {
              id: "615",
              name: "Variables",
              deadline: "2020-07-24T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "616",
              name: "Directives",
              deadline: "2020-07-25T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
          ],
        },
      ],
    },
    {
      id: "6",
      name: "GraphQL",
      deadline: "2020-07-30T04:00:00.000Z",
      type: "LEARN",
      isComplete: false,
      nodes: [
        {
          id: "61",
          name: "Queries and Mutations",
          deadline: "2020-07-28T04:00:00.000Z",
          type: "LEARN",
          isComplete: false,
          nodes: [
            {
              id: "611",
              name: "Fields",
              deadline: "2020-07-20T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "612",
              name: "Arguments",
              deadline: "2020-07-21T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "613",
              name: "Aliases",
              deadline: "2020-07-22T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "614",
              name: "Fragments",
              deadline: "2020-07-23T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: [
                {
                  id: "6141",
                  name: "Inline Fragments",
                  deadline: "2020-07-23T04:00:00.000Z",
                  type: "LEARN",
                  isComplete: false,
                  nodes: null,
                },
              ],
            },
            {
              id: "615",
              name: "Variables",
              deadline: "2020-07-24T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "616",
              name: "Directives",
              deadline: "2020-07-25T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
          ],
        },
      ],
    },
    {
      id: "6",
      name: "GraphQL",
      deadline: "2020-07-30T04:00:00.000Z",
      type: "LEARN",
      isComplete: false,
      nodes: [
        {
          id: "61",
          name: "Queries and Mutations",
          deadline: "2020-07-28T04:00:00.000Z",
          type: "LEARN",
          isComplete: false,
          nodes: [
            {
              id: "611",
              name: "Fields",
              deadline: "2020-07-20T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "612",
              name: "Arguments",
              deadline: "2020-07-21T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "613",
              name: "Aliases",
              deadline: "2020-07-22T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "614",
              name: "Fragments",
              deadline: "2020-07-23T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: [
                {
                  id: "6141",
                  name: "Inline Fragments",
                  deadline: "2020-07-23T04:00:00.000Z",
                  type: "LEARN",
                  isComplete: false,
                  nodes: null,
                },
              ],
            },
            {
              id: "615",
              name: "Variables",
              deadline: "2020-07-24T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "616",
              name: "Directives",
              deadline: "2020-07-25T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
          ],
        },
      ],
    },
    {
      id: "6",
      name: "GraphQL",
      deadline: "2020-07-30T04:00:00.000Z",
      type: "LEARN",
      isComplete: false,
      nodes: [
        {
          id: "61",
          name: "Queries and Mutations",
          deadline: "2020-07-28T04:00:00.000Z",
          type: "LEARN",
          isComplete: false,
          nodes: [
            {
              id: "611",
              name: "Fields",
              deadline: "2020-07-20T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "612",
              name: "Arguments",
              deadline: "2020-07-21T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "613",
              name: "Aliases",
              deadline: "2020-07-22T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "614",
              name: "Fragments",
              deadline: "2020-07-23T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: [
                {
                  id: "6141",
                  name: "Inline Fragments",
                  deadline: "2020-07-23T04:00:00.000Z",
                  type: "LEARN",
                  isComplete: false,
                  nodes: null,
                },
              ],
            },
            {
              id: "615",
              name: "Variables",
              deadline: "2020-07-24T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "616",
              name: "Directives",
              deadline: "2020-07-25T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
          ],
        },
      ],
    },
    {
      id: "6",
      name: "GraphQL",
      deadline: "2020-07-30T04:00:00.000Z",
      type: "LEARN",
      isComplete: false,
      nodes: [
        {
          id: "61",
          name: "Queries and Mutations",
          deadline: "2020-07-28T04:00:00.000Z",
          type: "LEARN",
          isComplete: false,
          nodes: [
            {
              id: "611",
              name: "Fields",
              deadline: "2020-07-20T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "612",
              name: "Arguments",
              deadline: "2020-07-21T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "613",
              name: "Aliases",
              deadline: "2020-07-22T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "614",
              name: "Fragments",
              deadline: "2020-07-23T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: [
                {
                  id: "6141",
                  name: "Inline Fragments",
                  deadline: "2020-07-23T04:00:00.000Z",
                  type: "LEARN",
                  isComplete: false,
                  nodes: null,
                },
              ],
            },
            {
              id: "615",
              name: "Variables",
              deadline: "2020-07-24T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "616",
              name: "Directives",
              deadline: "2020-07-25T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
          ],
        },
      ],
    },
    {
      id: "6",
      name: "GraphQL",
      deadline: "2020-07-30T04:00:00.000Z",
      type: "LEARN",
      isComplete: false,
      nodes: [
        {
          id: "61",
          name: "Queries and Mutations",
          deadline: "2020-07-28T04:00:00.000Z",
          type: "LEARN",
          isComplete: false,
          nodes: [
            {
              id: "611",
              name: "Fields",
              deadline: "2020-07-20T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "612",
              name: "Arguments",
              deadline: "2020-07-21T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "613",
              name: "Aliases",
              deadline: "2020-07-22T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "614",
              name: "Fragments",
              deadline: "2020-07-23T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: [
                {
                  id: "6141",
                  name: "Inline Fragments",
                  deadline: "2020-07-23T04:00:00.000Z",
                  type: "LEARN",
                  isComplete: false,
                  nodes: null,
                },
              ],
            },
            {
              id: "615",
              name: "Variables",
              deadline: "2020-07-24T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "616",
              name: "Directives",
              deadline: "2020-07-25T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
          ],
        },
      ],
    },
    {
      id: "6",
      name: "GraphQL",
      deadline: "2020-07-30T04:00:00.000Z",
      type: "LEARN",
      isComplete: false,
      nodes: [
        {
          id: "61",
          name: "Queries and Mutations",
          deadline: "2020-07-28T04:00:00.000Z",
          type: "LEARN",
          isComplete: false,
          nodes: [
            {
              id: "611",
              name: "Fields",
              deadline: "2020-07-20T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "612",
              name: "Arguments",
              deadline: "2020-07-21T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "613",
              name: "Aliases",
              deadline: "2020-07-22T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "614",
              name: "Fragments",
              deadline: "2020-07-23T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: [
                {
                  id: "6141",
                  name: "Inline Fragments",
                  deadline: "2020-07-23T04:00:00.000Z",
                  type: "LEARN",
                  isComplete: false,
                  nodes: null,
                },
              ],
            },
            {
              id: "615",
              name: "Variables",
              deadline: "2020-07-24T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "616",
              name: "Directives",
              deadline: "2020-07-25T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
          ],
        },
      ],
    },
    {
      id: "6",
      name: "GraphQL",
      deadline: "2020-07-30T04:00:00.000Z",
      type: "LEARN",
      isComplete: false,
      nodes: [
        {
          id: "61",
          name: "Queries and Mutations",
          deadline: "2020-07-28T04:00:00.000Z",
          type: "LEARN",
          isComplete: false,
          nodes: [
            {
              id: "611",
              name: "Fields",
              deadline: "2020-07-20T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "612",
              name: "Arguments",
              deadline: "2020-07-21T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "613",
              name: "Aliases",
              deadline: "2020-07-22T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "614",
              name: "Fragments",
              deadline: "2020-07-23T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: [
                {
                  id: "6141",
                  name: "Inline Fragments",
                  deadline: "2020-07-23T04:00:00.000Z",
                  type: "LEARN",
                  isComplete: false,
                  nodes: null,
                },
              ],
            },
            {
              id: "615",
              name: "Variables",
              deadline: "2020-07-24T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "616",
              name: "Directives",
              deadline: "2020-07-25T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
          ],
        },
      ],
    },
    {
      id: "6",
      name: "GraphQL",
      deadline: "2020-07-30T04:00:00.000Z",
      type: "LEARN",
      isComplete: false,
      nodes: [
        {
          id: "61",
          name: "Queries and Mutations",
          deadline: "2020-07-28T04:00:00.000Z",
          type: "LEARN",
          isComplete: false,
          nodes: [
            {
              id: "611",
              name: "Fields",
              deadline: "2020-07-20T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "612",
              name: "Arguments",
              deadline: "2020-07-21T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "613",
              name: "Aliases",
              deadline: "2020-07-22T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "614",
              name: "Fragments",
              deadline: "2020-07-23T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: [
                {
                  id: "6141",
                  name: "Inline Fragments",
                  deadline: "2020-07-23T04:00:00.000Z",
                  type: "LEARN",
                  isComplete: false,
                  nodes: null,
                },
              ],
            },
            {
              id: "615",
              name: "Variables",
              deadline: "2020-07-24T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "616",
              name: "Directives",
              deadline: "2020-07-25T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
          ],
        },
      ],
    },
    {
      id: "6",
      name: "GraphQL",
      deadline: "2020-07-30T04:00:00.000Z",
      type: "LEARN",
      isComplete: false,
      nodes: [
        {
          id: "61",
          name: "Queries and Mutations",
          deadline: "2020-07-28T04:00:00.000Z",
          type: "LEARN",
          isComplete: false,
          nodes: [
            {
              id: "611",
              name: "Fields",
              deadline: "2020-07-20T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "612",
              name: "Arguments",
              deadline: "2020-07-21T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "613",
              name: "Aliases",
              deadline: "2020-07-22T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "614",
              name: "Fragments",
              deadline: "2020-07-23T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: [
                {
                  id: "6141",
                  name: "Inline Fragments",
                  deadline: "2020-07-23T04:00:00.000Z",
                  type: "LEARN",
                  isComplete: false,
                  nodes: null,
                },
              ],
            },
            {
              id: "615",
              name: "Variables",
              deadline: "2020-07-24T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "616",
              name: "Directives",
              deadline: "2020-07-25T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
          ],
        },
      ],
    },
    {
      id: "6",
      name: "GraphQL",
      deadline: "2020-07-30T04:00:00.000Z",
      type: "LEARN",
      isComplete: false,
      nodes: [
        {
          id: "61",
          name: "Queries and Mutations",
          deadline: "2020-07-28T04:00:00.000Z",
          type: "LEARN",
          isComplete: false,
          nodes: [
            {
              id: "611",
              name: "Fields",
              deadline: "2020-07-20T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "612",
              name: "Arguments",
              deadline: "2020-07-21T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "613",
              name: "Aliases",
              deadline: "2020-07-22T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "614",
              name: "Fragments",
              deadline: "2020-07-23T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: [
                {
                  id: "6141",
                  name: "Inline Fragments",
                  deadline: "2020-07-23T04:00:00.000Z",
                  type: "LEARN",
                  isComplete: false,
                  nodes: null,
                },
              ],
            },
            {
              id: "615",
              name: "Variables",
              deadline: "2020-07-24T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "616",
              name: "Directives",
              deadline: "2020-07-25T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
          ],
        },
      ],
    },
    {
      id: "6",
      name: "GraphQL",
      deadline: "2020-07-30T04:00:00.000Z",
      type: "LEARN",
      isComplete: false,
      nodes: [
        {
          id: "61",
          name: "Queries and Mutations",
          deadline: "2020-07-28T04:00:00.000Z",
          type: "LEARN",
          isComplete: false,
          nodes: [
            {
              id: "611",
              name: "Fields",
              deadline: "2020-07-20T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "612",
              name: "Arguments",
              deadline: "2020-07-21T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "613",
              name: "Aliases",
              deadline: "2020-07-22T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "614",
              name: "Fragments",
              deadline: "2020-07-23T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: [
                {
                  id: "6141",
                  name: "Inline Fragments",
                  deadline: "2020-07-23T04:00:00.000Z",
                  type: "LEARN",
                  isComplete: false,
                  nodes: null,
                },
              ],
            },
            {
              id: "615",
              name: "Variables",
              deadline: "2020-07-24T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
            {
              id: "616",
              name: "Directives",
              deadline: "2020-07-25T04:00:00.000Z",
              type: "LEARN",
              isComplete: false,
              nodes: null,
            },
          ],
        },
      ],
    },
  ];

  const data = { nodes };

  const THEME = {
    Table: ``,
    Header: ``,
    Body: ``,
    BaseRow: `
      background-color: var(--theme-ui-colors-background);
  
      &.row-select-selected, &.row-select-single-selected {
        background-color: var(--theme-ui-colors-background-secondary);
        color: var(--theme-ui-colors-text);
      }
    `,
    HeaderRow: `
      font-size: 10px;
      color: var(--theme-ui-colors-text-light);
  
      .th {
        border-bottom: 1px solid var(--theme-ui-colors-border);
      }
    `,
    Row: `
      font-size: 12px;
      color: var(--theme-ui-colors-text);
  
      &:not(:last-of-type) .td {
        border-bottom: 1px solid var(--theme-ui-colors-border);
      }
  
      &:hover {
        color: var(--theme-ui-colors-text-light);
      }
    `,
    BaseCell: `
      border-bottom: 1px solid transparent;
      border-right: 1px solid transparent;
  
      padding: 8px;
      height: 52px;
  
      svg {
        fill: var(--theme-ui-colors-text);
      }
    `,
    HeaderCell: ``,
    Cell: ``,
  };


  const theme = useTheme(THEME);

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
        item?.deadline?.toLocaleDateString?.("en-US", {
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

  const sort = useSort(
    data,
    {},
    {
      sortFns: {
        TASK: (array) => array.sort((a, b) => a.name.localeCompare(b.name)),
        DEADLINE: (array) => array.sort((a, b) => a.deadline - b.deadline),
        TYPE: (array) => array.sort((a, b) => a.type.localeCompare(b.type)),
        COMPLETE: (array) => array.sort((a, b) => a.isComplete - b.isComplete),
        TASKS: (array) =>
          array.sort((a, b) => (a.nodes || []).length - (b.nodes || []).length),
      },

      sortIcon: {
        margin: "4px",
        iconDefault: <UnfoldMoreOutlinedIcon fontSize="small" />,
        iconUp: <KeyboardArrowUpOutlinedIcon fontSize="small" />,
        iconDown: <KeyboardArrowDownOutlinedIcon fontSize="small" />,
      },
    }
  );

  const select = useRowSelect(
    data,
    {
      onChange: onSelectChange,
    },
    {
      rowSelect: SelectTypes.SingleSelect,
      buttonSelect: SelectTypes.SingleSelect,
    }
  );

  function onSelectChange(action, state) {
    console.log(action, state);
  }

  return (
    <div style={{ height: "400px" }}>
    <Table
      data={data}
      theme={theme}
      layout={{ fixedHeader: true }}
      sort={sort}
      select={select}
      tree={tree}
    >
      {(tableList) => (

        <Virtualized
          tableList={tableList}
          rowHeight={35}
          header={() => (
            <Header>
              <HeaderRow>
                <HeaderCellSort resize sortKey="TASK">
                  Task
                </HeaderCellSort>
                <HeaderCellSort resize sortKey="DEADLINE">
                  Deadline
                </HeaderCellSort>
                <HeaderCellSort resize sortKey="TYPE">
                  Type
                </HeaderCellSort>
                <HeaderCellSort resize sortKey="COMPLETE">
                  Complete
                </HeaderCellSort>
                <HeaderCellSort resize sortKey="TASKS">
                  Tasks
                </HeaderCellSort>
              </HeaderRow>
            </Header>
          )}
          body={(item, index) => (
            <Row key={item.id} item={item}>
              <CellTree item={item}>{item.name}</CellTree>
              <Cell>
                {item?.deadline?.toLocaleDateString?.("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </Cell>
              <Cell>{item.type}</Cell>
              <Cell>{item.isComplete.toString()}</Cell>
              <Cell>{item.nodes ? item.nodes.length : ""}</Cell>
            </Row>
          )}
        />)}
    </Table>
    </div>
  );
};

export default ReactTable;
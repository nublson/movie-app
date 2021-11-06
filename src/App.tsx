import { useMemo } from "react";
import { Column, useTable } from "react-table";
import styled from "styled-components";
import Layout from "./components/Layout";
import { Heading } from "./components/shared";

interface DataProps {
  rank: number;
  title: string;
  year: number;
  revenue: number;
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 4.5rem;
`;

const Table = styled.table`
  width: 100%;
  height: 100%;
`;

const TableHead = styled.thead`
  width: 100%;

  th {
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #0b749b;
    text-align: left;
    border-bottom: 1px solid #0b749b;
    padding: 0.5rem 1rem;
  }
`;

const TableBody = styled.tbody`
  width: 100%;

  td {
    height: 5rem;
    color: #536b7a;
    border-bottom: 1px solid #9aaebb;
    padding: 1rem;
  }
`;

function App() {
  const data = useMemo(
    () => [
      {
        rank: 1,
        title: "Guardians of the Galaxy",
        year: 2014,
        revenue: 333.13,
      },
    ],
    []
  );

  const columns = useMemo<Column<DataProps>[]>(
    () => [
      {
        Header: "Ranking",
        accessor: "rank",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Year",
        accessor: "year",
      },
      {
        Header: "Revenue",
        accessor: "revenue",
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <Layout>
      <AppContainer>
        <Heading />
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </TableBody>
        </Table>
      </AppContainer>
    </Layout>
  );
}

export default App;

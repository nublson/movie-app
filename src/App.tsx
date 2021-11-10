import { useMemo } from "react";
import { Column, useTable } from "react-table";
import Popup from "reactjs-popup";
import Layout from "./components/Layout";
import { Heading, PopupContainer } from "./components/shared";
import { useApi } from "./hooks";
import {
  AppContainer,
  StyledIcon,
  StyledRevenue,
  Table,
  TableBody,
  TableData,
  TableElement,
  TableHead,
} from "./styles";
import { MovieProps } from "./types";

function App() {
  const { movies } = useApi();

  const columns = useMemo<Column<MovieProps>[]>(
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
        Cell: ({ cell }) => (
          <StyledRevenue>
            <p>&#36;{cell.value ? cell.value : 0}</p>
            <StyledIcon onClick={() => console.log("Click...")} />
          </StyledRevenue>
        ),
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data: movies });

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
                <Popup
                  key={row.original.id}
                  trigger={
                    <TableElement {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <TableData {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </TableData>
                        );
                      })}
                    </TableElement>
                  }
                >
                  {(close: any) => (
                    <PopupContainer id={row.original.id} onClick={close} />
                  )}
                </Popup>
              );
            })}
          </TableBody>
        </Table>
      </AppContainer>
    </Layout>
  );
}

export default App;

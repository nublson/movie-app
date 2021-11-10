import { useMemo } from "react";
import { IoEye } from "react-icons/io5";
import { Column, useTable } from "react-table";
import Popup from "reactjs-popup";
import styled from "styled-components";
import Layout from "./components/Layout";
import { Heading, PopupContainer } from "./components/shared";
import { useApi } from "./hooks";
import { MovieProps } from "./types";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 4.5rem;
`;

const Table = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  width: 100%;

  tr {
    border-bottom: 1px solid #0b749b;
  }

  th {
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #0b749b;
    text-align: left;
    padding: 0.5rem 1rem;
  }
`;

const TableBody = styled.tbody`
  width: 100%;
`;

const TableElement = styled.tr`
  cursor: pointer;
`;

const TableData = styled.td`
  height: 5rem;
  color: #536b7a;
  border-bottom: 1px solid #9aaebb;
  padding: 1rem;
`;

const StyledRevenue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10rem;
`;

const StyledIcon = styled(IoEye)`
  cursor: pointer;
`;

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
                  <PopupContainer id={row.original.id} />
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

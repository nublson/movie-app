import styled from "styled-components";

import { IoEye } from "react-icons/io5";

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 4.5rem;
`;

export const Table = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
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

export const TableBody = styled.tbody`
  width: 100%;
`;

export const TableElement = styled.tr`
  cursor: pointer;
`;

export const TableData = styled.td`
  height: 5rem;
  color: #536b7a;
  border-bottom: 1px solid #9aaebb;
  padding: 1rem;
`;

export const StyledRevenue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10rem;
`;

export const StyledIcon = styled(IoEye)`
  cursor: pointer;
`;

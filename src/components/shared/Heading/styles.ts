import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;

  h1 {
    font-size: 2.4rem;
    font-weight: 400;
    color: #386071;
  }

  .filters {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;

    button {
      padding: 0.8rem 1.2rem;
      border: 1px solid #78849e66;
      background-color: #fff;
      border-radius: 20px;

      font-size: 1.2rem;
      color: #78849e;
    }
  }
`;

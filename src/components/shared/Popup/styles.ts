import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 300;
  background-color: rgba(0, 0, 0, 0.2);

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 75rem;
  margin: 0 auto;
  min-height: 65rem;
  background-color: #fff;
  padding: 3rem 6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.5rem;

    h2 {
      font-size: 3.2rem;
      font-weight: 300;
      color: #164e78;
    }

    .icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 2.5rem;
      color: #718fa2;
      cursor: pointer;

      span {
        font-size: 0.8rem;
        text-transform: uppercase;
      }
    }
  }

  .data {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;

    .section-group {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 5rem;
    }

    .section {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      .title {
        font-size: 1.4rem;
        color: #78849eb9;
      }

      p {
        font-size: 1.6rem;
        color: #78849e;
        font-weight: 500;
      }

      .color {
        color: #00baff;
      }
    }
  }
`;

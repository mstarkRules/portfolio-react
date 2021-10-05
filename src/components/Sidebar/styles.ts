import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  width: 80px;

  position: fixed;
  z-index: 99;
  bottom: 0px;
  right: 0px;
  padding-bottom: 10px;

  @media (max-width: 540px) {
    background-color: #f0f2f5;

    padding-top: 10px;
    position: fixed;
    z-index: 99;
    display: flex;
    flex-direction: row;
    justify-content: center;

    width: 100%;
    height: 80px;
  }
`;

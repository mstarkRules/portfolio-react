import styled from "styled-components";

export const Container = styled.div`
  height: 1.8rem;
  border-radius: 0.2rem;
  padding: 20px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #007bb6;

  color: #fff;

  transition: all ease 0.2s;

  :hover {
    transform: scale(1.01);
  }
`;

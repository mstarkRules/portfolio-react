import styled from "styled-components";

export const Container = styled.header``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-left: 10px;
  padding-right: 10px;

  box-sizing: border-box;

  img {
    object-fit: cover;
    width: 100%;
    max-height: 300px;
    border-radius: 5px;
  }
`;

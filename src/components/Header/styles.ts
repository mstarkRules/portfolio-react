import styled from "styled-components";

export const Container = styled.header``;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;

  img {
    object-fit: cover;
    width: 100%;
    max-height: 300px;
    border-radius: 5px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Content = styled.div`
  min-width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-right: 10px;
  padding-left: 10px;
  img {
    object-fit: cover;
    width: 100%;
    max-height: 300px;
    border-radius: 5px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

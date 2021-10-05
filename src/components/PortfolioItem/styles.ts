import styled from "styled-components";

export const Container = styled.div`
  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 10px;
    background-color: #888;

    width: 22rem;
    height: 13rem;
    border-radius: 0.5rem;

    cursor: pointer;
    transition: all ease 0.2s;

    color: #fff;

    :hover {
      transform: scale(1.05);
      transform: rotateZ(-1deg);
    }
  }
`;

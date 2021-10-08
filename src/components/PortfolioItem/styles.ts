import styled from "styled-components";

interface ContainerProps {
  img: string;
}

export const Container = styled.div<ContainerProps>`
  a {
    div {
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
      color: transparent;
      box-shadow: 0px 5px 20 0px #d2d2d27d;
      background-image: url(${(props) => props.img});
      background-size: cover;

      :hover {
        transform: scale(1.05);
        color: #111;
    }
  }
`;

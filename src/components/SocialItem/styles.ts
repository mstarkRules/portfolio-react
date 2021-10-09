import styled from "styled-components";

interface ContainerProps {
  type: string;
  size: "medium" | "large";
}

export const Container = styled.div<ContainerProps>`
  width: 50px;
  height: 50px;

  border-radius: 25px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #363636;
    font-size: ${(props) => (props.size === "medium" ? "2rem" : "3rem")};
    transition: all ease 0.2s;

    :hover {
      color: ${(props) => props.type === "whatsapp" && "#34af23"};
      color: ${(props) => props.type === "linkedin" && "#007bb6"};
      color: ${(props) => props.type === "github" && "#111"};
      transform: scale(1.3);
    }
  }
`;

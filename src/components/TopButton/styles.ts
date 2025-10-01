import styled from "styled-components";

interface ButtonProps {
  visible: string;
}

export const Button = styled.div<ButtonProps>`
  display: ${(props) => props.visible};
  font-size: 3.5rem;
  color: #007bb6;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;

  transition: all ease 0.2s;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

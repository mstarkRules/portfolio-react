import styled from "styled-components";

interface ButtonProps {
  visible: string;
}

export const Button = styled.div<ButtonProps>`
  display: ${(props) => props.visible};
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 1.875rem;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
`;

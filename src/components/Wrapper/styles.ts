import styled from "styled-components";

interface ContainerProps {
  fontSize?: string;
  padding?: boolean | string;
  strong?: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: auto;
  width: auto;

  font-weight: ${(props) => (props.strong === true ? "bold" : "none")};
  font-size: ${(props) => {
    switch (props.fontSize) {
      case "small":
        return "0.75rem";
        break;
      case "normal":
        return "1rem";
        break;
      case "big":
        return "1.5rem";
        break;
      case "huge":
        return "2rem";
        break;
      default:
        return props.fontSize;
        break;
    }
  }};

  padding: ${(props) => {
    switch (props.padding) {
      case true:
        return "1rem";
        break;
      case "top":
        return "1rem 0 0 0";
      case "right":
        return "0 1rem 0 0";
      case "bottom":
        return "0 0 1rem 0";
      case "left":
        return "0 0 0 1rem";
      case "noLeft":
        return "1rem 1rem 1rem 0";
      case "noTop":
        return "0 1rem 1rem 1rem";
      case "noRight":
        return "1rem 0 1rem 1rem";
      case "noBottom":
        return "1rem 1rem 0 1rem";
      default:
        return props.padding;
    }
  }};
  color: ${(props) => (props.color ? props.color : "#000")};
`;

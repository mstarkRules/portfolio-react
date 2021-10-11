import { useEffect, useState } from "react";
import { useAnimate } from "../../hooks/useAnimate";
import { useTheme } from "../../hooks/useTheme";
import { Container } from "./style";

const WelcomeText = (): JSX.Element => {
  const [displayText, setDisplayText] = useState("Bem vind@ ao meu Portfólio");

  const { text, readyClick, animateText, visibleColor } = useAnimate();

  useEffect(() => {
    handleAnimateText();
  }, []);

  function handleAnimateText() {
    animateText(displayText);
  }

  return (
    <Container
      onClick={handleAnimateText}
      onMouseOver={handleAnimateText}
      display={visibleColor}
    >
      <strong>{text}</strong>
      <strong className="second">_</strong>
    </Container>
  );
};

export default WelcomeText;

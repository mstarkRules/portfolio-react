import { useEffect, useState } from "react";
import { useAnimate } from "../../hooks/useAnimate";
import { useTheme } from "../../hooks/useTheme";
import { Container } from "./style";

const WelcomeText = () => {
  const [displayText, setDisplayText] = useState("Bem vind@ ao meu Portfólio");

  const { welComeText, readyClick, animateText, visibleColor } = useAnimate();
  useEffect(() => {
    handleAnimateText();
  }, []);

  function handleAnimateText() {
    let obj = {
      displayText: displayText,
      type: "welcome",
    };
    animateText(obj);
  }

  return (
    <Container
      onClick={handleAnimateText}
      onMouseOver={handleAnimateText}
      display={visibleColor}
    >
      <strong>{welComeText}</strong>
      <strong className="second">_</strong>
    </Container>
  );
};

export default WelcomeText;

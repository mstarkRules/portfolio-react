import { useEffect, useState } from "react";
import { useAnimate } from "../../hooks/useAnimate";
import { useTheme } from "../../hooks/useTheme";
import { Container } from "./style";

const WelcomeText = (): JSX.Element => {
  const { text, animateText, visibleColor } = useAnimate();
  const { theme } = useTheme();

  const [clicou, setClicou] = useState(0);

  function handleAnimateText() {
    animateText();
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

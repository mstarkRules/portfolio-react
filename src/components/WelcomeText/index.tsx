import { useEffect, useState } from "react";
import { Container } from "./style";

export function WelcomeText() {
  const [text, setText] = useState("Bem vind@ ao meu portfólio");
  const [secondText, setSecondText] = useState("white");
  const [clicou, setClicou] = useState(0);

  function animateText() {
    let arrayText = text.split("");

    let texto = "";
    if (clicou === 0) {
      setClicou(1);

      for (let i = 0; i < arrayText.length; i++) {
        (function (i) {
          setTimeout(function () {
            texto += arrayText[i];
            setText(texto);
            if (i === arrayText.length - 1) {
              setClicou(0);
              console.log(clicou);
            }
          }, 100 * i);
        })(i);
      }
      piscarTexto();
    }
  }

  function piscarTexto() {
    let textos = ["", "_"];
    let texto = "";
    function change() {
      if (secondText === "transparent") {
        setSecondText("white");
      } else if (secondText === "white") {
        setSecondText("transparent");
      }
    }

    setInterval(change, 1000);
  }

  useEffect(() => {
    animateText();
  }, []);

  return (
    <Container
      onClick={animateText}
      onMouseOver={animateText}
      display={secondText}
    >
      <strong>{text}</strong>
      <strong className="second">_</strong>
    </Container>
  );
}

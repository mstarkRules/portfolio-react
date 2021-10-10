import { createContext, ReactNode, useContext, useState } from "react";

interface AnimateProviderProps {
  children: ReactNode;
}

interface AnimateContextData {
  animateText: () => void;
  piscarTexto: () => void;
}

const AnimateContext = createContext<AnimateContextData>(
  {} as AnimateContextData
);

export function AnimateProvider({
  children,
}: AnimateProviderProps): JSX.Element {
  const [clicou, setClicou] = useState(0);
  const [text, setText] = useState("Bem vindo");
  const [secondText, setSecondText] = useState("white");

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

  return (
    <AnimateContext.Provider value={{ animateText, piscarTexto }}>
      {children}
    </AnimateContext.Provider>
  );
}

export function useAnimate(): AnimateContextData {
  const context = useContext(AnimateContext);

  return context;
}

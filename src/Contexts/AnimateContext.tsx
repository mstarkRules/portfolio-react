import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface AnimateProviderProps {
  children: ReactNode;
}

interface AnimateContextData {
  text: string;
  visibleColor: string;
  animateText: () => void;
  alternateText: () => void;
}

export const AnimateContext = createContext<AnimateContextData>(
  {} as AnimateContextData
);

export function AnimateProvider({
  children,
}: AnimateProviderProps): JSX.Element {
  const [clicou, setClicou] = useState(0);
  const [text, setText] = useState("Bem vind@ ao meu Portfólio");
  const [visibleColor, setVisibleColor] = useState("white");

  const animateText = () => {
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
      alternateText();
    }
  };

  useEffect(() => {
    animateText();
  }, []);

  function alternateText() {
    let textos = ["", "_"];
    let texto = "";
    function change() {
      if (visibleColor === "transparent") {
        setVisibleColor("white");
      } else if (visibleColor === "white") {
        setVisibleColor("transparent");
      }
    }

    setInterval(change, 1000);
  }

  return (
    <AnimateContext.Provider
      value={{ text, visibleColor, animateText, alternateText }}
    >
      {children}
    </AnimateContext.Provider>
  );
}

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

interface dataText {
  displayText: string;
  type: string;
}

interface AnimateContextData {
  welComeText: string;
  projectText: string;
  readyClick: Boolean;
  visibleColor: string;
  animateText: (dataText: dataText) => void;
  alternateText: () => void;
}

export const AnimateContext = createContext<AnimateContextData>(
  {} as AnimateContextData
);

export function AnimateProvider({
  children,
}: AnimateProviderProps) {
  const [readyClick, setReadyClick] = useState(true);

  const [welComeText, setWelcomeText] = useState(String);
  const [projectText, setProjectText] = useState(String);

  const [visibleColor, setVisibleColor] = useState("white");

  const animateText = (obj: dataText) => {
    if (readyClick) {
      handleAnimateText(obj);
      console.log(obj.type);
    }
  };

  const handleAnimateText = (obj: dataText) => {
    if (obj.type === "welcome") {
      setWelcomeText(obj.displayText);
    } else if (obj.type === "project") {
      setProjectText(obj.displayText);
    }

    let arrayText = obj.displayText.split("");
    let texto = "";
    setReadyClick(false);

    for (let i = 0; i < arrayText.length; i++) {
      (function (i) {
        setTimeout(function () {
          texto += arrayText[i];
          if (obj.type === "welcome") {
            setWelcomeText(texto);
          } else if (obj.type === "project") {
            setProjectText(texto);
          }
          if (i === arrayText.length - 1) {
            setReadyClick(true);
          }
        }, 100 * i);
      })(i);
    }
    alternateText();
  };

  useEffect(() => {
    console.log("estamos prontos? ", readyClick);
  }, [readyClick]);

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
      value={{
        welComeText,
        readyClick,
        visibleColor,
        animateText,
        alternateText,
        projectText,
      }}
    >
      {children}
    </AnimateContext.Provider>
  );
}

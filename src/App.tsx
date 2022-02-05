import { ProjectsSection } from "./components/ProjectsSection";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { TopButton } from "./components/TopButton";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { AnimateProvider } from "./contexts/AnimateContext";
import { PerfilSection } from "./components/PerfilSection";
import { Footer } from "./components/Footer";
import { HomeContainer } from "./components/HomeContainer";

import Modal from "./components/Modal";

function setIsOpen() {}

export function App() {
  return (
    <ThemeContextProvider>
      <AnimateProvider>
        <>
          <div
            style={{
              height: "100vh",
              width: "100%",
            }}
          >
            <Header />
            <PerfilSection />
          </div>

          <ProjectsSection />
          <Footer />

          <TopButton />

          <Modal isOpen={false} setIsOpen={() => setIsOpen()}>
            Olaa
          </Modal>

          <GlobalStyle />
        </>
      </AnimateProvider>
    </ThemeContextProvider>
  );
}

import { ProjectsSection } from "./components/ProjectsSection";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { TopButton } from "./components/TopButton";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { AnimateProvider } from "./contexts/AnimateContext";
import { PerfilSection } from "./components/PerfilSection";
import { Footer } from "./components/Footer";
import { HomeContainer } from "./components/HomeContainer";
import HeaderFixed from "./components/HeaderFixed";

import Aos from "aos";
import "aos/dist/aos.css";
import AboutSection from "./components/AboutSection";

export function App() {
  Aos.init({
    // startEvent: "DOMContentLoaded",
    once: true,
  });

  return (
    <ThemeContextProvider>
      <AnimateProvider>
        <>
          <HeaderFixed />
          <div
            style={{
              height: "100vh",
              width: "100%",
            }}
          >
            <Header />
            <PerfilSection />
          </div>

          <AboutSection />

          <ProjectsSection />
          <Footer />

          <TopButton />

          <GlobalStyle />
        </>
      </AnimateProvider>
    </ThemeContextProvider>
  );
}

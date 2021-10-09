import { ProjectsSection } from "./components/ProjectsSection";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { TopButton } from "./components/TopButton";
import { ThemeContextProvider } from "./Contexts/ThemeContext";
import { PerfilSection } from "./components/PerfilSection";
import { Footer } from "./components/Footer";
import { HomeContainer } from "./components/HomeContainer";
import { ReactNode } from "react";

export function App() {
  return (
    <ThemeContextProvider>
      <>
        <div style={{ height: "100vh" }}>
          <Header />
          <PerfilSection />
        </div>

        <ProjectsSection />
        <Footer />

        <GlobalStyle />
      </>
    </ThemeContextProvider>
  );
}

import { ProjectsSection } from "./components/ProjectsSection";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { TopButton } from "./components/TopButton";
import { ThemeContextProvider } from "./Contexts/ThemeContext";
import { PerfilSection } from "./components/PerfilSection";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <ThemeContextProvider>
      <>
        <Header />
        <PerfilSection />
        <ProjectsSection />
        <Footer />

        <GlobalStyle />
      </>
    </ThemeContextProvider>
  );
}

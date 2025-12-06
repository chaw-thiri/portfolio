import styled from 'styled-components';
import { ThemeProvider } from './utils/ThemeContext';
import { useTheme } from './utils/ThemeContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Research from './sections/Research';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Awards from './sections/Awards';
import Contact from './sections/Contact';

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.bg.primary};
  color: ${props => props.theme.text.primary};
  transition: background 0.3s ease, color 0.3s ease;
`;

function AppContent() {
  const { theme } = useTheme();

  return (
    <AppContainer theme={theme}>
      <Navigation />
      <main>
        <Hero />
        <Awards />
        <Skills />
        <Projects />
        <Research />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </AppContainer>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

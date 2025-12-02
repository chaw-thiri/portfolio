import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import styled from 'styled-components';
import { useTheme } from '../utils/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  background: ${props => props.$scrolled
    ? props.theme.bg.card + 'dd'
    : 'transparent'
  };
  backdrop-filter: ${props => props.$scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.$scrolled ? props.theme.shadow.medium : 'none'};
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  background: ${props => props.theme.accent.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: ${props => props.theme.text.primary};
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${props => props.theme.accent.primary};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${props => props.theme.accent.primary};

    &::after {
      transform: scaleX(1);
    }
  }

  &.active::after {
    transform: scaleX(1);
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.text.primary};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 300px;
  height: 100vh;
  background: ${props => props.theme.bg.card};
  box-shadow: ${props => props.theme.shadow.large};
  padding: 2rem;
  z-index: 999;
`;

const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 4rem;
`;

const MobileNavLink = styled(motion.a)`
  color: ${props => props.theme.text.primary};
  font-weight: 500;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${props => props.theme.border.secondary};

  &:hover {
    color: ${props => props.theme.accent.primary};
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: ${props => props.theme.text.primary};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
`;

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Awards', href: '#awards' },
  { label: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <Nav
        theme={theme}
        $scrolled={scrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <NavContainer>
          <Logo
            theme={theme}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Portfolio
          </Logo>

          <NavLinks theme={theme}>
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                theme={theme}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ y: -2 }}
                className={activeSection === item.href ? 'active' : ''}
              >
                {item.label}
              </NavLink>
            ))}
            <ThemeToggle />
          </NavLinks>

          <MobileMenuButton
            theme={theme}
            onClick={() => setMobileMenuOpen(true)}
            whileTap={{ scale: 0.9 }}
          >
            <FiMenu />
          </MobileMenuButton>
        </NavContainer>
      </Nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <MobileMenuOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <MobileMenu
              theme={theme}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
            >
              <CloseButton
                theme={theme}
                onClick={() => setMobileMenuOpen(false)}
                whileTap={{ scale: 0.9 }}
              >
                <FiX />
              </CloseButton>

              <MobileNavLinks>
                {navItems.map((item, index) => (
                  <MobileNavLink
                    key={item.label}
                    theme={theme}
                    onClick={() => scrollToSection(item.href)}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </MobileNavLink>
                ))}
                <div style={{ marginTop: '1rem' }}>
                  <ThemeToggle />
                </div>
              </MobileNavLinks>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;

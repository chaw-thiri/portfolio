import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../utils/ThemeContext';
import styled from 'styled-components';

const ToggleButton = styled(motion.button)`
  position: relative;
  width: 60px;
  height: 30px;
  background: ${props => props.theme.accent.primary};
  border-radius: 30px;
  border: none;
  cursor: pointer;
  padding: 0;
  box-shadow: ${props => props.theme.shadow.small};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ToggleCircle = styled(motion.div)`
  position: absolute;
  top: 3px;
  left: ${props => props.$isDark ? 'calc(100% - 27px)' : '3px'};
  width: 24px;
  height: 24px;
  background: ${props => props.theme.text.onAccent};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${props => props.theme.shadow.small};
  transition: left 0.3s ease;

  svg {
    width: 14px;
    height: 14px;
    color: ${props => props.theme.accent.primary};
  }
`;

const ThemeToggle = () => {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <ToggleButton
      theme={theme}
      type="button"
      onClick={toggleTheme}
      $isDark={isDark}
      whileTap={{ scale: 0.9 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
    >
      <ToggleCircle theme={theme} $isDark={isDark}>
        {isDark ? <FiMoon /> : <FiSun />}
      </ToggleCircle>
    </ToggleButton>
  );
};

export default ThemeToggle;

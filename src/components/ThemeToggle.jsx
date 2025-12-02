import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../utils/ThemeContext';
import styled from 'styled-components';

const ToggleButton = styled(motion.button)`
  position: relative;
  width: 60px;
  height: 30px;
  background: ${props => props.$isDark ? '#C4667D' : '#390517'};
  border-radius: 30px;
  border: none;
  cursor: pointer;
  padding: 0;
  box-shadow: ${props => props.$isDark
    ? '0 4px 16px rgba(196, 102, 125, 0.25)'
    : '0 4px 16px rgba(57, 5, 23, 0.2)'
  };
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
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: left 0.3s ease;

  svg {
    width: 14px;
    height: 14px;
    color: ${props => props.$isDark ? '#C4667D' : '#390517'};
  }
`;

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <ToggleButton
      onClick={toggleTheme}
      $isDark={isDark}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <ToggleCircle $isDark={isDark}>
        {isDark ? <FiMoon /> : <FiSun />}
      </ToggleCircle>
    </ToggleButton>
  );
};

export default ThemeToggle;

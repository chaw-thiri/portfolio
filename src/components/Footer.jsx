import { motion } from 'framer-motion';
import { FiHeart, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import styled from 'styled-components';
import { useTheme } from '../utils/ThemeContext';
import { personalInfo } from '../data/portfolioData';

const FooterContainer = styled.footer`
  padding: 3rem 2rem 2rem;
  background: ${props => props.theme.bg.card};
  border-top: 1px solid ${props => props.theme.border.primary};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${props => props.theme.bg.secondary};
  color: ${props => props.theme.text.primary};
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.accent.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  color: ${props => props.theme.text.tertiary};
  font-size: ${props => props.theme.fontSize.sm};
  text-align: center;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;

  .heart {
    color: ${props => props.theme.accent.secondary};
    animation: heartbeat 1.5s ease-in-out infinite;
  }

  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  }
`;

const Link = styled.a`
  color: ${props => props.theme.accent.primary};
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.accent.secondary};
  }
`;

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    github: { icon: <FiGithub />, url: personalInfo.social.github },
    linkedin: { icon: <FiLinkedin />, url: personalInfo.social.linkedin },
    twitter: { icon: <FiTwitter />, url: personalInfo.social.twitter },
  };

  return (
    <FooterContainer theme={theme}>
      <Container>
        <SocialLinks>
          {Object.entries(socialIcons).map(([key, { icon, url }]) => (
            url && (
              <SocialLink
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                theme={theme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={key}
              >
                {icon}
              </SocialLink>
            )
          ))}
        </SocialLinks>

        <Copyright theme={theme}>
          <span>© {currentYear}</span>
          <span>{personalInfo.name}.</span>
          <span>Made with</span>
          <FiHeart className="heart" />
          <span>using</span>
          <Link href="https://react.dev" target="_blank" rel="noopener noreferrer" theme={theme}>
            React
          </Link>
        </Copyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;

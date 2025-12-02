import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiExternalLink } from 'react-icons/fi';
import { SiGooglescholar, SiOrcid } from 'react-icons/si';
import styled from 'styled-components';
import { useTheme } from '../utils/ThemeContext';
import { personalInfo } from '../data/portfolioData';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 2rem 4rem;
  background: ${props => props.theme.bg.primary};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 600px;
    height: 600px;
    background: ${props => props.theme.accent.primary};
    opacity: 0.03;
    border-radius: 50%;
    filter: blur(100px);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -50%;
    left: -20%;
    width: 600px;
    height: 600px;
    background: ${props => props.theme.accent.secondary};
    opacity: 0.03;
    border-radius: 50%;
    filter: blur(100px);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const Content = styled.div`
  @media (max-width: 768px) {
    order: 2;
  }
`;

const Greeting = styled(motion.p)`
  font-size: ${props => props.theme.fontSize.lg};
  color: ${props => props.theme.text.secondary};
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Name = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1rem;
  background: ${props => props.theme.accent.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Title = styled(motion.h2)`
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: ${props => props.theme.text.primary};
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const Tagline = styled(motion.p)`
  font-size: ${props => props.theme.fontSize.lg};
  color: ${props => props.theme.text.secondary};
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 600px;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${props => props.theme.bg.secondary};
  color: ${props => props.theme.text.primary};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    background: ${props => props.theme.accent.primary};
    color: white;
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadow.gold};
  }
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Button = styled(motion.button)`
  padding: 0.875rem 2rem;
  font-size: ${props => props.theme.fontSize.base};
  font-weight: 600;
  border-radius: ${props => props.theme.radius.lg};
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &.primary {
    background: ${props => props.theme.accent.primary};
    color: white;
    border: none;

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.shadow.large};
    }
  }

  &.secondary {
    background: transparent;
    color: ${props => props.theme.text.primary};
    border: 2px solid ${props => props.theme.accent.primary};

    &:hover {
      background: ${props => props.theme.accent.primary};
      color: white;
      transform: translateY(-2px);
    }
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    order: 1;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid transparent;
  background: ${props => props.theme.accent.primary};
  padding: 4px;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 250px;
    height: 250px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  background: ${props => props.theme.bg.secondary};
`;

const ImageDecor = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px dashed ${props => props.theme.accent.primary};
  opacity: 0.3;
`;

const Hero = () => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const socialIcons = {
    github: <FiGithub />,
    linkedin: <FiLinkedin />,
    twitter: <FiTwitter />,
    scholar: <SiGooglescholar />,
    orcid: <SiOrcid />,
    website: <FiExternalLink />,
  };

  return (
    <HeroSection id="about" theme={theme}>
      <Container>
        <Content
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Greeting theme={theme} variants={itemVariants}>
            Hello, I'm
          </Greeting>
          <Name theme={theme} variants={itemVariants}>
            {personalInfo.name}
          </Name>
          <Title theme={theme} variants={itemVariants}>
            {personalInfo.title}
          </Title>
          <Tagline theme={theme} variants={itemVariants}>
            {personalInfo.tagline}
          </Tagline>

          <SocialLinks variants={itemVariants}>
            {Object.entries(personalInfo.social).map(([key, url]) => (
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
                  {socialIcons[key]}
                </SocialLink>
              )
            ))}
          </SocialLinks>

          <CTAButtons variants={itemVariants}>
            <Button
              className="primary"
              theme={theme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FiMail /> Get in Touch
            </Button>
            <Button
              className="secondary"
              theme={theme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
          </CTAButtons>
        </Content>

        <ImageContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ImageWrapper theme={theme}>
            <Image src={personalInfo.image} alt={personalInfo.name} theme={theme} />
          </ImageWrapper>
          <ImageDecor
            theme={theme}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              transform: 'scale(1.15)',
            }}
          />
        </ImageContainer>
      </Container>
    </HeroSection>
  );
};

export default Hero;

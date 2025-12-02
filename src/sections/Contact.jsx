import { motion } from 'framer-motion';
import { FiMail, FiMapPin } from 'react-icons/fi';
import styled from 'styled-components';
import { useTheme } from '../utils/ThemeContext';
import { personalInfo } from '../data/portfolioData';

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: ${props => props.theme.bg.secondary};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  text-align: center;
  margin-bottom: 1rem;
  background: ${props => props.theme.accent.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: ${props => props.theme.text.secondary};
  font-size: ${props => props.theme.fontSize.lg};
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactInfo = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled(motion.div)`
  background: ${props => props.theme.bg.card};
  padding: 2rem;
  border-radius: ${props => props.theme.radius.xl};
  box-shadow: ${props => props.theme.shadow.medium};
  border: 1px solid ${props => props.theme.border.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: ${props => props.theme.accent.primary};
    box-shadow: ${props => props.theme.shadow.large};
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => props.theme.accent.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const InfoLabel = styled.div`
  font-size: ${props => props.theme.fontSize.sm};
  color: ${props => props.theme.text.tertiary};
  margin-bottom: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const InfoValue = styled.div`
  font-size: ${props => props.theme.fontSize.lg};
  color: ${props => props.theme.text.primary};
  font-weight: 500;

  a {
    color: ${props => props.theme.accent.primary};
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.accent.secondary};
    }
  }
`;

const Contact = () => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <ContactSection id="contact" theme={theme}>
      <Container>
        <SectionTitle
          theme={theme}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </SectionTitle>
        <SectionSubtitle
          theme={theme}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have a question or want to work together? Feel free to reach out!
        </SectionSubtitle>

        <ContactInfo
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <InfoCard theme={theme} variants={itemVariants}>
            <IconWrapper theme={theme}>
              <FiMail />
            </IconWrapper>
            <InfoLabel theme={theme}>Email</InfoLabel>
            <InfoValue theme={theme}>
              <a href={`mailto:${personalInfo.email}`}>
                {personalInfo.email}
              </a>
            </InfoValue>
          </InfoCard>

          <InfoCard theme={theme} variants={itemVariants}>
            <IconWrapper theme={theme}>
              <FiMapPin />
            </IconWrapper>
            <InfoLabel theme={theme}>Location</InfoLabel>
            <InfoValue theme={theme}>
              {personalInfo.location}
            </InfoValue>
          </InfoCard>
        </ContactInfo>
      </Container>
    </ContactSection>
  );
};

export default Contact;

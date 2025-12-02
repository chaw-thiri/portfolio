import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiCalendar } from 'react-icons/fi';
import styled from 'styled-components';
import { useTheme } from '../utils/ThemeContext';
import { certifications } from '../data/portfolioData';

const CertificationsSection = styled.section`
  padding: 6rem 2rem;
  background: ${props => props.theme.bg.primary};
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

const CertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const CertCard = styled(motion.div)`
  background: ${props => props.theme.bg.card};
  border-radius: ${props => props.theme.radius.xl};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadow.medium};
  border: 1px solid ${props => props.theme.border.primary};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${props => props.theme.shadow.large};
    border-color: ${props => props.theme.accent.primary};
  }
`;

const CertImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${props => props.theme.bg.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props => props.theme.accent.primary};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${CertCard}:hover &::before {
    opacity: 0.1;
  }
`;

const CertBadge = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${props => props.theme.accent.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
`;

const CertContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CertTitle = styled.h3`
  font-size: ${props => props.theme.fontSize.lg};
  color: ${props => props.theme.text.primary};
  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.3;
`;

const Issuer = styled.p`
  color: ${props => props.theme.text.secondary};
  font-size: ${props => props.theme.fontSize.sm};
  margin-bottom: 0.75rem;
  font-weight: 500;
`;

const DateInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.text.tertiary};
  font-size: ${props => props.theme.fontSize.sm};
  margin-bottom: 0.75rem;

  svg {
    color: ${props => props.theme.accent.primary};
  }
`;

const CredentialId = styled.div`
  font-size: ${props => props.theme.fontSize.xs};
  color: ${props => props.theme.text.tertiary};
  margin-bottom: 1rem;
  font-family: ${props => props.theme.fonts.mono};
  padding: 0.5rem;
  background: ${props => props.theme.bg.secondary};
  border-radius: ${props => props.theme.radius.sm};
  border: 1px solid ${props => props.theme.border.secondary};
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex: 1;
`;

const SkillTag = styled.span`
  padding: 0.25rem 0.75rem;
  background: ${props => props.theme.accent.primary}22;
  color: ${props => props.theme.accent.primaryDark};
  border-radius: ${props => props.theme.radius.full};
  font-size: ${props => props.theme.fontSize.xs};
  font-weight: 500;
`;

const ViewButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${props => props.theme.accent.primary};
  color: white;
  border-radius: ${props => props.theme.radius.md};
  font-weight: 600;
  font-size: ${props => props.theme.fontSize.sm};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadow.gold};
  }
`;

const Certifications = () => {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <CertificationsSection id="certifications" theme={theme}>
      <Container>
        <SectionTitle
          theme={theme}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </SectionTitle>
        <SectionSubtitle
          theme={theme}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Professional certifications and credentials
        </SectionSubtitle>

        <CertGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {certifications.map((cert) => (
            <CertCard
              key={cert.id}
              theme={theme}
              variants={itemVariants}
            >
              <CertContent>
                <CertTitle theme={theme}>{cert.title}</CertTitle>
                <Issuer theme={theme}>{cert.issuer}</Issuer>
                <DateInfo theme={theme}>
                  <FiCalendar />
                  Issued {cert.date}
                </DateInfo>
                {cert.credentialId && (
                  <CredentialId theme={theme}>
                    ID: {cert.credentialId}
                  </CredentialId>
                )}
                {cert.skills && cert.skills.length > 0 && (
                  <Skills>
                    {cert.skills.map((skill, index) => (
                      <SkillTag key={index} theme={theme}>
                        {skill}
                      </SkillTag>
                    ))}
                  </Skills>
                )}
                {cert.link && (
                  <ViewButton
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    theme={theme}
                  >
                    <FiExternalLink /> View Credential
                  </ViewButton>
                )}
              </CertContent>
            </CertCard>
          ))}
        </CertGrid>
      </Container>
    </CertificationsSection>
  );
};

export default Certifications;

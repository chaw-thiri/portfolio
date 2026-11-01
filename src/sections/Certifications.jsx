import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import styled from 'styled-components';
import { useTheme } from '../utils/ThemeContext';
import { certifications } from '../data/portfolioData';

const TrainingSection = styled.section`
  padding: 4rem 2rem;
  background: ${props => props.theme.bg.primary};
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: ${props => props.theme.text.primary};
  text-align: center;
  margin-bottom: 0.75rem;
`;

const SectionSubtitle = styled.p`
  color: ${props => props.theme.text.secondary};
  text-align: center;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const TrainingEntry = styled(motion.article)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-top: 1px solid ${props => props.theme.border.primary};
  border-bottom: 1px solid ${props => props.theme.border.primary};

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TrainingTitle = styled.h3`
  font-size: ${props => props.theme.fontSize.lg};
  color: ${props => props.theme.text.primary};
  margin-bottom: 0.5rem;
`;

const TrainingMeta = styled.p`
  color: ${props => props.theme.text.secondary};
  font-size: ${props => props.theme.fontSize.sm};
`;

const CredentialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 0;
  color: ${props => props.theme.text.accent};
  font-weight: 600;
  font-size: ${props => props.theme.fontSize.sm};
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 0.2em;
  }
`;

const Certifications = () => {
  const { theme } = useTheme();

  return (
    <TrainingSection id="certifications" theme={theme}>
      <Container>
        <SectionTitle theme={theme}>Relevant Training</SectionTitle>
        <SectionSubtitle theme={theme}>
          Machine learning coursework supporting my applied work
        </SectionSubtitle>
        {certifications.map(cert => (
          <TrainingEntry key={cert.id} theme={theme}>
            <div>
              <TrainingTitle theme={theme}>{cert.title}</TrainingTitle>
              <TrainingMeta theme={theme}>
                {cert.issuer} · {cert.date}
              </TrainingMeta>
            </div>
            <CredentialLink
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              theme={theme}
              aria-label={`View credential: ${cert.title}`}
            >
              View credential <FiExternalLink aria-hidden="true" />
            </CredentialLink>
          </TrainingEntry>
        ))}
      </Container>
    </TrainingSection>
  );
};

export default Certifications;

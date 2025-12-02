import { motion } from 'framer-motion';
import { FiFileText, FiExternalLink, FiAward } from 'react-icons/fi';
import styled from 'styled-components';
import { useTheme } from '../utils/ThemeContext';
import { publications } from '../data/portfolioData';

const ResearchSection = styled.section`
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

const PublicationsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const PublicationCard = styled(motion.div)`
  background: ${props => props.theme.bg.card};
  border-radius: ${props => props.theme.radius.xl};
  padding: 2rem;
  box-shadow: ${props => props.theme.shadow.medium};
  border: 1px solid ${props => props.theme.border.primary};
  border-left: 4px solid ${props => props.theme.accent.primary};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadow.large};
    border-left-width: 6px;
  }
`;

const PublicationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PublicationInfo = styled.div`
  flex: 1;
`;

const PublicationTitle = styled.h3`
  font-size: ${props => props.theme.fontSize.xl};
  color: ${props => props.theme.text.primary};
  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.4;
`;

const Authors = styled.p`
  color: ${props => props.theme.text.secondary};
  font-size: ${props => props.theme.fontSize.sm};
  margin-bottom: 0.5rem;
  line-height: 1.5;
`;

const Venue = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 0.75rem;
`;

const VenueText = styled.span`
  color: ${props => props.theme.accent.primary};
  font-weight: 600;
  font-size: ${props => props.theme.fontSize.sm};
`;

const TypeBadge = styled.span`
  padding: 0.25rem 0.75rem;
  background: ${props => props.theme.bg.secondary};
  color: ${props => props.theme.text.primary};
  border-radius: ${props => props.theme.radius.full};
  font-size: ${props => props.theme.fontSize.xs};
  font-weight: 600;
  border: 1px solid ${props => props.theme.border.secondary};
`;

const CitationCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.text.tertiary};
  font-size: ${props => props.theme.fontSize.sm};

  svg {
    color: ${props => props.theme.accent.secondary};
  }
`;

const Abstract = styled.p`
  color: ${props => props.theme.text.secondary};
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: ${props => props.theme.fontSize.sm};
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  padding: 0.25rem 0.75rem;
  background: ${props => props.theme.accent.primary}22;
  color: ${props => props.theme.accent.primaryDark};
  border-radius: ${props => props.theme.radius.full};
  font-size: ${props => props.theme.fontSize.xs};
  font-weight: 500;
`;

const PublicationActions = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const ActionButton = styled.a`
  padding: 0.5rem 1rem;
  background: ${props => props.$primary
    ? props.theme.accent.primary
    : 'transparent'
  };
  color: ${props => props.$primary
    ? 'white'
    : props.theme.text.primary
  };
  border: 2px solid ${props => props.$primary
    ? 'transparent'
    : props.theme.accent.primary
  };
  border-radius: ${props => props.theme.radius.md};
  font-weight: 600;
  font-size: ${props => props.theme.fontSize.sm};
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    background: ${props => props.$primary
      ? props.theme.accent.primaryDark
      : props.theme.accent.primary
    };
    color: white;
    border-color: ${props => props.theme.accent.primary};
  }
`;

const Research = () => {
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
      transition: { duration: 0.6 },
    },
  };

  // Sort publications by year (most recent first)
  const sortedPublications = [...publications].sort((a, b) => b.year - a.year);

  return (
    <ResearchSection id="research" theme={theme}>
      <Container>
        <SectionTitle
          theme={theme}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Research & Publications
        </SectionTitle>
        <SectionSubtitle
          theme={theme}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Peer-reviewed research contributions and academic publications
        </SectionSubtitle>

        <PublicationsList
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {sortedPublications.map((pub) => (
            <PublicationCard
              key={pub.id}
              theme={theme}
              variants={itemVariants}
            >
              <PublicationHeader>
                <PublicationInfo>
                  <PublicationTitle theme={theme}>
                    {pub.title}
                  </PublicationTitle>
                  <Authors theme={theme}>{pub.authors}</Authors>
                  <Venue>
                    <VenueText theme={theme}>{pub.venue}</VenueText>
                    <TypeBadge theme={theme}>{pub.type}</TypeBadge>
                  </Venue>
                </PublicationInfo>
                <CitationCount theme={theme}>
                  <FiAward />
                  {pub.citations} citations
                </CitationCount>
              </PublicationHeader>

              <Abstract theme={theme}>{pub.abstract}</Abstract>

              {pub.tags && pub.tags.length > 0 && (
                <Tags>
                  {pub.tags.map((tag, index) => (
                    <Tag key={index} theme={theme}>
                      {tag}
                    </Tag>
                  ))}
                </Tags>
              )}

              <PublicationActions>
                {pub.link && (
                  <ActionButton
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    theme={theme}
                    $primary
                  >
                    <FiExternalLink /> View Paper
                  </ActionButton>
                )}
                {pub.pdf && (
                  <ActionButton
                    href={pub.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    theme={theme}
                  >
                    <FiFileText /> PDF
                  </ActionButton>
                )}
              </PublicationActions>
            </PublicationCard>
          ))}
        </PublicationsList>
      </Container>
    </ResearchSection>
  );
};

export default Research;

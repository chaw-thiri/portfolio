import { motion } from 'framer-motion';
import { FiAward, FiCalendar } from 'react-icons/fi';
import styled from 'styled-components';
import { useTheme } from '../utils/ThemeContext';
import { awards } from '../data/portfolioData';

const AwardsSection = styled.section`
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
  color: ${props => props.theme.accent.primary};
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

const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const AwardCard = styled(motion.div)`
  background: ${props => props.theme.bg.card};
  padding: 2rem;
  border-radius: ${props => props.theme.radius.xl};
  box-shadow: ${props => props.theme.shadow.medium};
  border: 1px solid ${props => props.theme.border.primary};
  border-left: 4px solid ${props => props.theme.accent.primary};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadow.large};
    border-left-width: 6px;
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: ${props => props.theme.accent.primary};
    opacity: 0.03;
    border-radius: 50%;
    transition: all 0.5s ease;
  }

  &:hover::before {
    top: -25%;
    right: -25%;
  }
`;

const AwardIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.theme.accent.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: ${props => props.theme.shadow.accent};
`;

const AwardTitle = styled.h3`
  font-size: ${props => props.theme.fontSize.lg};
  color: ${props => props.theme.text.primary};
  margin-bottom: 0.75rem;
  font-weight: 600;
  line-height: 1.4;
`;

const AwardIssuer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.accent.secondary};
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const AwardDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.text.tertiary};
  font-size: ${props => props.theme.fontSize.sm};
  margin-bottom: 1rem;

  svg {
    color: ${props => props.theme.accent.primary};
  }
`;

const AwardDescription = styled.p`
  color: ${props => props.theme.text.secondary};
  line-height: 1.6;
  font-size: ${props => props.theme.fontSize.sm};
`;

const Awards = () => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <AwardsSection id="awards" theme={theme}>
      <Container>
        <SectionTitle
          theme={theme}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Awards & Achievements
        </SectionTitle>
        <SectionSubtitle
          theme={theme}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Recognition for academic excellence and achievements
        </SectionSubtitle>

        <AwardsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {awards.map((award) => (
            <AwardCard
              key={award.id}
              theme={theme}
              variants={itemVariants}
            >
              <AwardIcon theme={theme}>
                <FiAward />
              </AwardIcon>
              <AwardTitle theme={theme}>{award.title}</AwardTitle>
              <AwardIssuer theme={theme}>
                {award.issuer}
              </AwardIssuer>
              <AwardDate theme={theme}>
                <FiCalendar />
                {award.date}
              </AwardDate>
              <AwardDescription theme={theme}>
                {award.description}
              </AwardDescription>
            </AwardCard>
          ))}
        </AwardsGrid>
      </Container>
    </AwardsSection>
  );
};

export default Awards;

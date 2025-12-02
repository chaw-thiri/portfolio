import { motion } from 'framer-motion';
import { FiBriefcase, FiBook, FiMapPin, FiCalendar } from 'react-icons/fi';
import styled from 'styled-components';
import { useTheme } from '../utils/ThemeContext';
import { experience } from '../data/portfolioData';

const ExperienceSection = styled.section`
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

const Timeline = styled.div`
  position: relative;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${props => props.theme.accent.primary};
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;

  &:nth-child(even) {
    .content {
      grid-column: 3;
    }
    .dot {
      grid-column: 2;
    }
    .empty {
      grid-column: 1;
    }
  }

  &:nth-child(odd) {
    .content {
      grid-column: 1;
      text-align: right;
    }
    .dot {
      grid-column: 2;
    }
    .empty {
      grid-column: 3;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: auto 1fr;
    gap: 1.5rem;

    &:nth-child(even),
    &:nth-child(odd) {
      .content {
        grid-column: 2;
        text-align: left;
      }
      .dot {
        grid-column: 1;
      }
      .empty {
        display: none;
      }
    }
  }
`;

const TimelineDot = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => props.$type === 'work'
    ? props.theme.accent.primary
    : props.theme.accent.secondary
  };
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  z-index: 1;
  box-shadow: ${props => props.theme.shadow.medium};
  position: relative;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
  }
`;

const Content = styled.div`
  background: ${props => props.theme.bg.card};
  padding: 2rem;
  border-radius: ${props => props.theme.radius.xl};
  box-shadow: ${props => props.theme.shadow.medium};
  border: 1px solid ${props => props.theme.border.primary};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadow.large};
    border-color: ${props => props.theme.accent.primary};
  }

  @media (max-width: 768px) {
    text-align: left !important;
  }
`;

const TimeRange = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.accent.primary};
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: 600;
  margin-bottom: 0.75rem;

  svg {
    font-size: 1rem;
  }
`;

const Title = styled.h3`
  font-size: ${props => props.theme.fontSize.xl};
  color: ${props => props.theme.text.primary};
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Organization = styled.div`
  font-size: ${props => props.theme.fontSize.base};
  color: ${props => props.theme.text.secondary};
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Location = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.text.tertiary};
  font-size: ${props => props.theme.fontSize.sm};
  margin-bottom: 1rem;

  svg {
    font-size: 0.875rem;
  }
`;

const Description = styled.p`
  color: ${props => props.theme.text.secondary};
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: ${props => props.theme.fontSize.sm};
`;

const Highlights = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Highlight = styled.li`
  color: ${props => props.theme.text.secondary};
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  position: relative;
  line-height: 1.6;
  font-size: ${props => props.theme.fontSize.sm};

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${props => props.theme.accent.primary};
    font-weight: bold;
  }

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const Experience = () => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <ExperienceSection id="experience" theme={theme}>
      <Container>
        <SectionTitle
          theme={theme}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience & Education
        </SectionTitle>
        <SectionSubtitle
          theme={theme}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Professional journey and academic background
        </SectionSubtitle>

        <Timeline
          theme={theme}
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experience.map((item) => (
            <TimelineItem key={item.id} variants={itemVariants}>
              <div className="empty"></div>
              <TimelineDot className="dot" theme={theme} $type={item.type}>
                {item.type === 'work' ? <FiBriefcase /> : <FiBook />}
              </TimelineDot>
              <Content className="content" theme={theme}>
                <TimeRange theme={theme}>
                  <FiCalendar />
                  {item.startDate} - {item.endDate}
                </TimeRange>
                <Title theme={theme}>{item.title}</Title>
                <Organization theme={theme}>{item.organization}</Organization>
                <Location theme={theme}>
                  <FiMapPin />
                  {item.location}
                </Location>
                <Description theme={theme}>{item.description}</Description>
                {item.highlights && item.highlights.length > 0 && (
                  <Highlights>
                    {item.highlights.map((highlight, index) => (
                      <Highlight key={index} theme={theme}>
                        {highlight}
                      </Highlight>
                    ))}
                  </Highlights>
                )}
              </Content>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;

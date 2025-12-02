import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTheme } from '../utils/ThemeContext';
import { skills } from '../data/portfolioData';

const SkillsSection = styled.section`
  padding: 6rem 2rem;
  background: ${props => props.theme.bg.secondary};
  position: relative;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background: ${props => props.theme.bg.card};
  padding: 2rem;
  border-radius: ${props => props.theme.radius.xl};
  box-shadow: ${props => props.theme.shadow.medium};
  border: 1px solid ${props => props.theme.border.primary};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadow.gold};
    border-color: ${props => props.theme.accent.primary};
  }
`;

const CategoryTitle = styled.h3`
  font-size: ${props => props.theme.fontSize.xl};
  color: ${props => props.theme.text.primary};
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid ${props => props.theme.accent.primary};
  font-weight: 600;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SkillTag = styled(motion.span)`
  padding: 0.5rem 1rem;
  background: ${props => props.theme.bg.secondary};
  color: ${props => props.theme.text.primary};
  border-radius: ${props => props.theme.radius.full};
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: 500;
  border: 1px solid ${props => props.theme.border.secondary};
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.accent.primary};
    color: white;
    transform: translateY(-2px);
    border-color: ${props => props.theme.accent.primary};
  }
`;

const Skills = () => {
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
    <SkillsSection id="skills" theme={theme}>
      <Container>
        <SectionTitle
          theme={theme}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </SectionTitle>
        <SectionSubtitle
          theme={theme}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Technologies and tools I work with
        </SectionSubtitle>

        <SkillsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.categories.map((category, index) => (
            <SkillCategory
              key={index}
              theme={theme}
              variants={itemVariants}
            >
              <CategoryTitle theme={theme}>
                {category.title}
              </CategoryTitle>
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillTag
                    key={skillIndex}
                    theme={theme}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </SkillTag>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;

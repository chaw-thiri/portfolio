import { motion, useReducedMotion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import styled from 'styled-components';
import { useTheme } from '../utils/ThemeContext';
import { personalInfo, projects } from '../data/portfolioData';

const ProjectsSection = styled.section`
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
  color: ${props => props.theme.text.primary};
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: ${props => props.theme.text.secondary};
  font-size: ${props => props.theme.fontSize.lg};
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr));
  gap: 2.5rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.article)`
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
    border-color: ${props => props.theme.text.accent};
  }
`;

const ProjectContent = styled.div`
  padding: clamp(1.25rem, 4vw, 2rem);
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectCategory = styled.p`
  color: ${props => props.theme.text.tertiary};
  font-size: ${props => props.theme.fontSize.xs};
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
`;

const ProjectHighlight = styled.p`
  align-self: flex-start;
  padding: 0.375rem 0.75rem;
  margin-bottom: 1rem;
  border-radius: ${props => props.theme.radius.md};
  background: ${props => props.theme.bg.secondary};
  color: ${props => props.theme.text.secondary};
  font-size: ${props => props.theme.fontSize.xs};
  font-weight: 600;
`;

const ProjectTitle = styled.h3`
  font-size: ${props => props.theme.fontSize['2xl']};
  color: ${props => props.theme.text.primary};
  margin-bottom: 0.75rem;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.text.secondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  padding: 0.25rem 0.75rem;
  background: ${props => props.theme.bg.secondary};
  color: ${props => props.theme.text.secondary};
  border-radius: ${props => props.theme.radius.full};
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: 500;
  border: 1px solid ${props => props.theme.border.primary};
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: auto;
`;

const MoreProjects = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const LinkButton = styled.a`
  padding: 0.625rem 1.25rem;
  background: ${props => props.$primary
    ? props.theme.accent.primary
    : 'transparent'
  };
  color: ${props => props.$primary
    ? props.theme.text.onAccent
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
    color: ${props => props.theme.text.onAccent};
    border-color: ${props => props.theme.text.accent};
  }

  &:focus-visible {
    outline: 2px solid ${props => props.theme.text.accent};
    outline-offset: 4px;
  }
`;

const Projects = () => {
  const { theme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.4 },
    },
  };

  return (
    <ProjectsSection id="projects" theme={theme}>
      <Container>
        <SectionTitle
          theme={theme}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Selected Projects
        </SectionTitle>
        <SectionSubtitle
          theme={theme}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Selected work in trustworthy AI, computer vision, and applied machine learning.
        </SectionSubtitle>

        <ProjectsGrid id="project-results">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              theme={theme}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              aria-labelledby={`project-title-${project.id}`}
            >
              <ProjectContent>
                <ProjectCategory theme={theme}>{project.category}</ProjectCategory>
                <ProjectTitle id={`project-title-${project.id}`} theme={theme}>
                  {project.title}
                </ProjectTitle>
                {project.highlight && (
                  <ProjectHighlight theme={theme}>{project.highlight}</ProjectHighlight>
                )}
                <ProjectDescription theme={theme}>
                  {project.description}
                </ProjectDescription>
                <Technologies>
                  {project.technologies.map(tech => (
                    <TechTag key={tech} theme={theme}>
                      {tech}
                    </TechTag>
                  ))}
                </Technologies>
                <ProjectLinks>
                  {project.github && (
                    <LinkButton
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      theme={theme}
                    >
                      <FiGithub aria-hidden="true" /> Code
                    </LinkButton>
                  )}
                  {project.demo && (
                    <LinkButton
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.demoLabel || 'Watch demo'}: ${project.title}`}
                      theme={theme}
                      $primary
                    >
                      <FiExternalLink aria-hidden="true" /> {project.demoLabel || 'Watch demo'}
                    </LinkButton>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
        <MoreProjects>
          <LinkButton
            href={`${personalInfo.social.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            theme={theme}
          >
            <FiGithub aria-hidden="true" /> View all repositories
          </LinkButton>
        </MoreProjects>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;

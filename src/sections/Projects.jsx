import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import styled from 'styled-components';
import { useTheme } from '../utils/ThemeContext';
import { projects } from '../data/portfolioData';

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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
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

const ProjectImage = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  position: relative;
  background: ${props => props.theme.bg.secondary};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
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
  color: ${props => props.theme.accent.primary};
  border-radius: ${props => props.theme.radius.full};
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: 500;
  border: 1px solid ${props => props.theme.accent.primary}33;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const LinkButton = styled.a`
  padding: 0.625rem 1.25rem;
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

const FeaturedBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  background: ${props => props.theme.accent.primary};
  color: white;
  border-radius: ${props => props.theme.radius.full};
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: 600;
  z-index: 1;
`;

const Projects = () => {
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
    <ProjectsSection id="projects" theme={theme}>
      <Container>
        <SectionTitle
          theme={theme}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </SectionTitle>
        <SectionSubtitle
          theme={theme}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Some of my recent work and personal projects
        </SectionSubtitle>

        <ProjectsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              theme={theme}
              variants={itemVariants}
            >
              <ProjectImage theme={theme}>
                {project.featured && (
                  <FeaturedBadge theme={theme}>Featured</FeaturedBadge>
                )}
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle theme={theme}>{project.title}</ProjectTitle>
                <ProjectDescription theme={theme}>
                  {project.description}
                </ProjectDescription>
                <Technologies>
                  {project.technologies.map((tech, index) => (
                    <TechTag key={index} theme={theme}>
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
                      theme={theme}
                    >
                      <FiGithub /> Code
                    </LinkButton>
                  )}
                  {project.demo && (
                    <LinkButton
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      theme={theme}
                      $primary
                    >
                      <FiExternalLink /> Demo
                    </LinkButton>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;

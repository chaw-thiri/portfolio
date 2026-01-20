import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiClock } from 'react-icons/fi';
import styled from 'styled-components';
import { useTheme } from '../utils/ThemeContext';

const BlogSection = styled.section`
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

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BlogCard = styled(motion.div)`
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

const BlogThumbnail = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: center;
  background-color: ${props => props.theme.bg.secondary};
`;

const BlogContent = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const BlogTitle = styled.h3`
  font-size: ${props => props.theme.fontSize['2xl']};
  color: ${props => props.theme.text.primary};
  margin-bottom: 0.75rem;
  font-weight: 600;
  line-height: 1.3;
`;

const BlogDescription = styled.p`
  color: ${props => props.theme.text.secondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.text.secondary};
  font-size: ${props => props.theme.fontSize.sm};
  margin-bottom: 1.5rem;
`;

const ReadMoreButton = styled.a`
  padding: 0.625rem 1.25rem;
  background: ${props => props.theme.accent.primary};
  color: white;
  border-radius: ${props => props.theme.radius.md};
  font-weight: 600;
  font-size: ${props => props.theme.fontSize.sm};
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    transform: translateY(-2px);
    background: ${props => props.theme.accent.primaryDark};
  }
`;

const ViewAllButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: ${props => props.theme.accent.primary};
  color: white;
  border-radius: ${props => props.theme.radius.md};
  font-weight: 600;
  font-size: ${props => props.theme.fontSize.base};
  margin: 3rem auto 0;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    background: ${props => props.theme.accent.primaryDark};
    box-shadow: ${props => props.theme.shadow.large};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const LoadingMessage = styled.div`
  text-align: center;
  color: ${props => props.theme.text.secondary};
  padding: 3rem;
  font-size: ${props => props.theme.fontSize.lg};
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: ${props => props.theme.text.secondary};
  padding: 3rem;
  font-size: ${props => props.theme.fontSize.lg};
`;

const Blog = () => {
  const { theme } = useTheme();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@chawthirisan'
        );
        const data = await response.json();

        if (data.status === 'ok') {
          // Sort posts by claps/likes (if available) and get top 3
          const sortedPosts = [...data.items]
            .map(post => {
              // Extract image from content if thumbnail is not available
              if (!post.thumbnail) {
                const imgRegex = /<img[^>]+src="([^">]+)"/;
                const match = post.content?.match(imgRegex) || post.description?.match(imgRegex);
                if (match) {
                  post.thumbnail = match[1];
                }
              }
              return post;
            })
            .sort((a, b) => {
              // Sort by categories array length as a proxy for engagement
              // Medium RSS doesn't directly provide claps, so we use this heuristic
              const aEngagement = (a.categories?.length || 0);
              const bEngagement = (b.categories?.length || 0);
              return bEngagement - aEngagement;
            })
            .slice(0, 3); // Get only top 3

          setPosts(sortedPosts);
        } else {
          setError('Failed to load blog posts');
        }
      } catch (err) {
        setError('Failed to load blog posts');
        console.error('Error fetching Medium posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMediumPosts();
  }, []);

  const stripHtmlTags = (html) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

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
    <BlogSection id="blog" theme={theme}>
      <Container>
        <SectionTitle
          theme={theme}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Latest Blog Posts
        </SectionTitle>
        <SectionSubtitle
          theme={theme}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Top articles from my Medium blog
        </SectionSubtitle>

        {loading && <LoadingMessage theme={theme}>Loading blog posts...</LoadingMessage>}
        {error && <ErrorMessage theme={theme}>{error}</ErrorMessage>}

        {!loading && !error && posts.length > 0 && (
          <BlogGrid
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {posts.map((post, index) => (
              <BlogCard
                key={index}
                theme={theme}
                variants={itemVariants}
              >
                <BlogThumbnail
                  $image={post.thumbnail || 'https://via.placeholder.com/400x200?text=Blog+Post'}
                  theme={theme}
                />
                <BlogContent>
                  <BlogTitle theme={theme}>{post.title}</BlogTitle>
                  <BlogMeta theme={theme}>
                    <FiClock />
                    {formatDate(post.pubDate)}
                  </BlogMeta>
                  <BlogDescription theme={theme}>
                    {stripHtmlTags(post.description)}
                  </BlogDescription>
                  <ReadMoreButton
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    theme={theme}
                  >
                    Read More <FiExternalLink />
                  </ReadMoreButton>
                </BlogContent>
              </BlogCard>
            ))}
          </BlogGrid>
        )}

        {!loading && !error && posts.length > 0 && (
          <ButtonWrapper>
            <ViewAllButton
              href="https://medium.com/@chawthirisan"
              target="_blank"
              rel="noopener noreferrer"
              theme={theme}
            >
              View All Posts <FiExternalLink />
            </ViewAllButton>
          </ButtonWrapper>
        )}
      </Container>
    </BlogSection>
  );
};

export default Blog;

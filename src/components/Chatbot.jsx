import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi';
import styled from 'styled-components';
import { useTheme } from '../utils/ThemeContext';
import { personalInfo, skills, projects, publications, experience, certifications, chatbotKnowledge } from '../data/portfolioData';

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
  }
`;

const ChatButton = styled(motion.button)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => props.theme.accent.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: ${props => props.theme.shadow.large};
  cursor: pointer;
  border: none;

  &:hover {
    transform: scale(1.1);
  }
`;

const ChatWindow = styled(motion.div)`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 380px;
  height: 500px;
  background: ${props => props.theme.bg.card};
  border-radius: ${props => props.theme.radius.xl};
  box-shadow: ${props => props.theme.shadow.large};
  border: 1px solid ${props => props.theme.border.primary};
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 480px) {
    width: calc(100vw - 2rem);
    height: 450px;
  }
`;

const ChatHeader = styled.div`
  padding: 1rem 1.5rem;
  background: ${props => props.theme.accent.primary};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChatTitle = styled.div`
  font-weight: 600;
  font-size: ${props => props.theme.fontSize.base};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${props => props.theme.bg.secondary};
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.accent.primary};
    border-radius: 3px;
  }
`;

const Message = styled(motion.div)`
  display: flex;
  gap: 0.75rem;
  align-self: ${props => props.$isBot ? 'flex-start' : 'flex-end'};
  max-width: 80%;
`;

const MessageBubble = styled.div`
  padding: 0.75rem 1rem;
  border-radius: ${props => props.theme.radius.lg};
  background: ${props => props.$isBot
    ? props.theme.bg.secondary
    : props.theme.accent.primary
  };
  color: ${props => props.$isBot
    ? props.theme.text.primary
    : 'white'
  };
  font-size: ${props => props.theme.fontSize.sm};
  line-height: 1.5;
  word-wrap: break-word;
`;

const ChatInput = styled.form`
  padding: 1rem;
  border-top: 1px solid ${props => props.theme.border.primary};
  display: flex;
  gap: 0.75rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  background: ${props => props.theme.bg.secondary};
  border: 2px solid ${props => props.theme.border.primary};
  border-radius: ${props => props.theme.radius.md};
  color: ${props => props.theme.text.primary};
  font-size: ${props => props.theme.fontSize.sm};
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.accent.primary};
  }

  &::placeholder {
    color: ${props => props.theme.text.tertiary};
  }
`;

const SendButton = styled.button`
  padding: 0.75rem 1rem;
  background: ${props => props.theme.accent.primary};
  color: white;
  border: none;
  border-radius: ${props => props.theme.radius.md};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const QuickActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0 1rem 1rem;
`;

const QuickActionButton = styled.button`
  padding: 0.5rem 0.75rem;
  background: ${props => props.theme.bg.secondary};
  color: ${props => props.theme.text.primary};
  border: 1px solid ${props => props.theme.border.primary};
  border-radius: ${props => props.theme.radius.full};
  font-size: ${props => props.theme.fontSize.xs};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.accent.primary};
    color: white;
    border-color: ${props => props.theme.accent.primary};
  }
`;

const ErrorMessage = styled.div`
  padding: 0.75rem;
  background: #fee;
  color: #c00;
  border-radius: ${props => props.theme.radius.md};
  font-size: ${props => props.theme.fontSize.xs};
  margin: 0 1rem;
`;

const Chatbot = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: `Hi! I'm an AI assistant powered by Gemma 2. I can help you learn about ${personalInfo.name}'s skills, projects, research, and experience. What would you like to know?`,
      isBot: true,
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickActions = [
    "What are your skills?",
    "Tell me about projects",
    "Show research papers",
    "Contact information",
  ];

  // Build context from portfolio data
  const buildContext = () => {
    const skillsList = skills.categories.map(cat =>
      `${cat.title}: ${cat.skills.join(', ')}`
    ).join('\n');

    const projectsList = projects.map(p =>
      `- ${p.title}: ${p.description} (Technologies: ${p.technologies.join(', ')})`
    ).join('\n');

    const publicationsList = publications.map(p =>
      `- ${p.title} (${p.year}): ${p.abstract}`
    ).join('\n');

    const experienceList = experience.map(e =>
      `- ${e.title} at ${e.organization} (${e.startDate} - ${e.endDate}): ${e.description}`
    ).join('\n');

    const achievementsList = chatbotKnowledge.achievements.join('\n- ');

    // Build domain expertise details
    const domainExpertiseText = Object.entries(chatbotKnowledge.expertiseDomains)
      .map(([domain, details]) => {
        let text = `\n${domain.toUpperCase()}:`;
        if (details.skills) text += `\n  Skills: ${Array.isArray(details.skills) ? details.skills.join(', ') : details.skills}`;
        if (details.projects) text += `\n  Projects: ${Array.isArray(details.projects) ? details.projects.join('; ') : details.projects}`;
        if (details.certifications) text += `\n  Certifications: ${Array.isArray(details.certifications) ? details.certifications.join('; ') : details.certifications}`;
        if (details.publications) text += `\n  Publications: ${Array.isArray(details.publications) ? details.publications.join('; ') : details.publications}`;
        if (details.experience) text += `\n  Experience: ${details.experience}`;
        if (details.technologies) text += `\n  Technologies: ${details.technologies}`;
        if (details.evidence) text += `\n  Evidence: ${details.evidence}`;
        if (details.deployment) text += `\n  Deployment: ${details.deployment}`;
        if (details.applications) text += `\n  Applications: ${details.applications}`;
        if (details.research) text += `\n  Research: ${details.research}`;
        if (details.knowledge) text += `\n  Knowledge: ${details.knowledge}`;
        if (details.domains) text += `\n  Domains: ${details.domains.join(', ')}`;
        if (details.approach) text += `\n  Approach: ${details.approach}`;
        return text;
      }).join('\n');

    return `You are an AI assistant helping visitors learn about ${personalInfo.name}'s portfolio.

PERSONAL INFO:
Name: ${personalInfo.name}
Title: ${personalInfo.title}
Bio: ${personalInfo.bio}
Email: ${personalInfo.email}
Location: ${personalInfo.location}
GPA: 4.38/4.5 (Valedictorian and Honor Student)

SKILLS:
${skillsList}

TECHNICAL EXPERTISE:
- Programming: ${chatbotKnowledge.technicalExpertise.programmingLanguages}
- ML Frameworks: ${chatbotKnowledge.technicalExpertise.mlFrameworks}
- NLP Tools: ${chatbotKnowledge.technicalExpertise.nlpTools}
- Data Science: ${chatbotKnowledge.technicalExpertise.dataScience}
- ML Models: ${chatbotKnowledge.technicalExpertise.mlModels}
- Tools: ${chatbotKnowledge.technicalExpertise.tools}
- Web Technologies: ${chatbotKnowledge.technicalExpertise.webTech}

DOMAIN-SPECIFIC EXPERTISE (Use this to answer specific domain questions):
${domainExpertiseText}

PROJECTS:
${projectsList}

NOTABLE PROJECT DETAILS:
- Person Tracking: ${chatbotKnowledge.notableProjects.personTracking}
- Call Volume Detection: ${chatbotKnowledge.notableProjects.callVolume}
- Clickbait Detector: ${chatbotKnowledge.notableProjects.clickbaitDetector}
- Earthquake Prediction: ${chatbotKnowledge.notableProjects.earthquakePrediction}

RESEARCH & PUBLICATIONS:
${publicationsList}

EXPERIENCE & EDUCATION:
${experienceList}

RESEARCH INTERESTS:
${chatbotKnowledge.researchInterests.join('\n- ')}

RESEARCH FOCUS:
${chatbotKnowledge.researchFocus}

ACHIEVEMENTS:
- ${achievementsList}

COLLABORATION INTERESTS:
${chatbotKnowledge.collaborationInterests}

AVAILABILITY:
${chatbotKnowledge.availability}

When answering questions:
- Be helpful and concise (2-3 sentences max)
- Provide specific, detailed information from the portfolio
- For domain-specific questions (e.g., "frontend experience", "machine learning skills"), use the DOMAIN-SPECIFIC EXPERTISE section to provide comprehensive answers including relevant projects, skills, certifications, and experience
- Connect related information across projects, skills, certifications, and experience
- Highlight concrete examples and evidence
- If asked about availability: ${chatbotKnowledge.availability}
- If asked for contact: Direct them to email ${personalInfo.email}
- If asked about collaborations: Mention research interests and collaboration opportunities
- If you don't have specific information, say so and suggest asking ${personalInfo.name} directly`;
  };

  const generateResponse = async (userMessage) => {
    try {
      setError('');
      const context = buildContext();

      const response = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gemma2',
          prompt: `${context}\n\nUser question: ${userMessage}\n\nProvide a helpful, concise response (2-3 sentences max):`,
          stream: false,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to connect to Ollama');
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Ollama error:', error);
      setError('Unable to connect to AI. Make sure Ollama is running (ollama serve).');
      return getFallbackResponse(userMessage);
    }
  };

  const getFallbackResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('skill')) {
      const allSkills = skills.categories.flatMap(cat => cat.skills);
      return `I have expertise in: ${allSkills.slice(0, 8).join(', ')}, and more. Check the Skills section for the complete list!`;
    }

    if (lowerMessage.includes('project')) {
      return `I've worked on ${projects.length} featured projects including "${projects[0]?.title}". Visit the Projects section to see details!`;
    }

    if (lowerMessage.includes('research') || lowerMessage.includes('publication')) {
      return `I have ${publications.length} research publications in areas like quantum cryptography and agricultural AI. Check the Research section!`;
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('email')) {
      return `You can reach out at ${personalInfo.email} or use the contact form below!`;
    }

    return `I can help you learn about skills, projects, research, and experience. What would you like to know more about?`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = {
      id: messages.length + 1,
      text: input,
      isBot: false,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await generateResponse(input);

      const botResponse = {
        id: messages.length + 2,
        text: response,
        isBot: true,
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = async (action) => {
    setInput(action);
    const userMessage = {
      id: messages.length + 1,
      text: action,
      isBot: false,
    };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await generateResponse(action);

      const botResponse = {
        id: messages.length + 2,
        text: response,
        isBot: true,
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ChatbotContainer>
      <AnimatePresence>
        {isOpen && (
          <ChatWindow
            theme={theme}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            <ChatHeader theme={theme}>
              <ChatTitle theme={theme}>AI Portfolio Assistant</ChatTitle>
              <CloseButton onClick={() => setIsOpen(false)}>
                <FiX />
              </CloseButton>
            </ChatHeader>

            {error && <ErrorMessage theme={theme}>{error}</ErrorMessage>}

            <ChatMessages theme={theme}>
              {messages.map((message) => (
                <Message
                  key={message.id}
                  $isBot={message.isBot}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <MessageBubble theme={theme} $isBot={message.isBot}>
                    {message.text}
                  </MessageBubble>
                </Message>
              ))}
              {isLoading && (
                <Message $isBot={true}>
                  <MessageBubble theme={theme} $isBot={true}>
                    Thinking...
                  </MessageBubble>
                </Message>
              )}
              <div ref={messagesEndRef} />
            </ChatMessages>

            {messages.length <= 1 && (
              <QuickActions>
                {quickActions.map((action, index) => (
                  <QuickActionButton
                    key={index}
                    theme={theme}
                    onClick={() => handleQuickAction(action)}
                    disabled={isLoading}
                  >
                    {action}
                  </QuickActionButton>
                ))}
              </QuickActions>
            )}

            <ChatInput theme={theme} onSubmit={handleSubmit}>
              <Input
                theme={theme}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                disabled={isLoading}
              />
              <SendButton theme={theme} type="submit" disabled={!input.trim() || isLoading}>
                <FiSend />
              </SendButton>
            </ChatInput>
          </ChatWindow>
        )}
      </AnimatePresence>

      <ChatButton
        theme={theme}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <FiX /> : <FiMessageCircle />}
      </ChatButton>
    </ChatbotContainer>
  );
};

export default Chatbot;

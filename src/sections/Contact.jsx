import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';
import { useTheme } from '../utils/ThemeContext';
import { personalInfo } from '../data/portfolioData';

const ContactSection = styled.section`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled.div`
  background: ${props => props.theme.bg.card};
  padding: 1.5rem;
  border-radius: ${props => props.theme.radius.xl};
  box-shadow: ${props => props.theme.shadow.medium};
  border: 1px solid ${props => props.theme.border.primary};
  display: flex;
  align-items: start;
  gap: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(8px);
    border-color: ${props => props.theme.accent.primary};
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: ${props => props.theme.radius.md};
  background: ${props => props.theme.accent.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoLabel = styled.div`
  font-size: ${props => props.theme.fontSize.sm};
  color: ${props => props.theme.text.tertiary};
  margin-bottom: 0.25rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const InfoValue = styled.div`
  font-size: ${props => props.theme.fontSize.base};
  color: ${props => props.theme.text.primary};
  font-weight: 500;

  a {
    color: ${props => props.theme.accent.primary};
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.accent.secondary};
    }
  }
`;

const FormContainer = styled(motion.div)`
  background: ${props => props.theme.bg.card};
  padding: 2.5rem;
  border-radius: ${props => props.theme.radius.xl};
  box-shadow: ${props => props.theme.shadow.large};
  border: 1px solid ${props => props.theme.border.primary};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: ${props => props.theme.fontSize.sm};
  color: ${props => props.theme.text.secondary};
  font-weight: 600;
`;

const Input = styled.input`
  padding: 0.875rem 1.25rem;
  background: ${props => props.theme.bg.secondary};
  border: 2px solid ${props => props.theme.border.primary};
  border-radius: ${props => props.theme.radius.md};
  color: ${props => props.theme.text.primary};
  font-size: ${props => props.theme.fontSize.base};
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.accent.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.accent.primary}22;
  }

  &::placeholder {
    color: ${props => props.theme.text.tertiary};
  }
`;

const TextArea = styled.textarea`
  padding: 0.875rem 1.25rem;
  background: ${props => props.theme.bg.secondary};
  border: 2px solid ${props => props.theme.border.primary};
  border-radius: ${props => props.theme.radius.md};
  color: ${props => props.theme.text.primary};
  font-size: ${props => props.theme.fontSize.base};
  font-family: inherit;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.accent.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.accent.primary}22;
  }

  &::placeholder {
    color: ${props => props.theme.text.tertiary};
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: ${props => props.theme.accent.primary};
  color: white;
  border: none;
  border-radius: ${props => props.theme.radius.md};
  font-size: ${props => props.theme.fontSize.base};
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadow.large};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  padding: 1rem 1.5rem;
  background: #10b98144;
  border: 2px solid #10b981;
  border-radius: ${props => props.theme.radius.md};
  color: #10b981;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
`;

const Contact = () => {
  const { theme } = useTheme();
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID"); // Replace with your Formspree form ID

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <ContactSection id="contact" theme={theme}>
      <Container>
        <SectionTitle
          theme={theme}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </SectionTitle>
        <SectionSubtitle
          theme={theme}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have a question or want to work together? Feel free to reach out!
        </SectionSubtitle>

        <ContactGrid>
          <ContactInfo
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <InfoCard theme={theme}>
              <IconWrapper theme={theme}>
                <FiMail />
              </IconWrapper>
              <InfoContent>
                <InfoLabel theme={theme}>Email</InfoLabel>
                <InfoValue theme={theme}>
                  <a href={`mailto:${personalInfo.email}`}>
                    {personalInfo.email}
                  </a>
                </InfoValue>
              </InfoContent>
            </InfoCard>

            <InfoCard theme={theme}>
              <IconWrapper theme={theme}>
                <FiPhone />
              </IconWrapper>
              <InfoContent>
                <InfoLabel theme={theme}>Phone</InfoLabel>
                <InfoValue theme={theme}>
                  <a href={`tel:${personalInfo.phone}`}>
                    {personalInfo.phone}
                  </a>
                </InfoValue>
              </InfoContent>
            </InfoCard>

            <InfoCard theme={theme}>
              <IconWrapper theme={theme}>
                <FiMapPin />
              </IconWrapper>
              <InfoContent>
                <InfoLabel theme={theme}>Location</InfoLabel>
                <InfoValue theme={theme}>
                  {personalInfo.location}
                </InfoValue>
              </InfoContent>
            </InfoCard>
          </ContactInfo>

          <FormContainer
            theme={theme}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {state.succeeded ? (
              <SuccessMessage
                theme={theme}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <FiCheck /> Thank you for your message! I'll get back to you soon.
              </SuccessMessage>
            ) : (
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label theme={theme} htmlFor="name">
                    Name *
                  </Label>
                  <Input
                    theme={theme}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </FormGroup>

                <FormGroup>
                  <Label theme={theme} htmlFor="email">
                    Email *
                  </Label>
                  <Input
                    theme={theme}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </FormGroup>

                <FormGroup>
                  <Label theme={theme} htmlFor="subject">
                    Subject *
                  </Label>
                  <Input
                    theme={theme}
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    required
                  />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                </FormGroup>

                <FormGroup>
                  <Label theme={theme} htmlFor="message">
                    Message *
                  </Label>
                  <TextArea
                    theme={theme}
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    required
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </FormGroup>

                <SubmitButton
                  theme={theme}
                  type="submit"
                  disabled={state.submitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {state.submitting ? 'Sending...' : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </SubmitButton>
              </Form>
            )}
          </FormContainer>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact;

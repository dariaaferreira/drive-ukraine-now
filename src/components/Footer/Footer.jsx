import React, { useState, useEffect } from 'react';
import { BiPhone, BiMailSend, BiMapAlt, BiMap, BiSolidBellRing } from 'react-icons/bi';
import { 
    ContactContainer,
    FooterContainer, 
    FooterNav,
    ContactLink, 
    EmailContact, 
    Address, 
    GoogleMapsLink, 
    SubscribeButton,
    SubscribeForm,
    SubscribeInput,
    SubscribeContainer,
    SubscribeRow,
    SubscribeTitle,
    ErrorMessage, 
    SuccessMesage
} from './Footer.styled';

const Footer = () => {
  const [isSubscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email.');
      return;
    }

    setError('');

    setSubscribed(true);
    resetForm();
  };

  const resetForm = () => {
    setEmail('');
  };

  useEffect(() => {
    if (isSubscribed) {
      const timeoutId = setTimeout(() => {
        setSubscribed(false);
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isSubscribed]);

  return (
    <FooterContainer>
      <SubscribeRow>
        <FooterNav>
          Contact US:
          <ContactContainer>
            <BiPhone size={16} />
            <ContactLink href="tel:+380730000000">+380 73 000 00 00</ContactLink>
          </ContactContainer>
          <ContactContainer>
            <BiMailSend size={16} />
            <EmailContact href="mailto:info@driveukrainenow.com">info@driveukrainenow.com</EmailContact>
          </ContactContainer>
          <ContactContainer>
            <BiMapAlt size={16} />
            <Address>123 Main Street, Kiev, Ukraine</Address>
          </ContactContainer> 
          <ContactContainer>
            <BiMap size={16} />
            <GoogleMapsLink href="https://www.google.com/maps?q=123+Main+Street+Kiev+Ukraine" target="_blank">View on Google Maps</GoogleMapsLink>
          </ContactContainer>            
        </FooterNav>

        <SubscribeContainer>
          <SubscribeTitle>Subscribe to newsletter and promos:</SubscribeTitle>
          <SubscribeForm onSubmit={handleSubscribe}>
            <SubscribeInput
              type="email"
              name="email"
              placeholder="E-mail*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <SubscribeButton type="submit">
              Subscribe
              <BiSolidBellRing size={16} />
            </SubscribeButton>
          </SubscribeForm>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {isSubscribed && <SuccessMesage>Subscription successful! Thank you for being with us!</SuccessMesage>}
        </SubscribeContainer>
      </SubscribeRow>
    </FooterContainer>
  );
}

export default Footer;

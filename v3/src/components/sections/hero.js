import React from 'react';
import styled from 'styled-components';
import EmailButton from '@components/emailButton';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .intro {
    margin: 0 0 30px 4px;
    max-width: none;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  /* Staggered fade-up. Driven by CSS rather than mount state so the copy is
     present in the server-rendered HTML for crawlers that never run our JS. */
  .hero-item {
    opacity: 0;
    transform: translateY(20px);
    animation: heroFadeUp 300ms var(--easing) forwards;
    animation-delay: calc(1000ms + var(--item-index) * 100ms);
  }

  @keyframes heroFadeUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-item {
      opacity: 1;
      transform: none;
      animation: none;
    }
  }
`;

const Hero = () => (
  <StyledHeroSection>
    <div className="hero-item" style={{ '--item-index': 0 }}>
      <p className="intro">Hi, my name is</p>
    </div>

    <div className="hero-item" style={{ '--item-index': 1 }}>
      <h1 className="big-heading">Sriram Nuthi.</h1>
    </div>

    <div className="hero-item" style={{ '--item-index': 2 }}>
      <h3 className="big-heading">I build backend systems that hold up.</h3>
    </div>

    <div className="hero-item" style={{ '--item-index': 3 }}>
      <p>
        I&rsquo;m a software engineer at{' '}
        <a href="https://www.veeva.com/" target="_blank" rel="noreferrer">
          Veeva Systems
        </a>{' '}
        working on storage, messaging, and document integration at enterprise scale. I hold an MS in
        Computer Science from the{' '}
        <a href="https://www.usc.edu/" target="_blank" rel="noreferrer">
          University of Southern California
        </a>
        , where my research on wearable-sensor data contributed to three peer-reviewed publications.
      </p>
    </div>

    <div className="hero-item" style={{ '--item-index': 4 }}>
      <EmailButton label="Contact Me!" />
    </div>
  </StyledHeroSection>
);

export default Hero;

import React from 'react';
import styled, { keyframes } from 'styled-components';
import './homepage.styles.scss';
import Directory from '../components/directory';

// Gradient animation with light shadows
const psychedelicGradient = keyframes`
  0% {
    background-position: 0% 50%;
    text-shadow:
      0 0 5px #ffffff,
      0 0 10px #ccf2ff,
      0 0 15px #ffe6ff;
  }
  50% {
    background-position: 100% 50%;
    text-shadow:
      0 0 10px #e0ccff,
      0 0 20px #ccffff,
      0 0 30px #ffccff;
  }
  100% {
    background-position: 0% 50%;
    text-shadow:
      0 0 5px #ffffff,
      0 0 10px #ccf2ff,
      0 0 15px #ffe6ff;
  }
`;

// Glowing pulse
const glowPulse = keyframes`
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.3);
  }
`;

// Styled heading with hover color change
const PsychedelicHeading = styled.h1`
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: clamp(1.5rem, 5vw, 2.5rem); /* Responsive font size */
  text-align: center;
  padding: 2rem 1rem;
  background: linear-gradient(
    270deg,
    #ffffff,
    #ccf2ff,
    #ffe6ff,
    #e0ccff,
    #ffffff
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${psychedelicGradient} 12s ease infinite, ${glowPulse} 4s ease-in-out infinite;
  user-select: none;
  cursor: default;
  transition: all 0.3s ease;

  &:hover {
    -webkit-text-fill-color: #ff6600;
    background: none;
    background-clip: border-box;
    text-shadow: none;
  }
`;

const HomePage = () => {
  return (
    <div className="homepage">
      <PsychedelicHeading>
        Click mat karna… ek baar bhatak gaye toh wapas nahi aapaoge!
      </PsychedelicHeading>
      <Directory />
    </div>
  );
};

export default HomePage;

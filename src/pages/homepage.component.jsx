import React from 'react';
import { connect } from 'react-redux';
import styled, { keyframes, css } from 'styled-components';
import Directory from '../components/directory';
import './homepage.styles.scss';

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

const glowPulse = keyframes`
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.5);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95) rotate(-2deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
`;

const colorShift = keyframes`
  0% { color: #ff1493; }
  25% { color: #00c3ff; }
  50% { color: #ff6600; }
  75% { color: #a020f0; }
  100% { color: #ff1493; }
`;

const PsychedelicHeading = styled.h1`
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: clamp(1.5rem, 5vw, 2.5rem);
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

  &:hover {
    -webkit-text-fill-color: #ff6600;
    background: none;
    background-clip: border-box;
    text-shadow: none;
  }
`;

const GreetBox = styled.div`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: -0.75rem;
  margin-bottom: 2.5rem;
  user-select: none;
  animation: ${fadeIn} 1.5s ease forwards, ${glowPulse} 4s ease-in-out infinite, ${colorShift} 8s linear infinite;
  transform-origin: center;
  filter: drop-shadow(0 0 8px currentColor);

  span {
    font-style: italic;
    text-shadow:
      0 0 8px currentColor,
      0 0 16px currentColor;
  }
`;

const HomePage = ({ currentUser }) => {
  const message = currentUser?.displayName
    ? `Oho <span>${currentUser.displayName}</span>, phir se? Lagta hai yeh jagah tumhara permanent address ban gaya hai! 🏠😂`
    : null;

  return (
    <div className="homepage">
      <PsychedelicHeading>
        Click mat karna… ek baar bhatak gaye toh wapas nahi aapaoge!
      </PsychedelicHeading>

      {message && (
        <GreetBox dangerouslySetInnerHTML={{ __html: message }} />
      )}

      <Directory />
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(HomePage);

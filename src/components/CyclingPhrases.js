import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const CyclingPhrases = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = ['Educator', 'Artist', 'Forever Student'];

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let typingTimeout;

    if (isDeleting) {
      if (displayedText.length > 0) {
        typingTimeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    } else {
      if (displayedText.length < currentPhrase.length) {
        typingTimeout = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        typingTimeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Wait before deleting
      }
    }

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, phraseIndex]);

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        {displayedText}
        <span style={{ borderLeft: '2px solid', marginLeft: '4px', animation: 'blink 1s step-start infinite' }}>
          &nbsp;
        </span>
      </Typography>
      <style>
        {`
          @keyframes blink {
            50% {
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CyclingPhrases;

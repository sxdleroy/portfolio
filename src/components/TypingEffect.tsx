
import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
  className?: string;
  cursorClassName?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  speed = 80,
  className = "",
  cursorClassName = "text-terminal-accent"
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const randomSpeed = speed + Math.random() * 70 - 30; // Varying speed for realism
      
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      
      }, randomSpeed);
      
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayedText}
      {isTyping && <span className={`animate-pulse ${cursorClassName}`}>_</span>}
    </span>
  );
};

export default TypingEffect;

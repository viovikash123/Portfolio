import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Importing an icon (optional)

const ScrollToTopButton = () => {
  // State to track if the user has scrolled down
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll events
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true); // Show button if scrolled down by 300px
    } else {
      setIsVisible(false); // Hide button if scrolled up
    }
  };

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Adding the scroll event listener on mount and removing on unmount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // Button to scroll to the top
    isVisible && (
      <button
        onClick={scrollToTop}
        className="scroll-to-top-btn"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTopButton;

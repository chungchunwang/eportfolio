import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KeyboardShortcut = () => {
  const navigate = useNavigate();
  let typedKeys = '';
  let timeout;

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Add the pressed key to the buffer
      typedKeys += event.key.toLowerCase();

      // Clear the timeout if it exists
      if (timeout) {
        clearTimeout(timeout);
      }

      // Set a new timeout to clear the buffer after 1 second
      timeout = setTimeout(() => {
        typedKeys = '';
      }, 1000);

      // Check if "fruity" was typed
      if (typedKeys.includes('fruity')) {
        window.location.href = '/eportfolio/fruity.pdf';
        typedKeys = '';
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [navigate]);

  return null;
};

export default KeyboardShortcut; 
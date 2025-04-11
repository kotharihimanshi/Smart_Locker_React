import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top if no hash
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Scroll to element with id matching hash
    const el = document.querySelector(location.hash);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  }, [location.pathname, location.hash]); // 👈 important!

  return null;
};

export default ScrollToHash;

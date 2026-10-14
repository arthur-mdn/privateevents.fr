import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const scrollToHash = () => {
        const el = document.getElementById(id);
        if (!el) return false;
        el.scrollIntoView();
        return true;
      };

      if (scrollToHash()) return undefined;

      const timeoutId = window.setTimeout(() => {
        scrollToHash();
      }, 150);

      return () => window.clearTimeout(timeoutId);
    }

    window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash]);

  return null;
}

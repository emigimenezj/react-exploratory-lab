import { useEffect, useState } from 'react';

import AboutPage from './pages/About';
import HomePage from './pages/Home';

import { EVENTS } from './const';

function App() {

  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);

    }
  }, []);

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
      
    </main>
  );
}

export default App

import { useState, useEffect } from 'react';
import './index.css';

import LoadScreen from './components/loadScreen';
import Home from './components/Home';
import routes from './components/routes'
import { useRoutes } from 'react-router-dom';
import { NavBar, MenuBar, SideBar } from './components/BarComponent';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const Approutes = () => useRoutes(routes)

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsTransitioning(true);
      const transitionTimer = setTimeout(() => {
        setIsLoading(false);
      }, 750);

      return () => clearTimeout(transitionTimer);
    }, 3500);

    return () => clearTimeout(loadingTimer);
  }, []);



  return (
    <>
      {isLoading && <LoadScreen isTransitioning={isTransitioning} />}
       <div className={`transition-opacity duration-750 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <NavBar/>
          <MenuBar/>
          <SideBar/>
        <Approutes/>
       </div>
    </>
  );
}


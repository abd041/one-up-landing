// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThemeToggle from './ToggleButton';
import { ThemeProvider, useTheme } from './ThemeContext';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Articles from './pages/articles/Articles';
import ArticleCMS from './pages/articleCMS/ArticleCMS';
import Pricing from './pages/pricing/Pricing';
import Error from './pages/error/Error';
import NavToggle from './components/NavToggle/NavToggle';


const AppContent = () => {
  const { theme, toggleTheme } = useTheme();
  const [checked, setChecked] = React.useState(true);
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme && theme !== storedTheme) {
      toggleTheme(storedTheme);
    }
  }, []); // Empty dependency array to run only once on mount

  return (
    <Router>
      <div className={`app ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
        {/* <NavToggle
           isOn={checked}
           handleToggle={() => setChecked(!checked)}
           colorOne="#6984D6"
           colorTwo="#6984D6"/> */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path='/ArticleCMS' element={<ArticleCMS />} />
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/error' element={<Error/>}/>
        </Routes>
      </div>
    </Router>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;












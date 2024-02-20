import React from 'react'
import { useTheme } from '../../ThemeContext'
import "./Home.css"
import { Container } from "react-bootstrap"
import Hero from '../../components/HomePage/HeroSection';
import Step from '../../components/HomePage/Step';
import Benefit from '../../components/HomePage/Benefit';
import Strategy from '../../components/HomePage/Strategy';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Nav/Navigation';
import FAQs from '../../components/Faqs/FAQs';
import { JoinNow } from '../../components/JoinNow/JoinNow';
const Home = () => {

  const { theme } = useTheme();
  return (
    <div className={`app ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <Navigation />
      <Hero />
      <Step />
      <Benefit />
      <Strategy />
      <div className={`app ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <Container><FAQs /></Container>
      </div>
    
      <JoinNow />

      <Footer />
    </div>
  )
}

export default Home
import React, { useEffect } from 'react'
import { useTheme } from "../../ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import "./Error.css"
import error from "../../assets/dark/articles/error.png"
import Navigation from '../../components/Nav/Navigation';
import Footer from '../../components/Footer/Footer';
const Error = () => {
    const { theme } = useTheme();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className={   theme === "dark"
    ? "Homepage-Hero-warpper-dark"
    : "Homepage-Hero-warpper-dark-light"}>
      <Navigation/>
        <Container>
            <Row style={{minHeight:'617px'}}>
                <Col lg={6} className='mx-auto my-auto' >
                <div className='error-page-main-wrap'><img src={error} /></div>
               <div className='error-heading'>
                <h4>Network Error!!</h4>
               </div>
               <div className='error-desc mx-auto'>
               <p>Network Connection error occurred. Please check your internet or refresh page.</p>
             
               </div>
               <div className='error-btn mx-auto'>
                <button>Go to home</button>
               </div>
                </Col>
            </Row>
        </Container>
        <Footer/>

    </div>
  )
}

export default Error
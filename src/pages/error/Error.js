import React from 'react'
import { useTheme } from "../../ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import "./Error.css"
import error from "../../assets/dark/articles/error.png"
const Error = () => {
    const { theme } = useTheme();
  return (
    <div className={theme === "dark" ? "" : ''}>
        <Container>
            <Row>
                <Col lg={6} className='mx-auto'>
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

    </div>
  )
}

export default Error
import React from 'react'
import {Col , Row}  from "react-bootstrap"
import { useTheme } from '../../ThemeContext';
const AbouPara = ({title}) => {
  const { theme } = useTheme();
  return (
    <Row>
    <Col className='mx-auto d-flex justify-content-center' lg={8}>
      <div className={theme === "dark" ?'about-below-image-para mx-auto':'about-below-image-para-light mx-auto'}>
        <p>{title}</p>
      </div>       
    </Col>
  </Row>
  )
}

export default AbouPara
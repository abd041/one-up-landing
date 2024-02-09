import React from 'react'
import {Col , Row}  from "react-bootstrap"
const AbouPara = ({title}) => {
  return (
    <Row>
    <Col className='mx-auto d-flex justify-content-center' lg={8}>
      <div className='about-below-image-para mx-auto'>
        <p>{title}</p>
      </div>       
    </Col>
  </Row>
  )
}

export default AbouPara
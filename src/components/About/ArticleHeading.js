import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ArticleHeading = ({ title }) => {
  return (
    <Row>
      <Col className='mx-auto' lg={8}>
        <div className='article-heading-below-image-para mx-auto'>
          <h3 id={`section-${title}`}>{title}</h3>
        </div>
      </Col>
    </Row>
  );
};

export default ArticleHeading;

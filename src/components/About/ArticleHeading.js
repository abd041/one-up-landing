import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTheme } from '../../ThemeContext';

const ArticleHeading = ({ title }) => {
  const {theme} =useTheme()
  return (
    <Row>
      <Col className='mx-auto' lg={8}>
        <div className='article-heading-below-image-para mx-auto'>
          <h3 id={`section-${title}`} style={{ color: theme === "dark" ? "#fff" : "#0D0D0D" }}>{title}</h3>
        </div>
      </Col>
    </Row>
  );
};

export default ArticleHeading;

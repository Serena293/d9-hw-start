import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import "bootstrap-icons/font/bootstrap-icons.css";
import { addToFavouritesAction, deleteFromFavouritesAction } from './actions/favoritesAction';

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);

  const handleIconClick = () => {
    setIsClicked(!isClicked);
    if (!isClicked) {
      // Add to favorites
      dispatch(addToFavouritesAction(data.company_name));
    } else {
      // Remove from favorites
      dispatch(deleteFromFavouritesAction(data.company_name));
    }
  };

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col>
        <i
          className="bi bi-bookmark-heart"
          style={{
            fontSize: '24px',
            cursor: 'pointer',
            color: isClicked ? 'blue' : 'gray',
          }}
          onClick={handleIconClick}
        ></i>
      </Col>
    </Row>
  );
};

export default Job;

import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import styled from 'styled-components';

const Styles = styled.div`
    .card {
        width:300px;
    }

    @media (max-width: 480px) {
        .card {
          width:250px;
        }

    @media (max-width: 300px) {
        .card {
          width:230px;
        }
`;

const IMG_API = "https://image.tmdb.org/t/p/w1280"
const setVoteClass = (vote) => {
    if (vote >= 8) {
        return 'border-success'
    } else if (vote >= 6 ) {
        return 'border-warning'
    } else {
        return 'border-danger';
    }
}

const Movie = ( { title, poster_path, overview, vote_average } ) => {
    return (
        <>
        <Styles>
        <Accordion defaultActiveKey="1">
        <Card  className="mt-2 mr-2 ml-2 mb-2 shadow-sm mb-5 bg-white rounded responsive=sm ">
        <Card.Img variant="top" src={IMG_API + poster_path} alt={title} />
            <Card.Body className="d-flex justify-content-between align-items-baseline">
                <Accordion.Toggle as={Card.Title} type="button" className="stretched-link" eventKey="0">
                  {title}
                </Accordion.Toggle>
                <Card.Subtitle className={`border rounded p-2 ${setVoteClass(vote_average)}`}>{vote_average}</Card.Subtitle>
            </Card.Body>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    {overview}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        </Accordion>
        </Styles>
        </>
    )
}

export default Movie
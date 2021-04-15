import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const IMG_API = "https://image.tmdb.org/t/p/w1280"
const setVoteClass = (vote) => {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 6 ) {
        return 'orange'
    } else {
        return 'red';
    }
}

const Movie = ( { title, poster_path, overview, vote_average } ) => {
    return (
        // <div className='movie'>
        //     <img src={IMG_API + poster_path} alt={title} />
        //     <div className='movie-info'>
        //         <h3>{title}</h3>
        //         <span className={`tag ${setVoteClass(vote_average)}`}>
        //             {vote_average}
        //         </span>
        //     </div>
        //     <div className='movie-over'>
        //         <p>{overview}</p>
        //     </div>

        // </div>
        <>
        <Card style={{ width: '300px' }} className="mt-2 mr-2 ml-2 mb-2">
        <Card.Img variant="top" src={IMG_API + poster_path} alt={title} />
            <Card.Body className="d-flex justify-content-between align-items-baseline">
                <Card.Title className="m-0">{title}</Card.Title>
                <Card.Subtitle>{vote_average}</Card.Subtitle>
            </Card.Body>
            <Card.Body>
                <Card.Text>{overview}</Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default Movie
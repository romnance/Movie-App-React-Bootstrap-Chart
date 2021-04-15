import React from 'react';
import { useEffect, useState } from 'react';
import Movie from './components/Movie.js';
import {Form, FormControl} from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';


const FEATERED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=565aae61031ff071e3eecd675ccebbb4&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=565aae61031ff071e3eecd675ccebbb4&query=";


function Home() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
      getMovies(FEATERED_API)
    }, []);
  
    const getMovies = (API) => {
      fetch(API)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results)
      }) 
    }
  
    const handleOnSubmit = (e) => {
      e.preventDefault();
  
      if (searchTerm) {
        getMovies(SEARCH_API+searchTerm)
      
      setSearchTerm('');
      }
    }
  
    const handleOnChange = (e) => {
      setSearchTerm(e.target.value)
    }
  
    return (
        <>
        <div className="d-flex justify-content-center mt-4 mb-3">
        <Form onSubmit={handleOnSubmit}>
                <FormControl type="text" 
                placeholder="Search" 
                className="mr-sm-2" 
                value={searchTerm} 
                onChange={handleOnChange} />
        </Form>
        </div>
        
        
         <div className='movie-container'>
           {movies.length > 0 &&  movies.map(movie => (
             <Movie key={movie.id} {...movie} />
           ))}
        </div>
        </>
    )
}

export default Home

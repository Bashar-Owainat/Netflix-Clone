// import Movie from "./Movie";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ModalMovie from "./ModalMovie";





function MovieList({ movies }) {
    console.log(movies);
    const [chosenMovie, setChosenMovie] = useState()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleChosenMovie(movie){
        setChosenMovie(movie);
        handleShow();
    }
    return (
        <>
            {

                movies.map(movie => {
                    return (
                        <div key={movie.id}>
                            <Card   style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/12/BEST-MOVIES-ON-NETFLIX.jpg" />
                    <Card.Body>
                    <Card.Title>Title: {movie.title}</Card.Title>
                    <Card.Text>
                        id: {movie.id}
                    </Card.Text>
                    released date: {movie.release_date}
                    <Card.Text>


                    </Card.Text>
                    <Card.Text>

                        poster_path: {movie.poster_path}
                    </Card.Text>
                      <Button variant="primary" onClick={() => handleChosenMovie(movie)}>Add to Fav</Button>
                    </Card.Body>
                  </Card>
                        </div>
                    )
                })
            }
            {chosenMovie && <ModalMovie movie={chosenMovie} show={show} handleClose={handleClose}/>}
        </>
    )
}

export default MovieList;
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ModalMovie from './ModalMovie';


function Movie({ movie, getFavMovie }) {

    function handelDelete(id){
        const url = `${process.env.REACT_APP_SERVER}/deletemovie/${id}`;
        const response = fetch(url, {
          method: "DELETE", // *GET, POST, PUT, DELETE, etc
        }).then(() => {
              getFavMovie();
        });
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
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
                    <Button onClick={() => handelDelete(movie.id)} variant="primary">
                        Delete
                    </Button>

                </Card.Body>
            </Card></>
    )
}

export default Movie;
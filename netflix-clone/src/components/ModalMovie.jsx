import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";



export default function ModalMovie({ movie, show, handleClose }) {

   

    function handelFormSubmit(e) {
        e.preventDefault();
        console.log(e.target.comment.value);
        let comment = e.target.comment.value;
        addToFavorite(movie, comment);
    }

    // /addmovie
    async function addToFavorite(movie, comment) {

        console.log(movie.id);
        console.log(movie.title);
        console.log(movie.release_date);
        console.log(movie.poster_path);
        console.log(movie.overview);
        console.log(comment);


        const url = `${process.env.REACT_APP_SERVER}/addmovie`;
        const movieData = {
            title: movie.title,
            release_date: movie.release_date,
            poster_path: movie.poster_path,
            overview: movie.overview,
            comment: comment
        }

        // const response = await fetch(url, {
        //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //     headers: {
        //       'Content-Type': 'application/json'
        //       // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     body: JSON.stringify(data) // body data type must match "Content-Type" header
        //   });
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(movieData)
        };
        const response = await fetch(url, requestOptions);
        console.log(response);
         handleClose();

    }
    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{movie.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>overview: {movie.overview}</Modal.Body>
                <Modal.Footer>
                    <Form onSubmit={handelFormSubmit} style={{ margin: "0 10px" }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control name="comment" type="text" placeholder="Enter Comment" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

// export default ModalMovie;

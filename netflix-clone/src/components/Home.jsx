import { findByLabelText } from "@testing-library/react";
import { useState, useEffect } from "react";
import MovieList from "./MovieList";

function Home() {

    const [movies, setMovies] = useState([]);

    async function getTrending() {
        let response = await fetch(`${process.env.REACT_APP_SERVER}/trending`);
        let data = await response.json();

        setMovies(data);
    };

    useEffect(() => {
        getTrending();

    }, []);

    return (
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly", padding:"20px"}}>

        {movies && <MovieList movies={movies}/>}
        </div>
        
    )
}

export default Home;
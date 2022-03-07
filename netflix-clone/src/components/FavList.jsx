import { useEffect, useState } from "react";
import Movie from "./Movie";
import NavbarMovie from "./NavbarMovie"

function FavList(){

    const [favMovies, setFavMovies] = useState([]);

    async function getFavMovie(){
        const response = await fetch(`${process.env.REACT_APP_SERVER}/getmovie`);
        const data = await response.json();

        setFavMovies(data);
    }

    useEffect(() =>{
        getFavMovie();
    }, []);

    return(

        <>
       <NavbarMovie/> 
        {
            favMovies &&
            favMovies.map((movie) => {
                return(

                    <Movie key={movie.id} 
                    getFavMovie={getFavMovie}
                    movie={movie}
                    />
                )
            })
        }
        </>

    )
}

export default FavList;
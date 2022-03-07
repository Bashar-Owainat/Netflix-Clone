import { Link } from  'react-router-dom';

function NavbarMovie() {

    return (

        <div style={{padding:"20px", display:'flex', justifyContent:'space-evenly'}}>
            <h1>Netflix Clone</h1>
            <Link to="/"> Home</Link>
            <Link to="/fav"> Favorite Movies</Link>
        </div>
    )
}

export default NavbarMovie;
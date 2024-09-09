import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card"
import { useNavigate } from "react-router-dom";

const movieApi = "https://api.themoviedb.org/3/movie/now_playing?api_key=841838d080f996eb28fba97862e07733&language=en-US&page=1 "

const imagrApi = "https://image.tmdb.org/t/p/w500"

const Home = () => {

    const [movies,setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("UserEmail")
        if(!user){
            navigate("/login")
        }
    },[])

    useEffect(() => {
        axios.get(movieApi).then((resp) => {
            // console.log(resp.data.results)
            setMovies(resp.data.results)

        })
    },[]);
   

    const handleClick = (movie) =>{
        navigate('/movie/' + movie.id, {state:movie})
    }

    return(
        <div  style={{ padding:"2rem",display:'flex',flexWrap:"wrap",justifyContent:"center"}}>
            {movies.map((movie) =>{
                return(
                   <div key={movie.id} style={{backgroundColor:"#f54236"}}>
                     <Card onClick={() => handleClick(movie)}
                     style={{width:"20rem",paddingLeft:"1rem", padding: 25,overflow:"hidden",margin:"1rem",height:"auto"}}>
                        <Card.Img src= {imagrApi + movie.poster_path} style={{width:"16rem",marginLeft:"0.5rem"}}></Card.Img>
                        <Card.Title>{movie.title}</Card.Title>
                        {/* <Card.Text>{movie.overview}</Card.Text> */}
                     </Card>
                   </div>
                )
            })}
        </div>
    )
}

export default Home
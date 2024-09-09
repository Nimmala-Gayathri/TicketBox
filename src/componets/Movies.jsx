import axios from "axios";
import React, { useEffect, useState } from "react";
import {Row,Col, Button} from "react-bootstrap"
import Feedback from "react-bootstrap/esm/Feedback";
import { useLocation, useNavigate } from "react-router-dom";


const imagrApi = "https://image.tmdb.org/t/p/w500"
const timings = ["10:00 AM",'01:30 PM','04:30 PM','09:00 PM'] 

const Movies = () =>{
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location)
    const {title,overview,poster_path} = location.state

    const [lnglat,setLnglat] = useState({})
    const [theatres,setTheatres] = useState([]);

    useEffect (() => {
        if("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition((position) =>{
                // console.log(position)
                // console.log(position.coords.latitude,position.coords.longitude)
                setLnglat({
                    lng:position.coords.longitude,
                    lat:position.coords.latitude
                })
            })
        }
    },[])
    // console.log(lnglat)

    useEffect (() => {
        // console.log(lnglat)
        if(Object.keys(lnglat).length > 0){
            const geoAPI = `https://api.geoapify.com/v2/places?categories=entertainment.cinema&filter=circle:${lnglat.lng},${lnglat.lat},5000&bias=proximity:78.44202,17.3707564&limit=20&apiKey=160741793bb846bc85d93f8452ecb783`
            axios.get(geoAPI).then((resp) =>{
               const featuresArr = resp.data.features
               const  names = []
               featuresArr.map((feature) => names.push(feature.properties.name))
               setTheatres(names)
            })
        }
       
    },[lnglat])

    return(
        <div >
            <Row>
                <Col>
                {/* style={{padding:"2rem"}} */}
                <div>
                    <img style={{borderRadius:16,marginLeft:"13rem",marginTop:"1rem"}} src= {imagrApi + poster_path} height= {400} width={350} />
                    <h4 style={{margin:"1rem",marginLeft:"2rem",fontWeight:"650"}}>{title}</h4>
                    <p style={{marginLeft:"2rem",width:"75%",fontSize:"1.2rem"}}>{overview}</p>
                </div>
                </Col>
                <Col>
                <div>
                    {theatres.map((theatre,index) =>{
                        return(
                            <div key={index} >
                               <div><h4 style={{fontWeight:"500"}}>{theatre}</h4></div>
                                <div style={{margin:"1rem"}}>
                                    <div style={{display:"flex",flexDirection:"row"}}>
                                    {timings.map((time) => {
                                        return(
                                            <div key={time} >
                                                <Button 
                                                onClick={() => navigate('/select',{state:{title:title}})}
                                                style={{margin:"1rem",backgroundColor:" #f54236",border:"none"}}>{time}</Button>
                                            </div>
                                        )
                                    })}
                                    </div>
                                </div>
                                {/* <Button style={{margin:"1rem",marginLeft:"2rem",width:'20%'}}> Book Now </Button> */}
                            </div>
                        );
                    })
                    }
                </div>
                </Col>
            </Row>
        </div>
    )
}

export default Movies ;
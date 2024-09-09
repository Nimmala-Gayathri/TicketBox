import React from "react";
import {Row,Col} from "react-bootstrap";
import successImg from "../assets/success.png";
import Qr_code from "../assets/Qr-code.png"


const Success = () =>{
    return(
        <div style={{width:"99%"}}>
            <Row>
                <Col>
                <div style={{textAlign:"center"}}> 
                   <img src= {successImg} style={{width:"27rem",height:"30rem",textAlign:"center"}}/>
                   <h5  style={{textAlign:"center"}}>Ticket confirmed !</h5>
                   <p >Enjoy Your movie</p>
                </div>                
                </Col>
               
                <Col>
                <div style={{textAlign:"center",marginTop:"3rem"}}>
                    <img src = {Qr_code}/>
                </div>
                </Col>
            </Row>
        </div>
    )
}

export default Success ;
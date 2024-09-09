import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Movie from  "../assets/Movie1.png";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import {NavLink, useNavigate } from "react-router-dom";

export default function Login( {setUser} ){
    const [email,setEmail] = useState("")

    const navigate = useNavigate()

    const handleSubmmit =  () =>{
        localStorage.setItem("UserEmail", email);
        setUser(email)
        navigate("/")
    }
    return (
        <div className="loginPage" style={{height:'87vh'}}>
            <Container >
                <Row>
                    <Col>
                    <img src= {Movie} style={{marginTop:"3rem"}}/>
                    <h1 style={{color:"white",fontSize:"2.2rem",textAlign:"center"}}><i>BOOK TICKETS / EARN POINTS</i></h1>
                    </Col>
                    <Col style={{marginLeft:"6rem",marginTop:'4rem'}} >
                        <Card style={{ width: '26rem',marginLeft:"5rem",borderRadius:"18px",height:"30rem",marginTop:"2rem" }}>
                            <Card.Body>
                                <Form  className = "formStyle" >
    
                                    <Form.Group className="mb-4" controlId="formGroupEmail">
                                        {/* <Form.Label>Email address</Form.Label> */}
                                       <Form.Control type="email" placeholder="Enter email" className="input" 
                                       onChange={(e) => setEmail(e.target.value)}
                                       value = {email}
                                       />
                                      </Form.Group>
                                     <Form.Group className="mb-4" controlId="formGroupPassword" >
                                          {/* <Form.Label>Password</Form.Label> */}
                                     <Form.Control type="password" placeholder="Password" className="input" />
                                     </Form.Group>
                                     <Button variant="primary" type="submit" style={{backgroundColor:"#f54236",border:"none",padding:'0.8rem',marginTop:"3rem",fontSize:"1.5rem",borderRadius:"16px"}}
                                     onClick={handleSubmmit}
                                     >
                                        Login 
                                    </Button>
                                    <h6 style={{textAlign:"center",fontSize:'1.5rem',fontWeight:"350",marginTop:'2rem'}}>New to here <br />Click here To <NavLink to={"/signup"} style={{color:"black"}}>Signup</NavLink></h6>
                               </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
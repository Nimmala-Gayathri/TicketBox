import React, { useEffect, useState } from "react";
import { Row, Col, Button  } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export default function SelectSeat () {
    const location = useLocation()
    const navigate = useNavigate()
    const {title} = location.state
    const [seatMatrix,setSeatMatrix] = useState([])
    const [selectSeats,setSelectSeats] = useState([])
    const [clicked,setClicked] = useState([])

    const handleSelect = ( newSeat ) =>{
        setSelectSeats([...selectSeats, newSeat])
        setClicked([...clicked,newSeat])
      
    }
   
    const creatSeats = () =>{// here i use first const but we can't assign the value for cost so we let
        let totalRows = 6;
        let numberOfSeatsInRow = 8;
        let tempSeats = [];
        let row = 0 ;
        let char = "A" ;
        while (row < totalRows){
           let col = 1 ;
           let rowArr = [];
           while(col <= numberOfSeatsInRow){
            rowArr.push(char + col);
            col++;
           }
           tempSeats.push(rowArr);
           row++;
           char = String.fromCharCode(char.charCodeAt(0) + 1) // this is addig the string
        }
        // console.log(tempSeats)
        setSeatMatrix(tempSeats)
    }

    useEffect (() =>{
        creatSeats()
    },[])

    return(
        <div style={{marginLeft:"4rem"}} > 
            <div>
                <h3 className="d-inline-block">{title}</h3>
                <h5 style={{marginLeft:"30%",fontWeight:'400'}} className="d-inline-block">Screen This side</h5>
            </div>
            <div style={{marginTop:"2rem",width:"99%"}}>
                {
                    seatMatrix.map((seatArr) => {
                        return(
                            <Row key={seatArr}>
                                {seatArr.map((seat,index) => {
                                    let isSelected = selectSeats.indexOf(seat) >-1;
                                    const isDisabled = clicked.includes(seat);
                                    return(
                                        <Col key={index}>
                                          <Button 
                                           style={{marginTop:"1rem",marginBottom:"1rem",width:"6rem",backgroundColor:isSelected ? " blue" : "#f54236",border:"none"}}
                                           onClick={() => handleSelect(seat)}
                                           disabled = {isDisabled}
                                           >
                                             {seat}</Button>
                                        </Col>
                                    )
                                })}
                            </Row>
                        )
                    })
                }
            </div>
            <div style={{marginTop:"2rem" }}>
                <div>
                  {
                    selectSeats.length > 0 ? 
                    <div style={{display:'flex',justifyContent: "space-between"}}>
                        <div>
                          { selectSeats.map((seat,index) =>{
                               return(
                                    <span key={index}  style={{marginRight:" 0.5rem",fontSize:"1.7rem",fontWeight:"500"}}>{seat} </span>  
                               ) 
                           })}
                           <p> Selected Seats</p>
        
                        </div>
                       <div style={{display:" flex",alignItems:"center",marginRight:"5rem"}}>
                           <h4 style={{marginRight:"4rem"}}> Total : Rs.{selectSeats.length * 300}</h4>
                           <Button style={{height:"3rem",width:"8rem"}} 
                           onClick={() => navigate("/success")}
                           > Chechout </Button>
                        </div>
                    </div> 
                    : <div> No seats selected</div>
                  }
                </div>
                
            </div>
            
        </div>
    )
}
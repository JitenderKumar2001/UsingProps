import React from "react";
import './StudentDetails.css'

function StudentDetails(props){
    let {name, reg, course} = props;

    return(
        <div className="box">
        <h1>Name: {name}</h1>
        <h3>Reg. No: {reg}</h3>
        <h3>Course: {course}</h3>
        </div>

    )
}

export default StudentDetails
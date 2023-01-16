import React from "react";
import StudentDetails from "./StudentDetails";
import './MyWeb.css';

function MyWeb(){
    return(
        <div className="myweb">
            <StudentDetails 
             name="Jitender Kumar"
             reg="12006477"
             course="B-Tech"
             />

            <StudentDetails 
             name="Mohit Kumar"
             reg="12107642"
             course="MBA"
             />

            <StudentDetails 
             name="Umang Kumar"
             reg="12006142"
             course="B-Tech"
             />
        </div>
    )
}

export default MyWeb
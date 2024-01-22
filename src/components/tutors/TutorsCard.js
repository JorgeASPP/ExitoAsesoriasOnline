import React, { Component } from "react";
import { images, tutors } from "../../utils/Const";
import { Link } from "react-router-dom";

export class TutorsCard extends Component{    
    render () {
        return(
            <div class='container-fluid p-5'>
                <h2 class='ms-5'>
                    <span class='ms-3'>Agendar con el tutor de tu elección</span>
                </h2>
                <div class='row mt-4'>
                    {tutors.map(tutor => {
                        if(tutor?.specialty) return;
                        return(
                            <div class='col-12 col-md-6 col-xl-4 text-center p-5'>
                                <div style={{border:'solid', borderRadius: '1.4rem', padding:'2rem'}}>
                                    <img class='d-block ms-auto me-auto' src={tutor.imgProfile} style={{maxWidth: '8rem',borderRadius: '50%'}}/>
                                    <span>{tutor.score}</span><br/>
                                    <span>{tutor.username}</span><br/>
                                    <span><strong>Materia:</strong>{tutor.subject}</span><br/>
                                    <span><strong>Nivel academico:</strong>{tutor.academyLevel}</span><br/>
                                    <Link to='/schedule'>
                                        <button class='btn-fill' style={{width: 'auto', padding:'0.5rem 2rem'}}>Agendar</button>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
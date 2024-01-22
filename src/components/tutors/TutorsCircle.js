import React, { Component } from "react";
import { images, tutors } from "../../utils/Const";

export class TutorsCircle extends Component{    
    render () {
        return(
            <div class='container-fluid p-5'>
                <h2 class='ms-5'>
                    <img src={images.standarIcon}/>
                    <span class='ms-3'>Tutores mejor calificados</span>
                </h2>
                <div class='row mt-4'>
                    {tutors.map(tutor => {
                        if(!tutor?.specialty) return;
                        return(
                            <div class='col-12 col-md-4 col-xl-3 text-center'>
                                <img class='d-block ms-auto me-auto' src={tutor.imgProfile} style={{maxWidth: '13rem',borderRadius: '50%'}}/>
                                <span>{tutor.score}</span><br/>
                                <span>{tutor.username}</span><br/>
                                <span><strong>Especialidad:</strong>{tutor.specialty}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
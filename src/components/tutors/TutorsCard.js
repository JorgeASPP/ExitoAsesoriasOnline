import React, { Component } from "react";
import { images, tutors } from "../../utils/Const";
import { Link } from "react-router-dom";

import StarRating from "../StarRating"; // Importa el componente StarRating

export class TutorsCard extends Component {
    handleRate = (tutorId, rating) => {
        // Maneja la calificación aquí, por ejemplo, enviando los datos al servidor o actualizando el estado de la aplicación
        console.log(`Tutor con ID: ${tutorId} fue calificado con: ${rating} estrellas`);
    };

    render() {
        return (
            <div className='container-fluid p-5'>
                <h2 className='ms-5'>
                    <span className='ms-3'>Agendar con el tutor de tu elección</span>
                </h2>
                <div className='row mt-4'>
                    {tutors.map(tutor => (
                        <div className='col-12 col-md-6 col-xl-4 text-center p-5' key={tutor.id}>
                            <div style={{ border: 'solid', borderRadius: '1.4rem', padding: '2rem' }}>
                                <img className='d-block ms-auto me-auto' src={tutor.imgProfile} style={{ maxWidth: '8rem', borderRadius: '50%' }} />
                                <span>{tutor.score}</span><br />
                                <span>{tutor.username}</span><br />
                                <span><strong>Materia:</strong> {tutor.subject}</span><br />
                                <span><strong>Nivel académico:</strong> {tutor.academyLevel}</span><br />
                                {/* Cambia RatingDropdown por StarRating */}
                                <StarRating tutorId={tutor.id} onRate={this.handleRate} />
                                <Link to='/schedule'>
                                    <button class='btn-fill' style={{ width: 'auto', padding: '0.5rem 2rem' }}>Agendar</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default TutorsCard;
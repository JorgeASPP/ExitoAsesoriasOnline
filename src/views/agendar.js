import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Importa el componente Link
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import '../styles/home.css';
import {images, categories, tutors} from '../utils/Const';
import Carousel from '../components/carousel/Carousel';
import CardComponent from '../components/carousel/CardCarousel';
import Subjects from "../components/subjects/subjects";

function Agendar() {
    const [fecha, setFecha] = useState(''); // Estado para la fecha
    const [hora, setHora] = useState(''); // Estado para la hora
    const tutor = tutors[4]; // Asegúrate de definir tutors correctamente

    const handleFechaChange = (event) => {
        setFecha(event.target.value); // Actualiza el estado de la fecha
    };

    const handleHoraChange = (event) => {
        setHora(event.target.value); // Actualiza el estado de la hora
    };

    return (
      <>
        <Navbar />
        <div className="container-fluid p-md-5 pt-md-0 p-0 pt-0">
          <div className="row mt-3">
            <div className="col-12 text-center">
              <h1 className="display-inline"> 
                <img src={images.standarIcon} className="section-logo" alt="Logo" />
                Agendar
              </h1>
            </div>
          </div>
          <Carousel /> 
          <h2 className="mt-4 ms-5 ps-5">Haz elegido un tutor, ahora puedes agendar tu asesoría en la fecha y hora que más se te acomode</h2>
          
          <div className="row mt-4">
            <div className="col-12 col-md-6 col-xl-4 text-center p-5">
              <div style={{padding:'2rem'}}>
                <img className="d-block ms-auto me-auto" src={tutor.imgProfile} style={{maxWidth: '8rem',borderRadius: '50%'}} alt="Profile"/>
                <span>{tutor.score}</span><br/>
                <span>{tutor.username}</span><br/>
                <span><strong>Materia:</strong>{tutor.subject}</span><br/>
                <span><strong>Nivel academico:</strong>{tutor.academyLevel}</span><br/>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4 text-center p-5">
                <form className="mt-5">
                <label htmlFor="date"><strong>Fecha:</strong></label>
                <input id="date" type="date" value={fecha} onChange={handleFechaChange}></input> {/* Usa el estado y la función para manejar cambios */}
                <label className="mt-5" htmlFor="time"><strong>Hora:</strong></label>
                <input id="time" type="time" value={hora} onChange={handleHoraChange}></input> {/* Usa el estado y la función para manejar cambios */}
                </form>
            </div>
            <div className="col-12 col-md-6 col-xl-4 text-center p-5">
              <img src={images.calendar} style={{width: '80%', padding:'0.5rem 2rem'}} alt="Calendar"/>
              <Link to={{
                pathname: '/sesiones-agendadas',
                state: { fecha, hora }
                }}>
                <button className="btn-fill mb-0" style={{width: '55%', padding:'0.5rem 2rem'}}>Agendar</button>
                </Link>
              <div className="ms-auto me-auto mt-0 pt-0" style={{width: '65%', padding:'0.5rem 2rem', fontSize:'0.6rem'}}>Una vez dando clic en este botón lse le notificará a tu tutor y puede aceptar o declinar tu asesoria</div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default Agendar;

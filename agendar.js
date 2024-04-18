import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import '../styles/home.css';
import {images, categories, tutors} from '../utils/Const';
import Carousel from '../components/carousel/Carousel';
import CardComponent from '../components/carousel/CardCarousel';
import Subjects from "../components/subjects/subjects";

function Agendar() {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        duration: '',
        message: ''
    });
    const [agendas, setAgendas] = useState([]);

    const { date, time, duration, message } = formData;
    const tutor = tutors[4];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleAgendar = async () => {
        if (!date || !time || !duration) {
            alert("Por favor completa todos los campos para agendar la asesoría.");
            return;
        }

        const agendaData = {
            tutor: tutor,
            date: date,
            time: time,
            duration: duration,
            message: message
        };

        try {
            const response = await fetch('/schedule/agendar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'manifest/json'
                },
                body: JSON.stringify(agendaData)
            });

            if (response.ok) {
                alert("La solicitud de agenda se ha enviado correctamente.");
                // Limpiar el formulario después de enviar la solicitud
                setFormData({
                    date: '',
                    time: '',
                    duration: '',
                    message: ''
                });
                // Agregar la agenda a la lista de agendas
                setAgendas([...agendas, agendaData]);
            } else {
                throw new Error('Error al enviar la solicitud de agenda.');
            }
        } catch (error) {
            console.error('Error al enviar la solicitud de agenda:', error);
            alert("Ha ocurrido un error al enviar la solicitud de agenda. Por favor, inténtalo de nuevo más tarde.");
        }
    }

    return (
        <>
            <Navbar />
            <div className="container-fluid p-md-5 pt-md-0 p-0 pt-0">
                <div className="row mt-3">
                    <div className="col-12 text-center">
                        <h1 className="display-inline">
                            <img src={images.standarIcon} className="section-logo" alt="icon" />
                            Agendar
                        </h1>
                    </div>
                </div>
                <Carousel />
                <h2 className='mt-4 ms-5 ps-5'>Haz elegido un tutor, ahora puedes agendar tu asesoría en la fecha y hora que más se te acomode</h2>

                <div className='row mt-4'>
                    <div className='col-12 col-md-6 col-lg-4 text-center p-3'>
                        <div style={{ padding: '2rem' }}>
                            <img className='d-block mx-auto' src={tutor.imgProfile} style={{ maxWidth: '8rem', borderRadius: '50%' }} alt="profile" />
                            <span>{tutor.score}</span><br />
                            <span>{tutor.username}</span><br />
                            <span><strong>Materia:</strong> {tutor.subject}</span><br />
                            <span><strong>Nivel académico:</strong> {tutor.academyLevel}</span><br />
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 text-center p-3'>
                        <form className='mt-3'>
                            <label htmlFor='date'><strong>Fecha:</strong></label>
                            <input id='date' name="date" type="date" className="form-control" value={date} onChange={handleChange}></input>
                            <label className='mt-3' htmlFor='time'><strong>Hora:</strong></label>
                            <input id='time' name="time" type="time" className="form-control" value={time} onChange={handleChange}></input>
                            <label className='mt-3' htmlFor='duration'><strong>Duración (en minutos):</strong></label>
                            <input id='duration' name="duration" type="number" className="form-control" value={duration} onChange={handleChange}></input>
                        </form>
                    </div>
                    <div className='col-12 col-lg-4 text-center p-3'>
                        <img src={images.calendar} style={{ width: '80%', padding: '0.5rem 2rem' }} alt="calendar" />
                        <button className='btn btn-primary mt-3' style={{ width: '80%' }} onClick={handleAgendar}>Agendar</button>
                        <div className='mt-3' style={{ fontSize: '0.8rem' }}>Una vez que des clic en este botón, se le notificará a tu tutor y podrá aceptar o declinar tu asesoría</div>
                    </div>
                </div>

                <div className='row mt-4 text-center'>
                    <div className='col-12'>
                        <div className='text-center p-3' style={{ width: '100%', background: '#efefef', borderRadius: '2rem' }}>
                            <input className='form-control' type="text" style={{ width: '70%', marginTop: '1rem', marginBottom: '1rem' }} placeholder="Escribe un mensaje" name="message" value={message} onChange={handleChange}></input>
                        </div>
                    </div>
                    <span>Ahora puedes enviar mensajes a tu tutor en tiempo real</span>
                </div>
                <img className='w-100 mt-5' src={images.bannerAgenda} alt="banner" />
                
                {/* Sección de reportes y estadísticas */}
                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <h2>Reportes de Asesorías</h2>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        {agendas.map((agenda, index) => (
                            <div key={index} className="card mt-3">
                                <div className="card-body">
                                    <h5 className="card-title">Asesoría #{index + 1}</h5>
                                    <p><strong>Fecha:</strong> {agenda.date}</p>
                                    <p><strong>Hora:</strong> {agenda.time}</p>
                                    <p><strong>Duración:</strong> {agenda.duration} minutos</p>
                                    <p><strong>Mensaje:</strong> {agenda.message}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Agendar;
import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import '../styles/home.css';
import {images, categories, tutors} from '../utils/Const';
import Carousel from '../components/carousel/Carousel';
import CardComponent from '../components/carousel/CardCarousel';
import Subjects from "../components/subjects/subjects";

function Agendar (){
    const tutor = tutors[4];
    return(<>
        <Navbar />
        <div class="container-fluid p-md-5 pt-md-0 p-0 pt-0">
            <div class="row mt-3">
                <div class="col-12 text-center">
                <h1 class="display-inline"> 
                    <img src={images.standarIcon} class="section-logo" />
                    Agendar
                </h1>
                </div>
            </div>
            <Carousel /> 
            <h2 class='mt-4 ms-5 ps-5'>Haz elegido un tutor, ahora puedes agendar tu asesoría en la fecha y hora que más se te acomode</h2>
            
            <div class='row mt-4'>
                <div class='col-12 col-md-6 col-xl-4 text-center p-5'>
                    <div style={{padding:'2rem'}}>
                        <img class='d-block ms-auto me-auto' src={tutor.imgProfile} style={{maxWidth: '8rem',borderRadius: '50%'}}/>
                        <span>{tutor.score}</span><br/>
                        <span>{tutor.username}</span><br/>
                        <span><strong>Materia:</strong>{tutor.subject}</span><br/>
                        <span><strong>Nivel academico:</strong>{tutor.academyLevel}</span><br/>
                    </div>
                </div>
                <div class='col-12 col-md-6 col-xl-4 text-center p-5'>
                    <form class='mt-5'>
                        <label for='date'><strong>Fecha:</strong></label>
                        <input id='date' type="date"></input>
                        <label class='mt-5' for='time'><strong>Hora:</strong></label>
                        <input id='time' type="time"></input>
                    </form>
                </div>
                <div class='col-12 col-md-6 col-xl-4 text-center p-5'>
                    <img src={images.calendar} style={{width: '80%', padding:'0.5rem 2rem'}}/>
                    <button class='btn-fill mb-0' style={{width: '55%', padding:'0.5rem 2rem'}}>Agendar</button>
                    <div class='ms-auto me-auto mt-0 pt-0' style={{width: '65%', padding:'0.5rem 2rem', fontSize:'0.6rem'}}>Una vez dando clic en este botón lse le notificará a tu tutor y puede aceptar o declinar tu asesoria</div>
                </div>
            </div>
            
            <div class='row mt-4 text-center'>
                <div class='col-12'>
                    <div class='ms-auto me-auto text-center p-4' style={{width:'50%', background:'#efefef', borderRadius: '2rem'}}>
                        <input class='input-text d-inline' type="text" style={{width: '70%', marginTop:'12rem', padding:'0.5rem 1rem'}} placeholder="Escribe un mensaje"></input>

                    </div>
                </div>
                <span>Ahora puedes enviarle mensajes a tu tutor en tiempo real</span>
            </div>
            <img class='ms-auto me-auto w-100 mt-5' src={images.bannerAgenda}/>
        </div>
        <Footer />
    </>);
}

export default Agendar;
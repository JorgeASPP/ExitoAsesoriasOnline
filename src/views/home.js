import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import '../styles/home.css';
import {images, categories} from '../utils/Const';
import Carousel from '../components/carousel/Carousel';
import CardComponent from '../components/carousel/CardCarousel';
import Subjects from "../components/subjects/subjects";

function Home (){
    return(<>
        <Navbar />
        <div class="container-fluid p-md-5 pt-md-0 p-0 pt-0">
            <div class="row mt-3">
                <div class="col-12 text-center">
                <h1 class="display-inline"> 
                    <img src={images.standarIcon} class="section-logo" />
                    Inicio
                </h1>
                </div>
            </div>
            <Carousel /> 
            <Subjects />
            <CardComponent data={categories.sciences} />
            <CardComponent data={categories.maths} />
            <CardComponent data={categories.humanity} />
            <CardComponent data={categories.languages} />
            <CardComponent data={categories.programming} />
        </div>
        <Footer />
    </>);
}

export default Home;
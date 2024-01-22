import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { images, tutors, userValues } from "../utils/Const";
import { CardCarousel2 } from "../components/carousel/CardCarousel2";
import Subjects from "../components/subjects/subjects";
import { TutorsCircle } from "../components/tutors/TutorsCircle";
import Carousel from "../components/carousel/Carousel";
import { TutorsCard } from "../components/tutors/TutorsCard";

function Tutors(){
    return(<>
        <Navbar />
        <div class="container-fluid p-md-5 pt-md-0 p-0 pt-0">
            <div class="row mt-3">
                <div class="col-12 text-center">
                <h1 class="display-inline"> 
                    <img src={images.standarIcon} class="section-logo" />
                    Tutores
                </h1>
                </div>
            </div>
            <Carousel /> 
            <TutorsCircle />
            <TutorsCard />
        </div>
        <Footer />
    </>);
}
export default Tutors;
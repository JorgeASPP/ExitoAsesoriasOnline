import React, { Component } from "react";
import Slider from "react-slick";
import {images} from "../../utils/Const";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../styles/home.css'

export default class CardCarousel extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { data } = this.props;

        if(!data.subjects || data.subjects.length === 0) return;

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: <div className="custom-arrow left"><img src={images.prev} alt="Flecha izquierda" /></div>,
            nextArrow: <div className="custom-arrow right"><img src={images.next} alt="Flecha derecha" /></div>,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    prevArrow: <div className="custom-arrow left"><img src={images.prev} alt="Flecha izquierda" /></div>,
                    nextArrow: <div className="custom-arrow right"><img src={images.next} alt="Flecha derecha" /></div>,
                    }
                },
                {
                    breakpoint: 1080,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    }
                }
            ]
        };
        return (
        <div className="mt-4">
            <h2> 
                <img src={data.icon} class="sub-section-logo" />
                {data.name}
            </h2>
            <Slider {...settings}>
                {data.subjects.map((card) => (
                    <a class="text-decoration-none" href="">
                        <div class="card text-center border-gradient border-gradient-color p-4" style={{width: "20rem", minHeight: "10rem", maxHeight: "12rem"}}>
                            <img src={card.icon} class="card-img-top mx-auto d-block" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">{card.name}</h5>
                            </div>
                        </div>
                    </a>
                ))

                }
            </Slider>
        </div>
        );
    }
}

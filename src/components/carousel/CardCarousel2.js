import React, {Component} from "react";
import { images } from "../../utils/Const";

export class CardCarousel2 extends Component {
    constructor(props){
        super(props)
    }

    render () {
        const {icon, title, data} = this.props;
        return(
        <div class='container-fluid mt-5 ms-5 ps-5'>
            <h2>
                <img src={icon}/>
                <span class='ms-3'>{title}</span>
                <a><img class='ms-5' src={images.standarIcon}/></a>
            </h2>
            <div class='row'>
                {data.map((card) => (
                    <div class='col-12 col-md-6 col-lg-4 col-xl-3'>                    
                        <a class="text-decoration-none" href="">
                            <div class="card text-center border-gradient border-gradient-color p-4" style={{width: "20rem", minHeight: "8rem", maxHeight: "12rem"}}>
                                <div class="card-body">
                                    <h5 class="card-title">{card.name}</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
                <div class='col-12 col-md-6 col-lg-4 col-xl-3'>                    
                    <a class="text-decoration-none" href="">
                        <div class="card text-center border-gradient border-gradient-color p-4" style={{width: "20rem", minHeight: "8rem", maxHeight: "12rem"}}>
                            <img src={images.standarIcon} class="card-img-top mx-auto d-block" alt="..." style={{height:'3.5em'}}/>
                        </div>
                    </a>
                </div>
            </div>          
        </div>
        );
    }
}
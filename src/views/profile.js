import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { images, userValues } from "../utils/Const";
import { CardCarousel2 } from "../components/carousel/CardCarousel2";
import Subjects from "../components/subjects/subjects";
import { TutorsCircle } from "../components/tutors/TutorsCircle";

function Profile(){
    return(<>
        <Navbar/>
        <div class='container-fluid p-0'>
            <img class='w-100' src={images.bannerTutors}/>
            <CardCarousel2 icon= {images.standarIcon} title= 'Materias' data= {userValues.subjects} />
            <CardCarousel2 icon= {images.standarIcon} title= 'Tutores' data= {userValues.tutors} />
            <div class='row text-center p-0'>
                <div class='col-12 col-md-5 m-5 me-0'>
                    <img class='p-5 pe-0 w-100' src={images.post1}/>
                </div>
                <div class='col-12 col-md-6 p-5 pe-0'>
                    <table class='h-100'>
                        <tbody>
                            <tr>
                                <td class='h-100 align-center' style={{fontSize: '1.5rem', fontWeight: 'bold'}}>
                                La educación es un derecho humano, un importante motor del desarrollo y uno de los instrumentos más eficaces para reducir la pobreza, mejorar la salud, y lograr la igualdad de género, la paz y la estabilidad.
                                </td>
                            </tr>
                        </tbody>
                    </table>                    
                </div>
            </div>
            <Subjects/>
            <TutorsCircle/>
            <div class='row text-center p-0'>
                <div class='col-12 col-md-6 p-5 pe-0'>
                    <table class='h-100'>
                        <tbody>
                            <tr>
                                <td class='h-100 align-center ps-5' style={{fontSize: '1.5rem', fontWeight: 'bold'}}>
                                    <img src={images.bygm}/><br />
                                    Somos una empresa enfocada a mejorar la educación de las personas a traves de EXITO asesorías online, donde puedes elegir la materia que necesitas y puedes escoger entre una gran variedad de expertos para tomar la asesoría.
                                </td>
                            </tr>
                        </tbody>
                    </table>                    
                </div>
                <div class='col-12 col-md-5 m-5 me-0'>
                    <img class='p-5 pe-0 w-100' src={images.post2}/>
                </div>
            </div>
        </div>
        <Footer/>
    </>);
}
export default Profile;
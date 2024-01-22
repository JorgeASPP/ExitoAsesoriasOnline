import { images } from "../../utils/Const";

const Subjects = () =>{
    return(
        <div class='container-fuild p-5' style={{fontWeight:'bold', fontSize:'1.5rem'}}>
            <h2 class='ms-5'>
                <img src={images.standarIcon}/>
                <span>Materias frecuentes</span>
            </h2>
            <div class='row mt-4'>
                <div class='col-12 col-md-4 p-5'>
                    <img class='d-block ms-auto me-auto' src={images.sbjMaths}/>
                    <span class='d-block text-center mt-3'>Matematicas</span>
                </div>
                <div class='col-12 col-md-4 p-5'>
                    <img class='d-block ms-auto me-auto' src={images.sbjEnglish}/>
                    <span class='d-block text-center mt-3'>Inglés</span>
                </div>
                <div class='col-12 col-md-4 p-5'>
                    <img class='d-block ms-auto me-auto' src={images.sbjScience}/>
                    <span class='d-block text-center mt-3'>Ciencias</span>
                </div>
            </div>
        </div>
    );
}

export default Subjects;
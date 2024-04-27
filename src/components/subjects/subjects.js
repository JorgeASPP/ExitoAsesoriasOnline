import { images } from "../../utils/Const";

const Subjects = () =>{
    return(
        <div class='container-fuild p-5' style={{fontWeight:'bold', fontSize:'1.5rem'}}>
            <h2 class='ms-5'>
                <img src={images.standarIcon}/>
                <span>Materias</span>
            </h2>
            
        </div>
    );
}

export default Subjects;
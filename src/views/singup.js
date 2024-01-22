import React from "react";
import {Link} from 'react-router-dom';
import '../styles/login.css'
import { images } from "../utils/Const";

function Singup(){
    return (
        <div class='login container-fluid h-100 align-center text-center justify-content-center'>
            <div class="login-card">
                <div class='row'>
                    <h1>
                        <img class="logo" src={images.logo}/>
                        <span>Exito</span>
                    </h1>
                    <h2 class='title'>Bienvenido</h2>
                </div>
                <div class='row'>
                    <div class='col-xl-6 col-12'>
                        <img class='banner' src={images.singup}></img>
                    </div>
                    <div class='col-xl-6 col-12'>

                        <form>
                            <label for='name'>Nombre</label >
                            <input class='input-text' id='name' title="Nombre" type="text" placeholder="Ingrese su nombre"/>
                            <label for='lastname'>Apellido</label >
                            <input class='input-text' id='lastname' title="Apellido" type="text" placeholder="Ingrese su apellido"/>
                            <label for='email'>Email</label >
                            <input class='input-text' id='email' title="Email" type="text" placeholder="Ingrese su email"/>
                            <label for='pass'>Contraseña</label >
                            <input class='input-text' id='pass' title="Contraseña" type="password" placeholder="Ingrese su contraseña"/>
                            <div class='check'>
                                <input class='check-box' id='terms' title="terms" type="checkbox"/>
                                <label for='terms'>Acepto los terminos y condiciones</label >
                            </div>
                            <Link to='/'>
                                <button class='btn-fill'>Registrarse</button>
                            </Link>                            
                            <Link to='/login'>
                                <button class='btn-line'>Iniciar Sesión</button>
                            </Link>
                            <Link to={'/login'} style={{color:'black', textDecoration: 'none'}}>¿Ya tienes una cuenta?</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Singup;
import React from "react";
import {Link} from 'react-router-dom';
import '../styles/login.css'
import { images } from "../utils/Const";

function Login(){
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

                        <form>
                            <label for='email'>Email</label >
                            <input class='input-text' id='email' title="Email" type="text" placeholder="Ingrese su email"/>
                            <label for='pass'>Contraseña</label >
                            <input class='input-text' id='pass' title="Contraseña" type="password" placeholder="Ingrese su contraseña"/>
                            <span class='text-end w-100 d-block'><a>¿Has olvidado tu contraseña?</a></span>
                            <Link to='/'>
                                <button class='btn-fill'>Iniciar Sesión</button>
                            </Link>                            
                            <Link to='/singup'>
                                <button class='btn-line'>Registrarse</button>
                            </Link>
                            <Link to={'/singup'} style={{color:'black', textDecoration: 'none'}}>¿No tienes una cuenta?</Link>
                        </form>
                    </div>
                    <div class='col-xl-6 col-12'>
                        <img class='banner' src={images.login}></img>
                    </div>
                </div>
                <div class='row mt-4'>
                    <div class='col-xl-6 col-12'>
                        <span>Iniciar sesión con:</span> <br/>
                        <a><img class='soccial-media' src={images.fb}/></a>
                        <a><img class='soccial-media' src={images.ch}/></a>
                        <a><img class='soccial-media' src={images.tw}/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;
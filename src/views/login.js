import React, { useCallback, useRef } from "react";
import { Link } from 'react-router-dom';
import classes from '../styles/Login.module.css';
import { images } from "../utils/Const";
import styles from '../styles/Login.module.css';

function Login() {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  const toSignUp = useCallback(() => '/signup', []);
  const toHome = useCallback(() => '/', []);

  return (
    <div className={`${classes.login} container-fluid h-100 align-center text-center justify-content-center`}>
      <div className={classes.loginCard}>
        <div className='row'>
          <h1>
            <img className={classes.logo} src={images.logo} alt="Exito Logo" />
            <span>Exito</span>
          </h1>
          <h2 className='title'>Bienvenido</h2>
        </div>
        <div className='row'>
          <div className='col-xl-6 col-12'>
            <form ref={formRef} onSubmit={handleSubmit} className='form'>
              <label htmlFor='email' className='label'>Email</label>
              <input className='input-text' id='email' type="text" placeholder="Ingrese su email" />
              <label htmlFor='pass' className='label'>Contraseña</label>
              <input className='input-text' id='pass' type="password" placeholder="Ingrese su contraseña" />
              <span className='text-end w-100 d-block'><a>¿Has olvidado tu contraseña?</a></span>
              <Link to={toHome()} className='btn-fill'>Iniciar Sesión</Link>
              <Link to={toSignUp()} className='btn-line'>Registrarse</Link>
              <Link to={toSignUp()} style={{ color: 'black', textDecoration: 'none' }}>
                ¿No tienes una cuenta?
              </Link>
            </form>
          </div>
          <div className='col-xl-6 col-12'>
            <img className='banner' src={images.login} alt="Login Banner" />
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-xl-6 col-12'>
            <span>Iniciar sesión con:</span> <br/>
            <a><img className='soccial-media' src={images.fb} alt="Facebook" /></a>
            <a><img className='soccial-media' src={images.ch} alt="Chrome" /></a>
            <a><img className='soccial-media' src={images.tw} alt="Twitter" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

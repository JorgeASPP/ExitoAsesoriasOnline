import React, { useState } from 'react';
import '../styles/login.css';
import '../images/logo512.png';

const Login = () => {
    // Estado para manejar los datos de los campos

    const [formData, setFormData] = useState({
        correo: '',
        contrasena: '',
    });

    // Función para manejar los cambios de entrada
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = '/';
            return;   
    };

    return (
        <div className="container" >
            {/* Contenedor del logo y la leyenda */}

            {/*<h1 className="centered-h1">Éxito</h1>


            {/* Formulario de registro */}
            <form className="registro-form" onSubmit={handleSubmit}>
                {/* Título del formulario */}
                <h2>Iniciar Sesion</h2>
                
                {/* Campos de entrada */}
               
                <div>
                    <label htmlFor="correo">Correo electrónico:</label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        placeholder="Ingresa tu correo electrónico"
                        value={formData.correo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="contrasena">Contraseña:</label>
                    <input
                        type="password"
                        id="contrasena"
                        name="contrasena"
                        placeholder="Ingresa tu contraseña"
                        value={formData.contrasena}
                        onChange={handleChange}
                        required
                    />
                </div>
              
                <button type="submit">Iniciar Sesion</button>

                {/* Sección para la leyenda de iniciar sesión */}
                <div className="leyenda-iniciar-sesion">
                    <span>¿No tienes una cuenta?</span>
                    <a href="/register">Registrarse</a>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" className="social-link">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.google.com" className="social-link">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="https://www.instagram.com" className="social-link">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Login;
import React, { useState } from 'react';
import '../styles/register.css';
import '../images/logo512.png';

const Registro = () => {
    // Estado para manejar los datos de los campos

    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        contrasena: '',
        confirmarContrasena: '',
    });

    // Función para manejar los cambios de entrada
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        // Verifica si las contraseñas coinciden
        if (formData.contrasena !== formData.confirmarContrasena) {
            alert('Las contraseñas no coinciden');
            return;
        }

        // Realiza el envío del formulario
        console.log('Datos del formulario:', formData);
        // Aquí puedes agregar la lógica para enviar los datos del formulario a un servidor o base de datos
    
    if(formData.contrasena === formData.confirmarContrasena) {
        window.location.href = '/login';
    }
        
    };

    return (
        <div className="container" >
            {/* Contenedor del logo y la leyenda */}

            {/*<h1 className="centered-h1">Éxito</h1>


            {/* Formulario de registro */}
            <form className="registro-form" onSubmit={handleSubmit}>
                {/* Título del formulario */}
                <h2>Crear cuenta</h2>
                
                {/* Campos de entrada */}
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Ingresa tu nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
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
                <div>
                    <label htmlFor="confirmarContrasena">Confirmar Contraseña:</label>
                    <input
                        type="password"
                        id="confirmarContrasena"
                        name="confirmarContrasena"
                        placeholder="Confirma tu contraseña"
                        value={formData.confirmarContrasena}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Registrarse</button>

                {/* Sección para la leyenda de iniciar sesión */}
                <div className="leyenda-iniciar-sesion">
                    <span>¿Ya tienes una cuenta?</span>
                    <a href="/login">Iniciar sesión</a>
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

export default Registro;

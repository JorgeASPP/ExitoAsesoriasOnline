import {images} from '../utils/Const';
import '../styles/home.css';

const Footer = () => {
  return (
    <div class='footer container-fluid p-5'>
        <div class='row'>
            <div class='col'>
                Exito Business<br/>
                Enseña en exito<br/>
                Consigue la aplicación<br/>
                ¿Quienes somos?<br/>
                Ponte en contacto con nosotros
            </div>
            <div class='col'>
                Empleo<br/>
                Blog<br/>
                Ayuda y asistencia<br/>
                Afiliado<br/>
                Inversores
            </div>
            <div class='col'>
                Condiciones<br/>
                Pölitica de privacidad<br/>
                Configuración de cookies<br/>
                Mapa del sitio<br/>
                Declaración de accesibilidad
            </div>
            <div class='col-4 text-end'>
                <button class='p-2 ps-3 pe-5'>o Español</button>
            </div>
        </div>
        <div class='row pb-0 mt-5'>
            <div class='col-6'>
                <img src={images.logo} class="footer-logo"/>
                <span class="footer-name">Exito</span>
            </div>
            <div class='col-6 text-end'>
                <table class='h-100 w-100 align-bottom'>
                    <tr><td class='align-bottom'>© 2023BYGM Co.</td></tr></table>
            </div>
        </div>
    </div>
  );
}

export default Footer;
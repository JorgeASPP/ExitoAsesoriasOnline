import {images, userValues} from '../utils/Const';
import '../styles/home.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-xl navbar-light bg-light">
    <div class="container-fluid">
      <Link to='/' class="navbar-brand" href="#" style={{minWidth: '20rem'}}>
        <img src={images.logo} class="navbar-logo"/>
        <span class="name">Exito</span>
      </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class='w-100'>
          <ul class="navbar-nav d-flex justify-content-center">
            <li class="nav-item">
              <Link to='/' class="nav-link active text-center" aria-current="page" href="#">Materias</Link>
            </li>
            <li class="nav-item">
              <Link to='/tutors' class="nav-link active text-center" aria-current="page" href="#">Tutores</Link>
            </li>
            <li class="nav-item">
              <Link to='/schedule' class="nav-link active text-center" aria-current="page" href="#">Agendar</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-center" aria-current="page" href="#">Ayuda</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-center" aria-current="page" href="#">Contactanos</a>
            </li>
          </ul>
        </div>
        <div class="d-flex justify-content-center flex-xl-row-reverse" style={{minWidth: '20rem'}}>
          <ul class="navbar-nav">
            <li class="nav-item" style={{marginRight: '0.1rem'}} title='Buscar'>
              <a class="nav-link nav-action text-center" href="#" id="search">
                <img src={images.search} />
              </a>
            </li>
            <li class="nav-item" style={{marginRight: '0.1rem'}} title='Chats'>
              <a class="nav-link nav-action text-center" href="#" id="chats">
                <img src={images.chats} />
              </a>
            </li>
            <li class="nav-item" style={{marginRight: '0.1rem'}} title='Notificaciones'>
              <a class="nav-link nav-action text-center" href="#" id="notify">
                <img src={images.notify} />
              </a>
            </li>
            <li class="nav-item dropdown" style={{marginRight: '1rem'}}>
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={userValues.imgProfile} style={{marginRight: '1rem', borderRadius:'50%', maxHeight:'2rem'}} />
                {userValues.username}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link to='/profile' class="dropdown-item" href="#">Perfil</Link></li>
                <li><a class="dropdown-item" href="#">Configuración</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><Link to='/login' class="dropdown-item" href="#">Cerrar Sesión</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;

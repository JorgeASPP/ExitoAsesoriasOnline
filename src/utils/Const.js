const images = {
    logo: require('../images/exito.svg').default,
    standarIcon: require('../images/standar_icon.svg').default,
    singup: require('../images/sing-up.png'),
    login: require('../images/log-in.png'),
    tw: require('../images/twitter.png'),
    ch: require('../images/chrome.png'),
    fb: require('../images/fb.png'),
    banners: [
        {src: require('../images/carousel1.jpg')},
        {src: require('../images/carousel2.jpg')},
        {src: require('../images/carousel3.jpg')},
    ],
    prev: require('../images/prev.svg').default,
    next: require('../images/next.svg').default,
    search: require('../images/search.svg').default,
    chats: require('../images/chats.svg').default,
    notify: require('../images/notify.svg').default,
    bannerTutors: require('../images/banner-tutos.png'),
    post1: require('../images/post-1.png'),
    post2: require('../images/post-2.png'),
    sbjMaths: require('../images/maths.png'),
    sbjEnglish: require('../images/english.png'),
    sbjScience: require('../images/science.png'),
    bygm: require('../images/bygm-icon.png'),
    calendar: require('../images/calendar.png'),
    bannerAgenda: require('../images/banner-agenda.png'),
};

const  categories = {
    sciences: { 
        name: 'Ciencias', 
        icon: require('../images/cienciast.svg').default,
        subjects : [
            { 
                name: 'Biología',
                icon: require('../images/bilogía.svg').default,
            },
            {
                name: 'Física',
                icon: require('../images/fisica.svg').default,
            },
            {
                name: 'Química',
                icon: require('../images/quimica.svg').default,
            },
            {
                name: 'Geología',
                icon: require('../images/geologia.svg').default,
            },
            {
                name: 'Geografía',
                icon: require('../images/standar_icon.svg').default,
            },
            {
                name: 'Electricidad y magnetismo',
                icon: require('../images/standar_icon.svg').default,
            },
            {
                name: 'Psicología',
                icon: require('../images/standar_icon.svg').default,
            },
            {
                name: 'Sociología',
                icon: require('../images/standar_icon.svg').default,
            },
        ]
    },
    maths: { 
        name: 'Matemáticas', 
        icon: require('../images/matematicast.svg').default,
        subjects : [
            {
                name: 'Algebra',
                icon: require('../images/algebra.svg').default,
            },
            {
                name: 'calculo Diferencial',
                icon: require('../images/calculo.svg').default,
            },
            {
                name: 'Calculo Integral',
                icon: require('../images/calculointegral.svg').default,
            },
            {
                name: 'Estadistica',
                icon: require('../images/estadistica.svg').default,
            },
        ]
    },
    humanity: { 
        name: 'Humanidades', 
        icon: require('../images/arte.svg').default,
        subjects : [
            {
                name: 'Arte',
                icon: require('../images/arte.svg').default,
            },
            {
                name: 'Ética',
                icon: require('../images/etica.svg').default,
            },
            {
                name: 'Historia',
                icon: require('../images/historia.svg').default,
            },
            {
                name: 'Ética profesional',
                icon: require('../images/eticapro.svg').default,
            },
        ]
    },
    languages: { 
        name: 'Idiomas', 
        icon: require('../images/español.svg').default,
        subjects : [
            {
                name: 'Español',
                icon: require('../images/español.svg').default,
            },
            {
                name: 'Inglés',
                icon: require('../images/ingles.svg').default,
            },
            {
                name: 'Frances',
                icon: require('../images/frances.svg').default,
            },
            {
                name: 'Italiano',
                icon: require('../images/italiano.svg').default,
            },
        ]
    },
    programming: { 
        name: 'Programación', 
        icon: require('../images/prog.svg').default,
        subjects : [
            {
                name: 'Algoritmos',
                icon: require('../images/algoritmos.svg').default,
            },
            {
                name: 'Programación en C++',
                icon: require('../images/c++.svg').default,
            },
            {
                name: 'Base de Datos',
                icon: require('../images/basedatos.svg').default,
            },
            {
                name: 'Programación Cliente-Servidor',
                icon: require('../images/clienteservidor.svg').default,
            },
        ]
    },
}

const userValues = {
    username: 'Betty Idk',
    imgProfile: require('../images/betty.jpeg'),
    tutors: [
        { name: 'Aura Judith Paredes G.', },
        { name: 'Pablo Armando Vargas', },
        { name: 'Fernando Gamaliel G.', },
    ],
    subjects: [
        { name: 'Calculo Diferencial', },
        { name: 'Química', },
        { name: 'Inglés', },
    ],
}

const tutors = [
    {
        username: 'Yael Galvan Morales',
        imgProfile: require('../images/t-yael.png'),
        score: 5,
        specialty: 'Calculo Integral',
    },
    {
        username: 'Jose Luis Macario Gonzalez',
        imgProfile: require('../images/t-jose.png'),
        score: 5,
        specialty: 'Quimica',
    },
    {
        username: 'Gerardo de Jesús Medina Licona',
        imgProfile: require('../images/t-gera.png'),
        score: 5,
        specialty: 'Español',
    },
    {
        username: 'Beatriz Cruz Hernández',
        imgProfile: require('../images/t-betty.png'),
        score: 5,
        specialty: 'Inglés',
    },
    {
        username: 'Aura Judith Paredes Gonzalez',
        imgProfile: require('../images/t-judi.png'),
        score: 4,
        subject: 'Calculo Diferencial',
        academyLevel: 'Licenciatura en matemáticas',
    },
    {
        username: 'José Mendoza Hernández',
        imgProfile: require('../images/t-jose-m.png'),
        score: 4,
        subject: 'Historia',
        academyLevel: 'Licenciatura en lengua y literatura'
    },
    {
        username: 'Natasha Cruz Hernández',
        imgProfile: require('../images/t-nata.png'),
        score: 3,
        subject: 'Programación en C++',
        academyLevel: 'Ingeniero en Software'
    }
];

export { images, categories, userValues, tutors};
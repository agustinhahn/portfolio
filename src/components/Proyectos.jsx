
import { useState } from 'react';

const Proyectos = () =>{
  const TAGS = {
    VITE: { name: "icono vite", ruta: "/vite.svg" },
    REACT: { name: "icono react", ruta: "/react.svg" },
    REACTROUTER: { name: "icono react-router", ruta: "/reactrouter.svg" },
    BOOTSTRAP: { name: "icono bootstrap", ruta: "/bootstrap.svg" },
    REACTNATIVE: { name: "icono reactnative", ruta: "/reactnative.svg" },
    EXPO: { name: "icono expo", ruta: "/expo.svg" },
    NODE: { name: "icono node", ruta: "/node.svg" },
    JS: { name: "icono js", ruta: "/js.svg" },
    VERCEL: { name: "icono VERCEL", ruta: "/vercel.svg" },
    BASH: { name: "icono BASH", ruta: "/bash.svg" },
    PYTHON: { name: "icono PYTHON", ruta: "/python.svg" },
    CSS: { name: "icono css", ruta: "/css.svg" },
    NOTION: { name: "icono notion", ruta: "/notion.svg" },
  };
  
  const PROJECTS = [
    {
      idItem: 1,
      title: "Escape room",
      description:
        "Proyecto freelance - Consiste en una web hecha a medida para un negocio de la ciudad de Rosario. Cuenta con interface interactiva, reserva de turnos y panel admin.",
      details:
        "Este proyecto fue realizado junto con un desarrollador backend (JAVA + MySql) y una diseñadora grafica.",
      tecnologies: "",
      link: "https://example.com/weather-app",
      github: "https://github.com/yourusername/weather-app",
      image: "/fotosProyectos/escaperoom/foto1.png",
      image2: "/fotosProyectos/escaperoom/foto2.png",
      image3: "/fotosProyectos/escaperoom/foto3.png",
      tags: [
        TAGS.REACT,
        TAGS.CSS,
        TAGS.VITE,
        TAGS.REACTROUTER,
        TAGS.BOOTSTRAP,
        TAGS.VERCEL,
      ],
    },
    {
      idItem: 2,
      title: "Respuestas rapidas",
      description:
        "Solucion para empresa proveedora de internet que requeria almacenar y acceder de manera rapida a informacion y respuestas pre-establecidas para sus usuarios",
      details: "",
      tecnologies: "",
      link: "https://example.com/personal-blog",
      github: "https://github.com/yourusername/personal-blog",
      image: "https://via.placeholder.com/300x200",
      image2: "https://via.placeholder.com/300x200",
      image3: "https://via.placeholder.com/300x200",
      tags: [TAGS.REACT, TAGS.CSS , TAGS.VITE, TAGS.VERCEL],
    },
    {
      idItem: 3,
      title: "Contador de truco",
      description:
        "Proyecto personal desarrollado en react native con la simple funcion de llevar el recuento de puntos en un partido de truco. Se implementaron diseños a medida y sonidos alusivos a un grupo en concreto de personas.",
      details: "Este proyecto fue realizado junto con una diseñadora grafica.",
      tecnologies: "a",
      link: "https://example.com/todo-app",
      github: "https://github.com/yourusername/todo-app",
      image: "https://via.placeholder.com/300x200",
      image2: "https://via.placeholder.com/300x200",
      image3: "https://via.placeholder.com/300x200",
      tags: [TAGS.REACTNATIVE, TAGS.EXPO, TAGS.VITE],
    },
    {
      idItem: 4,
      title: "Agenda salud",
      description:
        "Proyecto realizado en plataforma NO-COUNTRY con el objetivo de emular una web para gestion de medicina privada en la que se reserva turnos segun especialidad y los medicos pueden administrar sus agendas.",
      details:
        "La importancia en este proyecto recae en que fue con un grupo multidisciplinario el cual se conformaba por 1 ux, 4 backend, 4 front y un product manager. Aqui adquiri herramientas como JIRA y NOTION para la organizacion.",
      tecnologies: "",
      link: "https://example.com/todo-app",
      github: "https://github.com/yourusername/todo-app",
      image: "https://via.placeholder.com/300x200",
      image2: "https://via.placeholder.com/300x200",
      image3: "https://via.placeholder.com/300x200",
      tags: [TAGS.REACT, TAGS.CSS , TAGS.NOTION, TAGS.VITE],
    },
    {
      idItem: 5,
      title: "Script Los",
      description:
        "Solucion para empresa proveedora de internet que requeria informes via email tras cierta incidencia tecnica relacionada con FTTH.",
      details: "Desarrollado con NODEjs y utilizado en varios ISP locales.",
      tecnologies: "",
      link: "https://example.com/todo-app",
      github: "https://github.com/yourusername/todo-app",
      image: "https://via.placeholder.com/300x200",
      image2: "https://via.placeholder.com/300x200",
      image3: "https://via.placeholder.com/300x200",
      tags: [TAGS.JS, TAGS.NODE],
    },
    {
      idItem: 6,
      title: "Fast Ip",
      description:
        "Solucion para tecnicos de redes, en la que se facilita una interfaz grafica para testear o cambiar IP estatica en la computadora y asi agilizar procesos.",
      details:
        "Desarrollado con python aunque luego se llevo a una version mas simple en bash.",
      tecnologies: "",
      link: "https://example.com/todo-app",
      github: "https://github.com/yourusername/todo-app",
      image: "https://via.placeholder.com/300x200",
      image2: "https://via.placeholder.com/300x200",
      image3: "https://via.placeholder.com/300x200",
      tags: [TAGS.PYTHON, TAGS.BASH],
    },
    {
      idItem: 7,
      title: "Tablero de procesos",
      description:
        "Proyecto personal creado con el fin de ordenar ciertas tareas diarias de una manera grafica y sencilla.",
      details:
        "Este programa utiliza localStorage por lo que los cambios persisten en el ordenador del usuario.",
      tecnologies: "",
      link: "https://example.com/todo-app",
      github: "https://github.com/yourusername/todo-app",
      image: "https://via.placeholder.com/300x200",
      image2: "https://via.placeholder.com/300x200",
      image3: "https://via.placeholder.com/300x200",
      tags: [TAGS.REACT, TAGS.CSS , TAGS.VITE, TAGS.VERCEL],
    },

  ];
  
  const [showFirstImage, setShowFirstImage] = useState(true);
  
  return(
    <>
  {PROJECTS.map(({ title, description, tags, details, tecnologies, image, image2, image3,index }) => (
    <article class="mb-8" key={index}>
      <div class="flex">
        <h3 class="text-2xl font-semibold text-yellow-200 mb-2">{title}</h3>
      </div>
      <ul class="flex gap-x-4 flex-row mb-5 mt-3">
        {tags.map((tag, index) => (
          <li key={index} class="transition-all duration-300 ease-in-out transform hover:scale-125 hover:filter hover:brightness-125">
            <img class="size-10" src={tag.ruta} alt={tag.name} />
          </li>
        ))}
      </ul>
      <p class="text-md mb-4 text-pretty">{description}</p>
      <p class="text-md mb-4 text-pretty">{details}</p>
      <p class="text-md mb-4 text-pretty">{tecnologies}</p>
      <div class="flex gap-8">
        {/* Condicional para mostrar la primera imagen */}
        {showFirstImage && (
          <img
            class="transition-all duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-150"
            style={{ width: '540px' }}
            src={image}
            alt={`captura de pantalla del proyecto ${title}`}
          />
        )}
        <img
          class="transition-all duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-150"
          style={{ width: '540px' }}
          src={image2}
          alt={`captura de pantalla del proyecto ${title}`}
        />
        <img
          class="transition-all duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-150"
          style={{ width: '540px' , display:'none'}}
          src={image3}
          alt={`captura de pantalla del proyecto ${title}`}
        />
        <button
          onClick={() => setShowFirstImage(!showFirstImage)}
          style={{ backgroundColor: "red", height: "30px" }}
        >
          probando
        </button>
      </div>
    </article>
  ))}</>)
}

export default Proyectos
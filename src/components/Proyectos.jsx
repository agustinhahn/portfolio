
import { useState } from 'react';
import PngFlotante from './PngFlotante';
import "./proyectos.css"

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
    REDUX: {name:'icono redux', ruta:'/redux.svg'}
  };
  
  const PROJECTS = [
    {
      idItem: 1,
      title: "Escape room",
      description:
        "Proyecto freelance - Consiste en una web hecha a medida para un negocio de la ciudad de Rosario. Cuenta con interface interactiva, reserva de turnos y panel administrador que gestiona: turnos dinamicos por fecha, promociones/descuentos, visualizacion y obtencion de metricas, etc.",
      details:
        "Este proyecto fue realizado junto con Lautaro Favoni - backend (JAVA + MySql) y Celina Bruno - diseñadora grafica.",
      tecnologies: "",
      link: "https://www.lockandkey.com.ar/",
      github: "https://github.com/yourusername/weather-app",
      images:["/fotosProyectos/escaperoom/foto1.png", "/fotosProyectos/escaperoom/foto2.png", "/fotosProyectos/escaperoom/foto3.png", "/fotosProyectos/escaperoom/foto4.png"],      tags: [
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
        "Solucion para empresa proveedora de internet que requeria almacenar y acceder de manera rapida a informacion y respuestas pre-establecidas que se guardan en el copiapapeles de la PC con un solo click sobre el titulo, ademas del boton '+' que sirve para ver el contenido.",
      details: "",
      tecnologies: "",
      link: "https://respuestas-rapidas.vercel.app/",
      github: "https://github.com/yourusername/personal-blog",
      images:["/fotosProyectos/respuestasrapidas/foto1.png", "/fotosProyectos/respuestasrapidas/foto2.png"],
      tags: [TAGS.REACT, TAGS.CSS , TAGS.VITE, TAGS.VERCEL],
    },
    {
      idItem: 3,
      title: "Contador de truco",
      description:
        "Proyecto personal desarrollado en react native con la simple funcion de llevar el recuento de puntos en un partido de truco. Se implementaron diseños a medida y sonidos alusivos a un grupo en concreto de personas.",
      details: "Este proyecto fue realizado junto con una diseñadora grafica.",
      tecnologies: "",
      link: "https://github.com/agustinhahn/contadorTrucoRN",
      github: "https://github.com/yourusername/todo-app",
      images:["/fotosProyectos/truco/foto1.png", "/fotosProyectos/truco/foto2.png"],
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
      link: "",
      github: "https://github.com/yourusername/todo-app",
      images:["/fotosProyectos/agendasalud/foto1.png", "/fotosProyectos/agendasalud/foto2.png"],
      tags: [TAGS.REACT, TAGS.CSS ,TAGS.REDUX ,  TAGS.NOTION, TAGS.VITE],
    },
    {
      idItem: 5,
      title: "Script Los",
      description:
        "Solucion para empresa proveedora de internet que requeria informes via email tras cierta incidencia tecnica relacionada con FTTH.",
      details: "Desarrollado con NODEjs y utilizado en varios ISP locales.",
      tecnologies: "",
      link: "https://github.com/agustinhahn/scriptlost",
      github: "https://github.com/yourusername/todo-app",
      images:[""],
      tags: [TAGS.JS, TAGS.NODE],
    },
    {
      idItem: 6,
      title: "Easy Ip",
      description:
        "Solucion para tecnicos de redes, en la que se facilita una interfaz grafica para testear o cambiar IP estatica en la computadora y asi agilizar procesos.",
      details:
        "Desarrollado con python aunque luego se llevo a una version mas simple en bash.",
      tecnologies: "",
      link: "",
      github: "https://github.com/yourusername/todo-app",
      images:["/fotosProyectos/easyip/foto1.png", "/fotosProyectos/easyip/foto2.png"],
      tags: [TAGS.PYTHON, TAGS.BASH],
    },
    {
      idItem: 7,
      title: "Tablero de procesos",
      description:
        "Proyecto personal creado con el fin de ordenar ciertas tareas diarias de una manera grafica y sencilla.",
      details:
        "Este programa utiliza localStorage por lo que los cambios persisten en el ordenador del usuario y drag and drop en sus componentes para una experiencia rapida e intuitiva.",
      tecnologies: "",
      link: "https://tabla-de-procesos.vercel.app/",
      github: "https://github.com/yourusername/todo-app",
      images:["/fotosProyectos/tabla/foto1.png", "/fotosProyectos/tabla/foto2.png"],
      tags: [TAGS.REACT, TAGS.CSS , TAGS.VITE, TAGS.VERCEL],
    },

  ];
  // Estado para controlar la cantidad de proyectos mostrados
  const [showAll, setShowAll] = useState(false);

  // Función para alternar entre mostrar todos o solo 4 proyectos
  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <>
      {PROJECTS.slice(0, showAll ? PROJECTS.length : 4).map(({ title, description, tags, details, tecnologies, images, idItem, link }) => (
        <article className="mb-8 mt-8 max-w-full" key={idItem}>
          <div className="flex">
            <a className="text-2xl font-semibold text-yellow-200 mb-2 transition-all duration-300 ease-in-out transform hover:scale-110 cursor-pointer" href={link} target='_blank'>{title}</a>
          </div>
          <ul className="flex gap-x-4 flex-row mb-5 mt-3">
            {tags.map((tag, index) => (
              <li key={index} className="transition-all duration-300 ease-in-out transform hover:scale-125 hover:filter hover:brightness-125">
                <img className="size-10" src={tag.ruta} alt={tag.name} />
              </li>
            ))}
          </ul>
          <p className="text-md mb-4 text-pretty"><span className='text-yellow-200 font-bold'>Descripcion: </span>{description}</p>
          {
            details? 
          <p className="text-md mb-4 text-pretty"><span className='text-yellow-200 font-bold'>Detalles adicionales: </span>{details}</p> : null
          }
          <p className="text-md mb-4 text-pretty">{tecnologies}</p>
          <PngFlotante images={images} />
        </article>
      ))}
      <div className='flex justify-center mt-6'>
        <button
          onClick={toggleShowAll}
          className="text-yellow-200 hover:text-yellow-300"
        >
          {showAll ? "Ver menos proyectos" : "Ver más proyectos"}
        </button>
      </div>

    </>)
}




export default Proyectos

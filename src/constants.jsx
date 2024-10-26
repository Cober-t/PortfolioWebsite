// # CONSTANTS
const pathGameEngine = "src/assets/toolGameEngine.json"
const pathPython = "src/assets/toolPython.json"
const pathUnity = "src/assets/toolUnity.json"


// # ICONS
import logo from "$iconsAndCV/icons/logo.svg"
import menu from "$iconsAndCV/icons/menu.svg"
import close from "$iconsAndCV/icons/close.svg"
import downloadCV from "$iconsAndCV/alicia.pdf"


const ScrollTo = ({id, text, props}) =>
{
    return (
        <>
        <button className={props}
        onClick={()=>{
            const element = document.getElementById(id)
            element?.scrollIntoView({behavior: "smooth"})
        }}>{text}</button>
        </>
    )
}

const hero = [
    {
        name:"Title",
        textES:"Hola, soy",
        textEN:"Hello, I'm"
    },
    {
        name:"Description",
        textES:<div>Durante años he estudiado la programación de gráficos, 
        desarrollando incluso mi propio motor de videojuegos. 
        Mi 
        <ScrollTo id="Experience" text=" experiencia laboral " props={"text-accent hover:text-darkOrange whitespace-pre"}/>
        me ha llevado a trabajar con motores como Unreal Engine o Unity 
        y he desarrollado plugins en Maya y Blender entre otros, 
        lo que me ha aportado un alto nivel de conocimiento en estos programas y en sus lenguajes. 
        Día a día continuo aprendiendo a través de
        <ScrollTo id="PersonalProjects" text=" projectos personales." props={"text-accent hover:text-darkOrange whitespace-pre"}/>
        </div>,
        textEN:"Description about me"
    }
]

const links = [
    {
        nameES:"Inicio",
        nameEN:"Home",
        path: "/",
    },
    {
        nameES:"Experiencia",
        nameEN:"Experience",
        path: "/experience",
    },
    {
        nameES:"Proyectos Personales",
        nameEN:"Personal Projects",
        path: "/projects",
    },
    {
        nameES:"Contacto",
        nameEN:"Contact",
        path: "/contact",
    }
]

import { BsWindowFullscreen  } from "react-icons/bs"
import { BiConversation } from "react-icons/bi"

const projects = [
    [
        {
            num: '1/8',
            titleES: "Core",
            titleEN: "Core",
            descriptionES: <div>A la hora de comenzar un proyecto como es la programación de un motor de videojuegos 
            existen una serie de características fundamentales que debemos tener en cuenta,
            y que facilitan <span className="font-nodeDescription font-bold italic text-accent/60"> la creación de cualquier tipo de juego</span>. A continuación, explicaré 
            su desarrollo apoyándome en proyectos terminados.
            </div>,
            descriptionEN: "TODO",
            stackES: [{name: "C++"}, {name: "Multithreading"}, {name: "OpenGL"}],
            stackEN: [{name: "C++"}, {name: "Multithreading"}, {name: "OpenGL"}],
            image: "/myGameEngine/coreCode.png",
            icon: undefined,
            github: "https://github.com/Cober-t/GameEngine/tree/Core",
        },
        {
            num: '2/8',
            titleES: "Configuración del proyecto y API para la ventana",
            titleEN: "TODO",
            descriptionES: "Un conocimiento sólido en configuración de proyectos \
            facilitará enormemente añadir librerías y la correcta compilación en \
            diferentes entornos. Es importante también la programación de una capa \
            que permita hacer funcionar la ventana y la interacción con ella \
            a través de nuestros periféricos en cualquier sistema operativo.",
            descriptionEN: "TODO",
            stackES: [{name: "Premake"}, {name: "Cmake"}, {name: "glfw"}],
            stackEN: [{name: "Premake"}, {name: "Cmake"}, {name: "glfw"}],
            image: undefined,
            icon: <BsWindowFullscreen className="w-full h-[20vh] md:h-[50vh] xl:h-full" />,
            github: "https://github.com/Cober-t/GameEngine/tree/Core",
        },
        {
            num: '3/8',
            titleES: "Sistema de 'logging'",
            titleEN: "TODO",
            descriptionES: "Imprescindible para comprobar si el funcionamiento es correcto \
            y poder ver la respuesta de eventos y de nuestras interacciones con el motor. \
            Los mensajes se almacenan y se eliminan de manera eficiente en memoria.",
            descriptionEN: "TODO",
            stackES: [{name: "Debug"}, {name: "spdlog"}],
            stackEN: [{name: "Debug"}, {name: "spdlog"}],
            image: "/myGameEngine/loggingSystem.png",
            icon: undefined,
            github: "https://github.com/Cober-t/GameEngine/tree/Core",
        },
        {
            num: '4/8',
            titleES: "Editor",
            titleEN: "Editor",
            descriptionES: "Un editor visual para el motor supone una drástica mejora, permitiendo \
            la creación de herramientas que aceleran y facilitan el desarrollo de videjuegos.",
            descriptionEN: "TODO",
            stackES: [{name: "ImGui"}, {name: "Immediate Mode"}],
            stackEN: [{name: "ImGui"}, {name: "Immediate Mode"}],
            image: "/myGameEngine/editor.png",
            icon: undefined,
            github: "https://github.com/Cober-t/GameEngine/tree/Core",
        },
        {
            num: '5/8',
            titleES: "API para los gráficos",
            titleEN: "TODO",
            descriptionES: "Al igual que sucede con la ventana, es importante crear una capa que nos permita \
            mostrar gráficos en ella. Cada sistema operativo gestiona los gráficos de diferente forma, pero el motor \
            debe estar preparado para que no sea dificil añadir más capacidades gráficas en un futuro. \
            El motor usa OpenGL porque funciona en un gran número de plataformas diferentes.",
            descriptionEN: "TODO",
            stackES: [{name: "OpenGL"}],
            stackEN: [{name: "OpenGL"}],
            image: "/myGameEngine/graficos.png",
            icon: undefined,
            github: "https://github.com/Cober-t/GameEngine/tree/Core",
        },
        {
            num: '6/8',
            titleES: "Escena de juego y Sistema de Entidades",
            titleEN: "TODO",
            descriptionES: "A la hora de diseñar la manera en la que el motor va a gestionar los elementos del juego \
            se ha optado por un sistema de entidades. Todo elemento en el juego (entidad) va a tener una lista \
            de componentes: posición, físicas, texturas, etc. que a su vez forman sistemas propios. \
            Una escena del juego recorre estos sistemas y todas las entidades que pertencen a estos, \
            haciendo que el procesamiento sea muy rápido al evitar repeticiones innecesarias y búsquedas en memoria muy largas.",
            descriptionEN: "TODO",
            stackES: [{name: "entt"}, {name: "Gestión de memoria"}, {name: "Estructuras de datos"}],
            stackEN: [{name: "entt"}, {name: "Memory Management"}, {name: "Data Structures"}],
            image: "/myGameEngine/sceneAndEntities.png",
            icon: undefined,
            github: "https://github.com/Cober-t/GameEngine/tree/Core",
        },
        {
            num: '7/8',
            titleES: "Scripting nativo",
            titleEN: "TODO",
            descriptionES: "Gracias a una correcta configuración del proyecto y a las librerías dinámicas, con este sistema \
            podremos programar la lógica del videojuego sin tener que recompilar todo el motor, pudiendo hacer \
            cambios y desarrollar el juego mientras el motor está en ejecución. Aunque no es una característica imprescindible \
            sí que facilita enormemente el desarrollo, y es un sistema que podemos encontrar en todos los motores populares.",
            descriptionEN: "TODO",
            stackES: [{name: "C++"}, {name: "DLL"}, {name: "Scripting Nativo"}],
            stackEN: [{name: "C++"}, {name: "DLL"}, {name: "Native Scripting"}],
            image: "/myGameEngine/scriptingNativo.png",
            icon: undefined,
            github: "https://github.com/Cober-t/GameEngine/tree/Core",
        },
        {
            num: '8/8',
            titleES: "Launcher para el motor y proyectos",
            titleEN: "TODO",
            descriptionES: "Al igual que otros populares motores de videojuegos, un launcher visual facilita la interacción \
            con el motor, sus posibles versiones y la creación y edición de proyectos en desarrollo",
            descriptionEN: "TODO",
            stackES: [{name: "Qt"}, {name: "Python"}],
            stackEN: [{name: "Qt"}, {name: "Python"}],
            image: "/myGameEngine/launcherEngine.png",
            icon: undefined,
            github: "https://github.com/Cober-t/GameEngine/tree/Core",
        },
        {
            num: '1/3',
            titleES: "Pong",
            titleEN: "Pong",
            descriptionES: "Para poder desarrollar este primer proyecto era necesario implementar nuevas funcionalidades en el motor \
            que se usarán como base para las siguientes. Estas son: simulación de físicas en 2D para la colisión de \
            la pelota con las palas de los jugadores, un sistema de audio que permita reproducir diferentes sonidos cuando \
            ciertos eventos ocurran y un sistema de cámaras que permita modificar fácilmente aspectos como la resolución, el zoom, \
            la posición y ángulo de la cámara o la relación de aspecto.",
            descriptionEN: "TODO",
            stackES: [{name: "box2d"}, {name: "miniaudio"}, {name: "Cámara virtual"}],
            stackEN: [{name: "box2d"}, {name: "miniaudio"}, {name: "Virtual Camera"}],
            image: "/myGameEngine/animation/pong.gif",
            icon: undefined,
            github: "https://github.com/Cober-t/GameEngine/tree/Core",
        },
        {
            num: '2/3',
            titleES: "Flappy Bird",
            titleEN: "Flappy Bird",
            descriptionES: "En este proyecto se implementa la carga de texturas, con las que a su vez \
            podremos dibujar texto en pantalla. La serialización de datos, que permite guardar y cargar escenas, \
            imprescindible para la persistencia de datos en un videojuego y para evitar empezar desde una escena vacía \
            en el desarrollo de un proyecto. Otra sustancial mejora que nos permite la serialización de datos es \
            la creción de 'prefabs', entidades completas que podremos guardar, \
            editar o duplicar, siempre atendiendo al uso de memoria y a las estructuras de datos.",
            descriptionEN: "TODO",
            stackES: [{name: "Texturas y texto"}, {name: "Serialización de datos"}, {name: "Prefabs"}],
            stackEN: [{name: "Textures and Text"}, {name: "Data Serialization"}, {name: "Prefabs"}],
            image: "/myGameEngine/animation/flappyBird.gif",
            icon: undefined,
            github: "https://github.com/Cober-t/GameEngine/tree/Core",
        },
        {
            num: '3/3',
            titleES: "Breakout",
            titleEN: "Breakout",
            descriptionES: "Este proyecto hace un uso intensivo de las texturas, y para gestionarlas de manera correcta existen técnicas \
            muy utilizadas como la del 'atlas de textura': una única textura agrupará todas las que se usen en el juego, \
            disponiendo de ellas a través de índices o coordenadas. Todas se dibujan a la vez, ahorrando procesamiento \
            y memoria gráfica, lo que nos permite desarrollar herramientas como el sistema de partículas, \
            con el que podremos editar los atributos de las miles de texturas que se van a dibujar",
            descriptionEN: "TODO",
            stackES: [{name: "Atlas de texturas"}, {name: "Sistema de partículas"}, {name: "Flujo jugable"}],
            stackEN: [{name: "Texture Atlases"}, {name: "Particle Systeme"}, {name: "Game Flow"}],
            image: "/myGameEngine/animation/breakout.gif",
            icon: undefined,
            github: "https://github.com/Cober-t/GameEngine/tree/Core",
        },
    ],
    [
        {
            num: '1/4',
            titleES: "Validador de modelos y animaciones para importar a Unreal Engine",
            titleEN: "TODO",
            descriptionES: "Durante mi estancia en Pendulo Studios trabajé en herramientas encargadas de comprobar \
            que los modelos y animaciones provenientes del equipo de arte cumplieran los requisitos necesarios para su correcta \
            exportación al motor Unreal Engine. Con el desarrollo de plugins internos se consigue validar todo tipo condiciones que deben \
            cumplir los atributos de los modelos, animaciones y cámaras, comprobando que se ajusten a nuestras necesidades. \
            Gracias al framework Qt dotamos a estas herramientas de apartado gráfico, permitiendo que todo el mundo \
            pueda entender y usar estas herramientas.\n\
            Debido a restricciones del contrato de confidencialdiad, el proyecto no se aloja en un repositorio público y la imagen solo es \
            un ejemplo del proyecto.",
            descriptionEN: "TODO",
            stackES: [{name: "Qt"}, {name: "Pyside"}, {name: "MEL"}, {name: "Maya"}, {name: "Blender"}],
            stackEN: [{name: "Qt"}, {name: "Pyside"}, {name: "MEL"}, {name: "Maya"}, {name: "Blender"}],
            image: "/python/maya.png",
            icon: undefined,
            github: undefined,
        },
        {
            num: '2/4',
            titleES: "Validador de nomenclaturas",
            titleEN: "TODO",
            descriptionES: "En grandes proyectos donde los archivos y las carpetas se cuentan por miles, es importante mantenerlos organizados \
            y con una nomenclatura precisa. Esta herramienta comprueba muy rápidamente y con una respuesta clara los posibles archivos \
            que no cumplan con la nomenclatura exigida y su ruta. Esta guía de nomenclatura es fácilmente modificable a través de un json, \
            lo que permite introducir estas reglas, diferenciandolas para cada nivel de subcarpeta e incluso para cada tipo de archivo dentro de estas.",
            descriptionEN: "TODO",
            stackES: [{name: "Expresiones regulares (regex)"}, {name: "Json"}],
            stackEN: [{name: "Expresiones regulares (regex)"}, {name: "Json"}],
            image: "/python/validadorNomenclaturas.png",
            icon: undefined,
            github: undefined,
        },
        {
            num: '3/4',
            titleES: "Gestión de Apps a través de Telegram",
            titleEN: "TODO",
            descriptionES: "Herramienta que gestiona todas las aplicaciones que uso en mi vida diaria. Haciendo uso de una Raspberry Pi y un bot de Telegram \
            se ejecuta todo el tiempo un código que recibe e interpreta los mensajes que mandemos a este bot. A través de comandos determinados \
            se crean, modifican o eliminan tareas en Todoist. En Notion podemos gestionar bases de datos como listas de la compra, gastos o multimedia, \
            ya que esta herramienta interpreta video, imagen y convierte archivos de voz en texto. También es capaz de crear notas de texto en formato \
            'Markdown' que usará la base de datos de Obsidian para crear una nueva nota con el estilo y texto que le indiquemos. Por último, encender \
            o apagar un ordenador desde cualquier lugar, muy útil para conexiones a través de una VPN que también gestiona esta Raspberry Pi.",
            descriptionEN: "TODO",
            stackES: [{name: "RaspberryPi"}, {name: "Todoist"}, {name: "Notion"}, {name: "Obsidian"}],
            stackEN: [{name: "RaspberryPi"}, {name: "Todoist"}, {name: "Notion"}, {name: "Obsidian"}],
            image: "/python/automatizeBot.png",
            icon: undefined,
            github: "https://github.com/Cober-t/automaticeBotTelegram",
        },
        {
            num: '4/4',
            titleES: "Launcher para proyectos del motor de videojuegos",
            titleEN: "TODO",
            descriptionES: "Herramienta de gestión de los proyectos y versiones de mi propio motor de videojuegos. Con la ayuda de un archivo json fácilmente editable \
            el launcher lee toda la carpeta de proyectos con miniaturas incluidas y, gracias a Qt, nos lo muestra todo visualmente. Al crear un nuevo proyecto no solo \
            actualiza el json si no que también prepara todo el entorno de desarrollo, crea las carpetas y archivos con el código necesario poder trabajar con el motor \
            nada más se haya abierto, al igual que funcionan otros populares motores como Unreal Engine, Unity o Godot.",
            descriptionEN: "TODO",
            stackES: [{name: "Qt"}, {name: "UI"}],
            stackEN: [{name: "Qt"}, {name: "UI"}],
            image: "/myGameEngine/launcherEngine.png",
            icon: undefined,
            github: "https://github.com/Cober-t/CoberEngineProjects",
        },
    ],
    [
        {
            num: '1/2',
            titleES: "Generador de terreno aleatorio",
            descriptionES: "Haciendo uso del algoritmo 'Perlin Noise' se desarrolló este generador de terreno para juegos \
            del tipo RTS (Real-Time Strategy). A través de la interfaz de Unity se pueden modificar todas las variables \
            de este algoritmo y generar un terreno con un solo click pudiendo ver el resultado rápidamente en tiempo real. \
            También se pretendía que, una vez generado este terreno, fuese totalmente personalizable, tanto en el arte como en \
            cuanto a la lógica del videojuego, pudiendo añadir tipos de terreno, asignar imágenes a estos o incluso \
            añadir atributos como vida si se tratase de un enemigo, dificultad de terreno para ralentizar al jugador, etc. ",
            descriptionEN: "TODO",
            stackES: [{name: "C#"}, {name: "Perlin Noise"}],
            stackEN: [{name: "C#"}, {name: "Perlin Noise"}],
            image: "/unity/iaia2.gif",
            icon: undefined,
            github: "https://github.com/Cober22/IAIA2",
        },
        {
            num: '2/2',
            titleES: "Sistema de grid",
            titleEN: "Grid System",
            descriptionES: "Herramienta desarrollada haciendo uso de las capacidades que nos da Unity para programar y modificar su editor. \
            Permite dibujar diferentes tipos de grid en la escena de Unity, personalizarlo con parametros como el tamaño de celda o su posición en el mundo. \
            Después permite ajustar la posición de los objetos que tengamos seleccionados y que esten dentro del grid.",
            descriptionEN: "TODO",
            stackES: [{name: "C#"}, {name: "Editor de Unity"}],
            stackEN: [{name: "C#"}, {name: "Unity Editor"}],
            image: "/unity/gridSystem.gif",
            icon: <BiConversation className="w-full h-[20vh] md:h-[50vh] xl:h-full"/>,
            github: undefined,
        },
    ],
]
const projectsNameES = ["Mi Motor de Videojugos", "Python", "Unity"]
const projectsNameEN = ["My Own Game Engine", "Python", "Unity"]
const tabsES = ["Experiencia", "Estudios", "Habilidades", "Sobre mi"]
const tabsEN = ["Experience", "Studies", "Skills", "About me"]

const experience = {
    icon: "",
    titleES: "Mi Experiencia",
    titleEN: "My Experience",
    descriptionES: "",
    descriptionEN: "",
    items: [
    {
        companyES: "Pendulo Studios",
        companyEN: "Pendulo Studios",
        positionES: "Tools & IT",
        positionEN: "Tools & IT",
        durationES: "Marzo 2023 - Abril 2024",
        durationEN: "TODO",
        descriptionES: "TODO",
        descriptionEN : "Throughout my time at Pendulo Studios I learned how to work with a large team, \
        how to support systems that are part of a complex workflow and how to analyse and improve \
        these systems to make them easier to use and develop. I also improved my skills as a programmer \
        when making tools for Maya, Blender, Unreal Engine or Unity, using the languages \
        Python, C++ and C# respectively.",
        image: "./tintin.jpg",
        link: "https://store.steampowered.com/app/2125090/Tintin_Reporter__Los_Cigarros_del_Faraon/?l=spanish",
    },
    {
        companyES: "FIRESCALE Studios",
        companyEN: "FIRESCALE Studios",
        positionES: "VFX & UI Designer (prácticas)",
        positionEN: "VFX & UI designer (internship)",
        durationES: "Febrero 2022 - Abril 2022",
        durationEN: "TODO",
        descriptionEN: "TODO",
        descriptionES: "TODO",
        image: "./riseOfTheOverlords.jpg",
        link: "https://store.steampowered.com/app/1162140/Rise_Of_The_Overlords/",
    },
    {
        companyES: "La Tribuna de Toledo",
        companyEN: "TODO",
        positionES: "Maquetación",
        positionEN: "TODO",
        durationES: "Junio 2018 - Septiembre 2018",
        durationEN: "TODO",
        descriptionEN: "",
        descriptionES: "",
        image: undefined,
        link: "",
    },
    ],
}

const education = {

    icon: "",
    title: "Mis Estudios",
    description: "",
    items: [
    {
        institutionES: "Universitat Jaume I",
        institutionEN: "Universitat Jaume I",
        degreeES: "Diseño y Desarrollo de Videojuegos",
        degreeEN: "Design and Development of Videogames",
        duration: "2018-2022"
    },
    {
        institutionES: "Escuela de Artes de Toledo",
        institutionEN: "TODO",
        degreeES: "Ilustración",
        degreeEN: "Illustration",
        duration: "2016-2018"
    },
    {
        institutionES: "María Zambrano I.E.S.",
        degreeES: "Bachillerato de Ciencias y Tecnologías",
        degreeEN: "TODO",
        duration: "2014-2016"
    },
    ],
}

import { FaReact, FaPython } from "react-icons/fa"
import { BsUnity } from "react-icons/bs"
import { SiAndroidstudio, SiAutodeskmaya, SiCsharp, SiCplusplus, SiDotnet,
    SiGodotengine, SiKotlin, SiQt, SiUnrealengine } from "react-icons/si"
import { DiIllustrator, DiJavascript, DiPhotoshop } from "react-icons/di"
import { BiLogoBlender } from "react-icons/bi"


const levelES = ["Principiante", "Intermedio", "Avanzado"]
const levelEN = ["Beginner", "Intermediate", "Advanced"]
const skills = {
    icon: "",
    titleES: "Mis Habilidades",
    titleEN: "My Skills",
    descriptionES: "",
    descriptionEN: "",
    languages: [
        {
            icon: <FaPython />,
            name: "Python",
            levelES: levelES[2],
            levelEN: levelEN[2],
        },
        {
            icon: <SiCplusplus  />,
            name: "C++",
            levelES: levelES[2],
            levelEN: levelEN[2],
        },
        {
            icon: <SiCsharp />,
            name: "C#",
            levelES: levelES[1],
            levelEN: levelEN[1],
        },
        {
            icon: <DiJavascript />,
            name: "JavaScript",
            levelES: levelES[0],
            levelEN: levelEN[0],
        },
        {
            icon: <SiKotlin />,
            name: "Kotlin",
            levelES: levelES[0],
            levelEN: levelEN[0],
        }
    ],
    frameworks: [
        {
            icon: <FaReact />,
            name: "React Native",
            levelES: levelES[2],
            levelEN: levelEN[2],
        },
        {
            icon: <SiQt />,
            name: "Qt",
            levelES: levelES[1],
            levelEN: levelEN[1],
        },
        {
            icon: <SiDotnet />,
            name: ".Net",
            levelES: levelES[1],
            levelEN: levelEN[1],
        }
    ],
    softwares: [
        {
            icon: <SiUnrealengine />,
            name: "Unreal Engine",
            levelES: levelES[2],
            levelEN: levelEN[2],
        },
        {
            icon: <SiGodotengine />,
            name: "Godot",
            levelES: levelES[1],
            levelEN: levelEN[1],
        },
        {
            icon: <BsUnity />,
            name: "Unity",
            levelES: levelES[2],
            levelEN: levelEN[2],
        },
        {
            icon: <DiPhotoshop />,
            name: "Photoshop",
            levelES: levelES[1],
            levelEN: levelEN[1],
        },
        {
            icon: <DiIllustrator />,
            name: "Illustrator",
            levelES: levelES[1],
            levelEN: levelEN[1],
        },
        {
            icon: <SiAndroidstudio />,
            name: "Android Studio",
            levelES: levelES[1],
            levelEN: levelEN[1],
        },
        {
            icon: <SiAutodeskmaya />,
            name: "Maya",
            levelES: levelES[1],
            levelEN: levelEN[1],
        },
        {
            icon: <BiLogoBlender />,
            name: "Blender",
            levelES: levelES[2],
            levelEN: levelEN[2],
        },
    ]
}

const about = {
    icon: "",
    titleES: "Sobre mi",
    titleEN: "About me",
    descriptionES: "Me considero una persona versátil y \
    busco siempre la crítica porque considero que es la mejor forma de mejorar.\
    Me encantan los nuevos retos, los afronto siempre con ganas de aprender y \
    de hacerlo lo mejor posible.",
    descriptionEN: "TODO",
    items: [
        {
            fieldNameES: "Nombre",
            fieldValueES: "Jorge Tejado López",
            fieldNameEN: "Name",
            fieldValueEN: "Jorge Tejado López",
        },
        {
            fieldNameES: "Idiomas",
            fieldValueES: "Español, Inglés",
            fieldNameEN: "Languages",
            fieldValueEN: "Spanish, English",
        },
        {
            fieldNameES: "Github",
            fieldValueES: "https://github.com/Cober-t",
            fieldNameEN: "Github",
            fieldValueEN: "https://github.com/Cober-t",
        },
        {
            fieldNameES: "LinkedIn",
            fieldValueES: "https://www.linkedin.com/in/jorge-tejado-l%C3%B3pez/",
            fieldNameEN: "LinkedIn",
            fieldValueEN: "https://www.linkedin.com/in/jorge-tejado-l%C3%B3pez/",
        },
        {
            fieldNameES: "Email",
            fieldValueES: "jorgetejadolopez@gmail.com",
            fieldNameEN: "Email",
            fieldValueEN: "jorgetejadolopez@gmail.com",
        },
    ]
}


export {
    ScrollTo,
    logo,
    menu,
    close,
    downloadCV,

    hero, 
    about, experience, education, skills, tabsES, tabsEN,

    projects,
    projectsNameES,
    projectsNameEN,

    links,
    pathGameEngine,
    pathPython,
    pathUnity
}
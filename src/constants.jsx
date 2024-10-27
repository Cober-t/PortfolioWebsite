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
        <ScrollTo id="PersonalProjects" text=" proyectos personales." props={"text-accent hover:text-darkOrange whitespace-pre"}/>
        </div>,
        textEN:<div>For years I have studied graphics programming, even developing
        my own game engine. My 
        <ScrollTo id="Experience" text=" work experience " props={"text-accent hover:text-darkOrange whitespace-pre"}/>
        has led me to work with engines such as Unreal Engine or Unity, and I developed
        plugins in Maya and Blender among others, which has given me a high level of
        knowledge in these programs and their languages. Day by day I continue learning through
        <ScrollTo id="PersonalProjects" text=" personal projects." props={"text-accent hover:text-darkOrange whitespace-pre"}/>
        </div>,
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
            y que facilitan <span className="font-nodeDescription text-accent/60"> la creación de cualquier tipo de juego</span>. A continuación, explicaré 
            su desarrollo apoyándome en proyectos terminados.
            </div>,
            descriptionEN: "When starting a project such as the programming of a videogame engine, \
            there are a series of fundamental characteristics that we must take into account, \
            and that facilitate the creation of any type of game. Next, I will explain its development \
            based on finished projects.",
            stackES: [{name: "C++"}, {name: "Multithreading"}, {name: "OpenGL"}],
            stackEN: [{name: "C++"}, {name: "Multithreading"}, {name: "OpenGL"}],
            image: "/myGameEngine/coreCode.png",
            icon: undefined,
            github: "https://github.com/Cober-t/GameEngine/tree/Core",
        },
        {
            num: '2/8',
            titleES: "Configuración del proyecto y API para la ventana",
            titleEN: "Project configuration and API for the window",
            descriptionES: "Un conocimiento sólido en configuración de proyectos \
            facilitará enormemente añadir librerías y la correcta compilación en \
            diferentes entornos. Es importante también la programación de una capa \
            que permita hacer funcionar la ventana y la interacción con ella \
            a través de nuestros periféricos en cualquier sistema operativo.",
            descriptionEN: "A solid knowledge of project configuration will greatly \
            facilitate the addition of libraries and the correct compilation in \
            different environments. It is also important to program a layer that allows \
            the window and the interaction with it through our peripherals in any operating system.",
            stackES: [{name: "Premake"}, {name: "Cmake"}, {name: "glfw"}],
            stackEN: [{name: "Premake"}, {name: "Cmake"}, {name: "glfw"}],
            image: undefined,
            icon: <BsWindowFullscreen className="w-full h-[20vh] md:h-[50vh] xl:h-full" />,
            github: "https://github.com/Cober-t/GameEngine/tree/Core",
        },
        {
            num: '3/8',
            titleES: "Sistema de 'logging'",
            titleEN: "Log System",
            descriptionES: "Imprescindible para comprobar si el funcionamiento es correcto \
            y poder ver la respuesta de eventos y de nuestras interacciones con el motor. \
            Los mensajes se almacenan y se eliminan de manera eficiente en memoria.",
            descriptionEN: "Essential to check if the operation is correct and to be able to see \
            the response of events and our interactions with the engine. Messages are stored and \
            deleted efficiently in memory.",
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
            la creación de herramientas que aceleran y facilitan el desarrollo de videojuegos.",
            descriptionEN: "A visual editor for the engine is a drastic improvement, allowing the \
            creation of tools that speed up and facilitate the development of video games.",
            stackES: [{name: "ImGui"}, {name: "Immediate Mode"}],
            stackEN: [{name: "ImGui"}, {name: "Immediate Mode"}],
            image: "/myGameEngine/editor.png",
            icon: undefined,
            github: "https://github.com/Cober-t/GameEngine/tree/Core",
        },
        {
            num: '5/8',
            titleES: "API para los gráficos",
            titleEN: "API for the graphics",
            descriptionES: "Al igual que sucede con la ventana, es importante crear una capa que nos permita \
            mostrar gráficos en ella. Cada sistema operativo gestiona los gráficos de diferente forma, pero el motor \
            debe estar preparado para que no sea difícil añadir más capacidades gráficas en un futuro. \
            El motor usa OpenGL porque funciona en un gran número de plataformas diferentes.",
            descriptionEN: "As with the window, it is important to create a layer that allows us to \
            display graphics on it. Each operating system handles graphics differently, but the engine \
            must be prepared so that it is not difficult to add more graphics capabilities in the future. \
            The engine uses OpenGL because it works on a large number of different platforms.",
            stackES: [{name: "OpenGL"}],
            stackEN: [{name: "OpenGL"}],
            image: "/myGameEngine/graficos.png",
            icon: undefined,
            github: "https://github.com/Cober-t/GameEngine/tree/Core",
        },
        {
            num: '6/8',
            titleES: "Escena de juego y Sistema de Entidades",
            titleEN: "Entity Component System and Game Scene",
            descriptionES: "A la hora de diseñar la manera en la que el motor va a gestionar los elementos del juego \
            se ha optado por un sistema de entidades. Todo elemento en el juego (entidad) va a tener una lista \
            de componentes: posición, físicas, texturas, etc. que a su vez forman sistemas propios. \
            Una escena del juego recorre estos sistemas y todas las entidades que pertenecen a estos, \
            haciendo que el procesamiento sea muy rápido al evitar repeticiones innecesarias y búsquedas en memoria muy largas.",
            descriptionEN: "When designing the way in which the engine will manage the elements \
            of the game, we have opted for a system of entities. Every element in the game (entity) \
            will have a list of components: position, physics, textures, etc. which in turn form \
            their own systems. A game scene runs through these systems and all the entities that \
            belong to them, making the processing very fast by avoiding unnecessary repetitions \
            and very long memory searches.",
            stackES: [{name: "entt"}, {name: "Gestión de memoria"}, {name: "Estructuras de datos"}],
            stackEN: [{name: "entt"}, {name: "Memory Management"}, {name: "Data Structures"}],
            image: "/myGameEngine/sceneAndEntities.png",
            icon: undefined,
            github: "https://github.com/Cober-t/GameEngine/tree/Core",
        },
        {
            num: '7/8',
            titleES: "Scripting nativo",
            titleEN: "Native Scripting",
            descriptionES: "Gracias a una correcta configuración del proyecto y a las librerías dinámicas, con este sistema \
            podremos programar la lógica del videojuego sin tener que recompilar todo el motor, pudiendo hacer \
            cambios y desarrollar el juego mientras el motor está en ejecución. Aunque no es una característica imprescindible \
            sí que facilita enormemente el desarrollo, y es un sistema que podemos encontrar en todos los motores populares.",
            descriptionEN: "Thanks to a correct configuration of the project and the dynamic libraries, \
            with this system we can program the logic of the video game without having to recompile \
            the entire engine, being able to make changes and develop the game while the engine \
            is running. Although it is not an essential feature, it greatly facilitates development, \
            and it is a system that can be found in all popular engines.",
            stackES: [{name: "C++"}, {name: "DLL"}, {name: "Scripting Nativo"}],
            stackEN: [{name: "C++"}, {name: "DLL"}, {name: "Native Scripting"}],
            image: "/myGameEngine/scriptingNativo.png",
            icon: undefined,
            github: "https://github.com/Cober-t/GameEngine/tree/Core",
        },
        {
            num: '8/8',
            titleES: "Launcher para el motor y proyectos",
            titleEN: "Launcher for engine and projects",
            descriptionES: "Al igual que otros populares motores de videojuegos, un launcher visual facilita la interacción \
            con el motor, sus posibles versiones y la creación y edición de proyectos en desarrollo",
            descriptionEN: "Like other popular game engines, a visual launcher facilitates interaction \
            with the engine, its possible versions, and the creation and editing of projects under development.",
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
            la pelota con las palas de los jugadores, un sistema de audio que permite reproducir diferentes sonidos cuando \
            ciertos eventos ocurran y un sistema de cámaras con el que modificar fácilmente la resolución, el zoom, \
            la posición y ángulo de la cámara o la relación de aspecto.",
            descriptionEN: "In order to develop this first project it was necessary to implement \
            new functionalities in the engine that will be used as a base for the following ones. \
            These are 2D physics simulations for the collision of the ball with the players' \
            paddles, an audio system that allows playing different sounds when certain events occur, \
            and a camera system with which to easily modify the resolution, zoom, camera position, \
            and angle or aspect ratio.",
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
            la creación de 'prefabs', entidades completas que podremos guardar, \
            editar o duplicar, siempre atendiendo al uso de memoria y a las estructuras de datos.",
            descriptionEN: "This project implements texture loading, with which we will be able to \
            draw text on screen. Data serialization, which allows saving and loading scenes, \
            is essential for the persistence of data in a video game and to avoid starting from \
            an empty scene in the development of a project. Another substantial improvement that data \
            serialization allows us is the creation of 'prefabs', complete entities that we can \
            save, edit or duplicate, always taking into account memory usage and data structures.",
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
            descriptionEN: "This project makes intensive use of textures, and to manage \
            them correctly there are widely used techniques such as the 'texture atlas': \
            a single texture will group all those used in the game, arranging them through \
            indexes or coordinates. They are all drawn at the same time, saving processing \
            and graphic memory, which allows us to develop tools such as the particle system, \
            with which we can edit the attributes of the thousands of textures to be drawn.",
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
            titleEN: "Model and animation validator for importing to Unreal Engine",
            descriptionES: "Durante mi estancia en Pendulo Studios trabajé en herramientas encargadas de comprobar \
            que los modelos y animaciones provenientes del equipo de arte cumplieran los requisitos necesarios para su correcta \
            exportación al motor Unreal Engine. Con el desarrollo de plugins internos se consigue validar todo tipo de condiciones que deben \
            cumplir los atributos de los modelos, animaciones y cámaras, comprobando que se ajusten a nuestras necesidades. \
            Gracias al framework Qt dotamos a estas herramientas de apartado gráfico, permitiendo que todo el mundo \
            pueda entender y usar estas herramientas.\n\
            Debido a restricciones del contrato de confidencialidad, el proyecto no se aloja en un repositorio público y la imagen solo es \
            un ejemplo del proyecto.",
            descriptionEN: "During my stay at Pendulo Studios, I worked on tools in charge of \
            checking that the models and animations coming from the art team met the requirements \
            for proper export to the Unreal Engine. With the development of internal plugins, \
            we can validate all kinds of conditions that must meet the attributes of the models, \
            animations, and cameras, checking that they fit our needs. Thanks to the Qt framework \
            we provide these tools with a graphical section, allowing everyone to understand \
            and use these tools. Due to confidentiality contract restrictions, the project is not \
            hosted in a public repository and the image is only an example of the project.",
            stackES: [{name: "Qt"}, {name: "Pyside"}, {name: "MEL"}, {name: "Maya"}, {name: "Blender"}],
            stackEN: [{name: "Qt"}, {name: "Pyside"}, {name: "MEL"}, {name: "Maya"}, {name: "Blender"}],
            image: "/python/maya.png",
            icon: undefined,
            github: undefined,
        },
        {
            num: '2/4',
            titleES: "Validador de nomenclaturas",
            titleEN: "Nomenclature Validator",
            descriptionES: "En grandes proyectos donde los archivos y las carpetas se cuentan por miles, es importante mantenerlos organizados \
            y con una nomenclatura precisa. Esta herramienta comprueba muy rápidamente y con una respuesta clara los posibles archivos \
            que no cumplan con la nomenclatura exigida y su ruta. Esta guía de nomenclatura es fácilmente modificable a través de un JSON, \
            lo que permite introducir estas reglas, diferenciándose por cada nivel de sub carpeta e incluso para cada tipo de archivo dentro de estas.",
            descriptionEN: "In large projects where files and folders number in the thousands, \
            it is important to keep them organized and with an accurate nomenclature. \
            This tool checks very quickly and with a clear answer the possible files that \
            do not comply with the required nomenclature and their path. \
            This nomenclature guide is easily modifiable through a JSON, which allows you to \
            enter these rules, differentiating for each sub-folder level and even for each type of \
            file within them.",
            stackES: [{name: "Expresiones regulares (regex)"}, {name: "JSON"}],
            stackEN: [{name: "Regular Expressions (regex)"}, {name: "JSON"}],
            image: "/python/validadorNomenclaturas.png",
            icon: undefined,
            github: undefined,
        },
        {
            num: '3/4',
            titleES: "Gestión de Apps a través de Telegram",
            titleEN: "App management through Telegram",
            descriptionES: "Herramienta que gestiona todas las aplicaciones que uso en mi vida diaria. Haciendo uso de una Raspberry Pi y un bot de Telegram \
            se ejecuta todo el tiempo un código que recibe e interpreta los mensajes que mandemos a este bot. A través de comandos determinados \
            se crean, modifican o eliminan tareas en Todoist. En Notion podemos gestionar bases de datos como listas de la compra, gastos o multimedia, \
            ya que esta herramienta interpreta vídeo, imagen y convierte archivos de voz en texto. También es capaz de crear notas de texto en formato \
            'Markdown' que usará la base de datos de Obsidian para crear una nueva nota con el estilo y texto que le indiquemos. Por último, encender \
            o apagar un ordenador desde cualquier lugar, muy útil para conexiones a través de una VPN que también gestiona esta Raspberry Pi.",
            descriptionEN: "A tool that manages all the applications I use in my daily life. \
            Using a Raspberry Pi and a Telegram bot, a code is executed all the time that receives \
            and interprets the messages that we send to this bot. Through specific commands we create, \
            modify, or delete tasks in Todoist. In Notion, we can manage databases such \
            as shopping lists, expenses, or multimedia, since this tool interprets video, \
            and images and converts voice files into text. It is also capable of creating text notes \
            in 'Markdown' format that will use the Obsidian database to create a new note with \
            the style and text that we indicate. Finally, turn on or turn off a computer from anywhere, \
            which is very useful for connections through a VPN that also manages this Raspberry Pi.",
            stackES: [{name: "RaspberryPi"}, {name: "Todoist"}, {name: "Notion"}, {name: "Obsidian"}],
            stackEN: [{name: "RaspberryPi"}, {name: "Todoist"}, {name: "Notion"}, {name: "Obsidian"}],
            image: "/python/automatizeBot.png",
            icon: undefined,
            github: "https://github.com/Cober-t/automaticeBotTelegram",
        },
        {
            num: '4/4',
            titleES: "Launcher para proyectos del motor de videojuegos",
            titleEN: "Launcher for game engine projects",
            descriptionES: "Herramienta de gestión de los proyectos y versiones de mi propio motor de videojuegos. Con la ayuda de un archivo JSON fácilmente editable \
            el launcher lee toda la carpeta de proyectos con miniaturas incluidas y, gracias a Qt, nos lo muestra todo visualmente. Al crear un nuevo proyecto no solo \
            actualiza el JSON sino que también prepara todo el entorno de desarrollo, crea las carpetas y archivos con el código necesario poder trabajar con el motor \
            nada más se haya abierto, al igual que funcionan otros populares motores como Unreal Engine, Unity o Godot.",
            descriptionEN: "Tool for managing the projects and versions of my own videogame engine. \
            With the help of an easily editable JSON file the launcher reads the whole project folder \
            with thumbnails included and, thanks to Qt, it shows everything visually. \
            When creating a new project it not only updates the JSON but also prepares the whole \
            development environment, makes the folders and files with the necessary code to be able \
            to work with the engine as soon as it is opened, just like other popular engines like \
            Unreal Engine, Unity or Godot.",
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
            titleEN: "Random terrain generator",
            descriptionES: "Haciendo uso del algoritmo 'Perlin Noise' se desarrolló este generador de terreno para juegos \
            del tipo RTS (Real-Time Strategy). A través de la interfaz de Unity se pueden modificar todas las variables \
            de este algoritmo y generar un terreno con un solo click pudiendo ver el resultado rápidamente en tiempo real. \
            También se pretendía que, una vez generado este terreno, fuese totalmente personalizable, tanto en el arte como en \
            cuanto a la lógica del videojuego, pudiendo añadir tipos de terreno, asignar imágenes a estos o incluso \
            añadir atributos como vida si se tratase de un enemigo, dificultad de terreno para ralentizar al jugador, etc. ",
            descriptionEN: "Using the 'Perlin Noise' algorithm, this terrain generator was developed \
            for RTS (Real-Time Strategy) games. Through the Unity interface, you can modify all the \
            variables of this terrain generation algorithm with a single click, and see the result quickly \
            in real-time. It was also intended that once this terrain was generated, it would be fully \
            customizable, both in art and in terms of game logic, being able to add terrain types, assign \
            images to these, or even add attributes such as life if it were an enemy, \
            terrain difficulty to slow down the player, etc.",
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
            Permite dibujar diferentes tipos de grid en la escena de Unity, personalizarlo con parámetros como el tamaño de celda o su posición en el mundo. \
            Después permite ajustar la posición de los objetos que tengamos seleccionados y que estén dentro del grid.",
            descriptionEN: "Tool developed making use of the capabilities that Unity gives us to program \
            and modify its editor. It allows to draw different types of grid in the Unity scene, customize it \
            with parameters such as cell size or its position in the world. Then it allows to adjust \
            the position of the objects that we have selected and that are inside the grid.",
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
        durationEN: "March 2023 - April 2024",
        descriptionES: "Durante mi estancia en Pendulo Studios aprendí a trabajar con un equipo grande \
        y a dar soporte a sistemas que forman parte de un flujo de trabajo complejo además \
        de analizarlos y mejorarlos para que fueran más fáciles de usar y desarrollar. \
        También mejoré mis habilidades como programador al desarrollar herramientas para Maya, \
        Blender, Unreal Engine o Unity, utilizando los lenguajes Python, C++ y C# respectivamente.",
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
        durationEN: "February 2022 - April 2022",
        descriptionEN: "TODO",
        descriptionES: "TODO",
        image: "./riseOfTheOverlords.jpg",
        link: "https://store.steampowered.com/app/1162140/Rise_Of_The_Overlords/",
    },
    {
        companyES: "La Tribuna de Toledo",
        companyEN: "La Tribuna of Toledo",
        positionES: "Maquetación",
        positionEN: "TODO",
        durationES: "Junio 2018 - Septiembre 2018",
        durationEN: "June 2018 - September 2018",
        descriptionEN: "",
        descriptionES: "",
        image: undefined,
        link: "",
    },
    ],
}

const education = {

    icon: "",
    titleES: "Mis Estudios",
    titleEN: "My Studies",
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
        institutionEN: "Toledo School of Arts",
        degreeES: "Ilustración",
        degreeEN: "Illustration",
        duration: "2016-2018"
    },
    {
        institutionES: "María Zambrano I.E.S.",
        institutionEN: "María Zambrano I.E.S.",
        degreeES: "Bachillerato de Ciencias y Tecnologías",
        degreeEN: "Bachelor of Science and Technology",
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
    descriptionEN: "I consider myself a versatile person and I always look \
    for criticism because I believe it is the best way to improve. \
    I love new challenges, I always face them with the desire to learn and do my best.",
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
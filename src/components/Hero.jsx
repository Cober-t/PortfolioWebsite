import { downloadCV } from "../constants";
import { Link } from "react-router-dom";


const Hero = () => {

  return (
    <div className="container mx-auto h-full">
      <div className={`relative w-full flex flex-col xl:flex-row 
      items-center justify-center xl:pt-8 xl:pb-24 xl:mt-10 gap-x-[10vw] select-none`}>
        
          <div style={{'--image-url': `url("./profilePic.png")`}}
          className="w-[30vh] h-[30vh] xl:w-[45vh] xl:h-[45vh] mb-8 rounded-full xl:translate-x-10
          bg-[image:var(--image-url)] bg-cover bg-no-repeat bg-center"/>

          <div className="items-center flex flex-col justify-center text-center xl:text-left xl:pr-[100px]">
            {/* <span className="text-[28px] xl:text-[36px]">Desarrollador de software y programador de gráficos</span> */}
            <h1 className={`text-[32px] xl:text-[52px] mb-5 leading-[1.5] xl:whitespace-nowrap`}>
              Hola, soy <span className='text-accent'>Jorge Tejado</span>
            </h1>
            <p className={`mx-6 md:max-w-[600px] xl:max-w-[1000px] text-[18px] xl:text-[21px] font-semibold mb-9 text-white/70`}>
              Apasionado de la programación de gráficos y de las herramientas 
              que optimicen o faciliten el desarrollo de cualquier aplicación. 
              Día a día continuo aprendiendo en estos campos a través de
              <Link to="/projects" className="text-accent hover:text-darkOrange"> proyectos personales.</Link>
            </p>

            {/* <div className="hidden sm:visible sm:flex w-full flex-row items-center justify-center gap-x-10 mb-10">
              <div className="opacity-100 gap-10 flex text-[35px] text-white/10 uppercase ">
                <a className="hover:text-accent/60">C++</a>
                <a className="hover:text-accent/60">C#</a>
                <a className="hover:text-accent/60">PYTHON</a>
                <a className="hover:text-accent/60">OPENGL/WEBGL</a>
              </div>
            </div> */}

            <div className="w-full flex flex-row items-center justify-center gap-x-10 mb-10">
              <div className="flex flex-col xl:flex-row items-center gap-8 transition-all
              hover:bg-yellow-100">
                  <a href={downloadCV} download="curriculum"
                  className="outline w-[120px] uppercase justify-center flex items-center font-tags text-2xl tracking-wider font-thin
                  outline-2 p-2 outline-darkOrange text-accent select-none">
                    Descarga CV
                  </a>
              </div>

              <div className="flex flex-col xl:flex-row items-center gap-8 transition-all
              hover:bg-yellow-100">
                  <Link to="/contact"
                  className="outline w-[120px] uppercase justify-center flex items-center font-tags text-2xl tracking-wider font-thin
                  outline-2 p-2 outline-darkOrange text-accent select-none">
                    Contactame
                  </Link>
              </div>
            </div>


          </div>
      </div>
    </div>
  );
};

export default Hero;

import { downloadCV, hero, ScrollTo } from "../constants";

const Hero = () => {

  return (
    <div className="container mx-auto h-full">
      <div id="Inicio"
      className={`relative w-full flex flex-col xl:flex-row 
      items-center justify-center xl:pt-8 xl:pb-24 xl:mt-10 gap-x-[7vw] xl:pl-20`}>
        
          <div style={{'--image-url': `url("./profilePic.png")`}}
          className="w-[30vh] h-[30vh] xl:w-[45vh] xl:h-[45vh] mb-8 rounded-full xl:translate-x-10
          bg-[image:var(--image-url)] bg-cover bg-no-repeat bg-center"/>

          <div className="items-center flex flex-col justify-center text-center xl:text-left xl:pr-[100px]">

            <h1 className={`text-[28px] md:text-[32px] xl:text-[52px] mb-5 leading-[1.5] xl:whitespace-nowrap`}>
              {hero[0].textES} <span className='text-accent'>Jorge Tejado</span>
            </h1>

            <p className={`mx-6 md:max-w-[600px] xl:max-w-[1000px] text-[14px] md:text-[15px] xl:text-[18px] font-semibold mb-9 text-white/70`}>
              {hero[1].textES}
            </p>

            <div className="hidden sm:visible sm:flex w-full fzzzlex-row items-center justify-center gap-x-10 mb-5">
              <div className="gap-10 flex text-[16px] md:text-[26px] text-white/15 uppercase ">
                  <ScrollTo id="C++" text="C++" props={"hover:text-accent/60"}/>
                  <ScrollTo id="C#" text="C#" props={"hover:text-accent/60"}/>
                  <ScrollTo id="Python" text="Python" props={"hover:text-accent/60"}/>
                  <ScrollTo id="C++" text="OpenGL/WebGL" props={"hover:text-accent/60"}/>
              </div>
            </div>

            <div className="w-full flex flex-row items-center justify-center gap-x-10 mb-10">
              <div className="flex flex-col xl:flex-row items-center gap-8 transition-all
              hover:bg-yellow-100">
                  <a href={downloadCV} download="JorgeTejadoLópez_CV"
                  className="outline w-[120px] uppercase justify-center flex items-center font-tags text-2xl tracking-wider font-thin
                  outline-2 p-2 outline-darkOrange text-accent">
                    Descarga CV
                  </a>
              </div>

              <div className="flex flex-col xl:flex-row items-center gap-8 transition-all
              hover:bg-yellow-100">
                  <button to="/contact"
                  className="outline w-[120px] uppercase justify-center flex items-center font-tags text-2xl tracking-wider font-thin
                  outline-2 p-2 outline-darkOrange text-accent"
                  onClick={()=> {
                    const element = document.getElementById("Contact")
                    element?.scrollIntoView({behavior:"smooth"})
                  }}>
                    Contactame
                  </button>
              </div>
            </div>


          </div>
      </div>
    </div>
  );
};

export default Hero;

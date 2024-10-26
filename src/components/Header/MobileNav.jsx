import React, { useState } from "react"
import { menu, close, links } from "../../constants.jsx"
import { motion } from "framer-motion"
import IconSVG from "./IconSVG.jsx"
import { ScrollTo } from "../../constants.jsx"
import { useLocation } from "react-router-dom"
import { LangContext } from "../App.jsx"
import { useContext } from "react"

const Navbar = () => {
  
  const { lang } = useContext(LangContext)
  const location = useLocation()
  const [toggle, setToggle] = useState(false);

  function NavColor(path) {
    let color = "text-white hover:text-accent"
  
    if (window.location.pathname === path)
      color = "hover:text-darkOrange text-accent border-b-2 border-accent hover:border-darkOrange"
    
    return `${color} uppercase font-medium transition-all`
  }

  return (
    <>
    <div className='xl:hidden fixed h-screen flex justify-end items-start z-40'>

        <IconSVG path={toggle ? close : menu} fill="red" 
        className='w-[28px] h-[28px] justify-end object-contain mr-10 z-50 text-accent -translate-y-2.5'
        onClick={() => setToggle(!toggle)}
        />

        { toggle && 
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.2, ease:"easeIn"}}
        className={`bg-backgroundColor h-[100vh] w-[60vw] flex fixed right-0 top-0 
        z-[100] text-white xl:hidden`}
        >
          <div className="flex flex-col items-center justify-center gap-y-8 w-full h-full 
          uppercase list-none">
            <div className="font-['Ignite'] text-4xl xl:text-5xl flex flex-col items-center justify-center">
              <p>
                JORGE
              </p>
              <p className="text-accent font-['Ignite'] font-medium text-6xl xl:text-7xl">PORTFOLIO</p>
            </div>
            <div className="border w-[35vw] fill border-white/20 -mt-5 mb-5"></div>

            {links.map((link, index) => (
            <li
                key={index}
                className={`font-nodeDescription font-medium cursor-pointer text-[16px] ${
                location.pathname === link.path ? "text-black" : "text-secondary"
                }`}
                onClick={() => {
                setToggle(!toggle);
                }}
            >
                <ScrollTo id={
                  index == 0 && "Inicio" ||
                  index == 1 && "Experience" ||
                  index == 2 && "PersonalProjects" ||
                  index == 3 && "Contact"} 
                  text={lang == "ES" ? link.nameES : link.nameEN}
                  props={`hover:text-accent hover:border-darkOrange text-white/60
                    text-[5vw] font-thin font-tags uppercase`}/>
            </li>
            ))}
          </div>
        </motion.div> || 
        !toggle && 
        <motion.div
        initial={{opacity:1}}
        animate={{opacity:0}}
        transition={{duration:0.2, ease:"easeIn"}}
        className={`bg-backgroundColor h-[100vh] w-[60vw] flex fixed right-0 top-0
        z-40 text-white ${toggle === false ? "hidden" : "display"}`}
        />}

    </div>

    {toggle && 
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:0.75}}
    transition={{duration:0.2, delay:0.15}}
    className={`flex h-screen w-full bg-black fixed top-0 left-0 z-20 ${toggle === false ? "hidden" : "display"}`}
    onClick={()=> toggle === true && setToggle(false)} />
    || !toggle && 
    <motion.div
    initial={{opacity:0.75}}
    animate={{opacity:0.0}}
    transition={{duration:0.2, delay:0.15}}
    className={`flex h-screen w-full bg-black fixed top-0 left-0 z-20 ${toggle === false ? "hidden" : "display"}`}/>
    }

    </>

  );
};

export default Navbar;
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { links } from "../../constants.jsx"
import { ScrollTo } from "../../constants.jsx"
import { useContext } from "react"
import { LangContext } from "../App.jsx"

const Nav = () => {

    const {lang } = useContext(LangContext)

    function NavColor(path) {
      let color = "text-white hover:accent"
    
      if (window.location.pathname === path)
        color = "hover:text-darkOrange text-accent border-b-2 border-accent hover:border-darkOrange"
      
      return `${color} capitalize text-xl hover:text-accent transition-all`
	  }

    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    
    return <nav className={`flex gap-12 flex-row ${scrolled ? "bg-primary" : "bg-transparent"}`}>
        {links.map((link, index)=> {
            return (
                <ScrollTo id={
                  index == 0 && "Inicio" ||
                  index == 1 && "Experience" ||
                  index == 2 && "PersonalProjects" ||
                  index == 3 && "Contact"} 
                  text={lang == "ES" ? link.nameES : link.nameEN}
                  props={`hover:text-accent hover:border-darkOrange 
                    text-[2vw] font-thin font-tags uppercase`}/>
            )
        })}
    </nav>
}

export default Nav
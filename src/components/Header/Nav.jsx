import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { links } from "../../constants.jsx"
import { ScrollTo } from "../../constants.jsx"
import { useContext } from "react"
import { LangContext } from "../App.jsx"

const Nav = () => {

    const { lang } = useContext(LangContext)
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        setScrolled(scrollTop > 100);
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
                    text-[2vw] font-tags font-thin uppercase`}/>
            )
        })}
    </nav>
}

export default Nav
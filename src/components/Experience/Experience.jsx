import MotionTranstion from "../MotionTransition.jsx"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { experience, tabsEN, tabsES } from "../../constants.jsx"

import Skills from "../Experience/Skills.jsx"
import AboutMe from "../Experience/AboutMe.jsx"
import ExperienceWork from "../Experience/ExperienceWorks.jsx"
import Education from "../Experience/Education.jsx"
import { useContext } from "react"
import { LangContext } from "../App.jsx"


const Experience = () => {
    
    const { lang } = useContext(LangContext)
    const [currentTab, setCurrentTab] = useState(0);
    const [tabsLang, setTabsLanguage] = useState(tabsES);

    useEffect(function()
    {
        if (lang == "ES")
            setTabsLanguage(tabsES)
        else if (lang == "EN")
            setTabsLanguage(tabsEN)
    }, [lang])

    return (
        <>
			<MotionTranstion />

            <motion.div 
            initial={{opacity:0}}
            id="Experience"
            animate={{opacity:1, transition:{delay:0.4, duration:0.4, ease:"easeIn"}}}
            className="flex h-full items-center justify-center py-12 xl:py-0 xl:px-24">

                <div className="container mx-auto flex flex-col xl:flex-row gap-[60px]">
                    <div className="flex flex-col w-full max-w-[380px] mx-auto">
                        {tabsLang.map((tab, index) => {
                            return <button key={index}
                            className={`border-white/20 p-3 justify-center items-center transition-all
                            inline-flex w-full tracking-wider whitespace-nowrap font-tags text-2xl font-medium uppercase
                            ${index === currentTab ? "bg-pink-20 border-b-2 border-t-2 border-r-0 border-l-0 xl:border-l-2 hover:bg-black hover:opacity-60" : 
                            "border-b-0 border-t-0 border-r-2 border-l-2 text-accent xl:border-l-0 hover:bg-white/5"}`}
                            onClick={()=>{setCurrentTab(index)}}>
                                {tab}
                            </button>
                        })}
                    </div>

                    {/* content */}
                    <div className="h-full w-full">
                        { 
                        currentTab === 0 && <ExperienceWork /> ||

                        currentTab === 1 && <Education /> ||

                        currentTab === 2 && <Skills /> ||

                        currentTab === 3 && <AboutMe />
                        }
                    </div>
                </div>

            </motion.div>
        </>
    )
}

export default Experience
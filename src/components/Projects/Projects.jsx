import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import MotionTranstion from "../MotionTransition.jsx"
import { useEffect, useState } from "react"
import { BsGithub } from "react-icons/bs"
import ProjectSlideButtons from "./ProjectSlideButtons.jsx"
import "swiper/css"
import { projects, projectsNameES, projectsNameEN } from "../../constants.jsx"
import { LangContext } from "../App.jsx"
import { useContext } from "react"

const Projects = () => {

    const { lang } = useContext(LangContext)
    const [projectsNameLang, setProjectsLanguage] = useState(projectsNameES)

    useEffect(function()
    {
        if (lang == "ES")
            setProjectsLanguage(projectsNameES)
        else if (lang == "EN")
            setProjectsLanguage(projectsNameEN)
    }, [lang])

    const [progress, setProgress] = useState([
        {id: 0, value: 100/projects[0].length},
        {id: 1, value: 100/projects[1].length},
        {id: 2, value: 100/projects[2].length}
    ])
    const [lastProgressValue, setLastProgressValue] = useState([
        {id: 0, value: 100/projects[0].length},
        {id: 1, value: 100/projects[1].length},
        {id: 2, value: 100/projects[2].length}
    ])
    const [slideIndex, setSlideIndex] = useState([
        {id: 0, value: 0},
        {id: 1, value: 0},
        {id: 2, value: 0}
    ])
    const [swiper, setSwiper] = useState(projects[0].length, null)

    function updateProgress({ idToUpdate, newData }) 
    {
        updateLastProgress(idToUpdate, newData)
        setProgress(progress.map(({ id, value }) =>
            id === idToUpdate ? { id, value: newData } : { id, value }))
    }
    function updateLastProgress({ idToUpdate, newData }) 
    {
        setLastProgressValue(lastProgressValue.map(({ id, value }) =>
            id === idToUpdate ? { id, value: newData } : { id, value }))
    }
    function updateSlide({ projectID, slideID }) 
    {
        setSlideIndex(slideIndex.map(({ id, value }) =>
            id === projectID ? { id, value: slideID } : { id, value }))
    }
    const handleSlideChange = (swiper, index) => {
        const projectSize = projects[index].length
        updateSlide({projectID: index, slideID: swiper.activeIndex})
        updateProgress({
            idToUpdate: index, 
            newData: 100 / projectSize * swiper.activeIndex + 100 / projectSize
        })
    }

    return (
        <>
            <MotionTranstion />

            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1, transition:{delay:0.4, duration:0.4, ease:"easeIn"}}}
            className="min-h-[80vh] flex flex-col justify-center pb-12 px-12 xl:px-24"
            id="PersonalProjects">

                {projects.map((projectAux, index) => {
                    return (
                    <div className={`${index != 0 && "mt-72"}`}
                        id={index == 0 && "C++" ||
                            index == 1 && "Python" ||
                            index == 2 && "C#"}
                    >
                        <div className="items-center justify-center grid-cols-3 grid
                        container mx-auto">
                            <div className="w-full items-center justify-center text-nowrap">
                                <p className={`border-white/20 font-tags tracking-wider text-[26px] xl:text-[32px] font-light
                                uppercase pt-2.5 pb-2.5 justify-center flex transition-all 
                                bg-pink-20 border-l-2 border-t-2 border-b-0 border-r-2`}>
                                    {projectsNameLang[index]}
                                </p>
                            </div> 
                        </div>

                        <div className="container mx-auto pt-5 xl:pr-5 xl:pl-5">
                            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                                <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
                                xl:justify-between order-2 xl:order-none">
                                    <div className="flex flex-col gap-[20px] h-[50%]"> 
                                        {/* outline num */}
                                        <div className="text-[76px] sm:text-8xl relative w-fit font-['Ignite']
                                        text-stroke transition-all duration-300">
                                            {projectAux[slideIndex.at(index).value].num}
                                            <span aria-hidden="true" 
                                            className="text-outline left-0 absolute text-backgroundColor font-['Ignite']">
                                                {projectAux[slideIndex.at(index).value].num}
                                            </span>
                                        </div>

                                        {/* project category */}
                                        <h2 className="text-[48px] sm:text-[62px] font-tags font-bold leading-none text-white
                                        hover:text-accent transition-all duration-300">
                                            {lang == "ES" ? projectAux[slideIndex.at(index).value].titleES : projectAux[slideIndex.at(index).value].titleEN}
                                        </h2>
                                        {/* project description */}
                                        <p className="text-white/60 text-[14px] sm:text-[16px] text-left font-nodeDescription
                                        whitespace-pre-line">
                                            {lang == "ES" ? projectAux[slideIndex.at(index).value].descriptionES : projectAux[slideIndex.at(index).value].descriptionEN}
                                        </p>
                                        {/* stack */}
                                        <ul className="flex gap-4">
                                            {lang == "ES" 
                                            ?
                                            projectAux[0].stackES.map((item, index) => {
                                                return <li key={index} className="text-2xl sm:text-3xl font-regular tracking-wider font-tags text-accent italic">
                                                    {item.name}
                                                </li>
                                            }) 
                                            :
                                            projectAux[0].stackEN.map((item, index) => {
                                                return <li key={index} className="text-2xl sm:text-3xl font-regular tracking-wider font-tags text-accent italic">
                                                    {item.name}
                                                </li>
                                            })}
                                        </ul>
                                        {/* border */}
                                        <div className="border border-white/20"></div>
                                        {/* buttons */}
                                        <div className=" flex items-start gap-4 mb-[20px]">
                                            <a href={projectAux[0].github} target="_blank">
                                                {
                                                projectAux[0].github !== undefined &&
                                                <div className="w-[50px] h-[50px] rounded-full bg-white/5 flex
                                                justify-center items-center hover:text-accent text-white">
                                                    <BsGithub className="text-3xl"/>
                                                </div>
                                                }
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full xl:w-[50%] mt-10">
                                    <Swiper spaceBetween={10} slidesPerView={1} onSlideChange={(swiper)=>handleSlideChange(swiper, index)}
                                    onSwiper={setSwiper}
                                    className="xl:h-[400px]">
                                        {projectAux.map((project, index)=> {
                                            return (
                                                <SwiperSlide key={index} className="w-full">
                                                    { project.image !== undefined &&
                                                        <div style={{'--image-url': `url(${project.image})`}}
                                                        className={`xl:h-full md:h-[50vh] sm:h-[30vh] h-[25vh] 
                                                            bg-[image:var(--image-url)] bg-center bg-no-repeat bg-contain`}/>
                                                        ||
                                                        project.icon
                                                    }
                                                </SwiperSlide>
                                            )
                                        })}
                                        <ProjectSlideButtons containerStyles="flex gap-2 absolute right-0 
                                        bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between
                                        xl:w-max xl:justify-none"
                                        projectSize={projectAux.length}
                                        btnStyles="bg-accent hover:bg-accent-hover text-primary
                                        text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                        />
                                    </Swiper>
                                    <motion.div 
                                    key={progress[index].value}
                                    initial={{width: `${lastProgressValue[index].value}%`}}
                                    animate={{width: `${progress[index].value}%`}}
                                    onAnimationStart={()=>{updateLastProgress({idToUpdate:index, newData:progress[index].value})}}
                                    transition={{duration:0.75, ease:"easeInOut"}}
                                    className={`bg-accent h-[7px] mb-8`}>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </motion.div>
        </>
    )
}

export default Projects
import { skills } from "../../constants.jsx"
import ProjectSlideButtons from "../Projects/ProjectSlideButtons.jsx"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

const Skills = () => {

    function skillLevelColored(level)
    {
        if (level.toLowerCase() == "principiante")
            return "opacity-30"
        else if (level.toLowerCase() == "intermedio")
            return "opacity-50"
        else 
            return "opacity-75"
    }

    return (
        <div className="w-full h-full">
        <div className="flex flex-col gap-[20px]">

            <p className="font-title transition-all
            flex text-4xl font-medium uppercase justify-center">
                Lenguajes
            </p>
            <Swiper spaceBetween={10} slidesPerView={4}
            className="h-[200px] xl:w-[1000px] w-full">
                {skills.languages.map((skill, index) => {
                    return <SwiperSlide key={index} className="w-full">
                    <div className="w-full h-[150px] bg-[#232329] flex
                    items-center justify-end pb-2 flex-col text-center">
                        <div className="text-6xl hover:text-accent
                        transition-all duration-300 mb-[12px]">
                            {skill.icon}
                        </div>
                        <p className="text-[13px] sm:text-[16px] font-medium uppercase">{skill.name}</p>
                        <p className={`font-light tracking-wider text-[10px] sm:text-xs text-accent uppercase
                         hover:opacity-100 ${skillLevelColored(skill.level)}`}>
                            {skill.level}
                        </p>
                    </div>
                    </SwiperSlide>
                })}
                <ProjectSlideButtons containerStyles="flex gap-2 absolute right-0 
                bottom-[calc(50%_-_22px)] z-20 w-full justify-between -translate-y-5"
                projectSize={5}
                btnStyles="hover:bg-accent text-primary
                text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
            </Swiper>

            <p className="font-title transition-all
            flex text-4xl font-medium uppercase justify-center">
                Frameworks
            </p>
            <Swiper spaceBetween={10} slidesPerView={3}
            className="h-[200px] xl:w-[1000px] w-full">
                {skills.frameworks.map((skill, index) => {
                    return <SwiperSlide key={index} className="w-full">
                    <div className="w-full h-[150px] bg-[#232329] flex
                    items-center justify-end pb-2 flex-col text-center">
                        <div className="text-6xl hover:text-accent
                        transition-all duration-300 mb-[12px]"> 
                            {skill.icon}
                        </div>
                        <p className="text-[13px] sm:text-[16px] font-medium uppercase">{skill.name}</p>
                        <p className={`font-light tracking-wider text-[10px] sm:text-xs text-accent uppercase
                         hover:opacity-100 ${skillLevelColored(skill.level)}`}>
                            {skill.level}
                        </p>
                    </div>
                    </SwiperSlide>
                })}
                {/* <ProjectSlideButtons containerStyles="flex gap-2 absolute right-0 
                bottom-[calc(50%_-_22px)] z-20 w-full justify-between -translate-y-5"
                projectSize={5}
                btnStyles="hover:bg-accent text-primary
                text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                /> */}
            </Swiper>

            <p className="font-title transition-all
            flex text-4xl font-medium uppercase justify-center">
                Programas
            </p>
            <Swiper spaceBetween={10} slidesPerView={4}
            className="h-[200px] xl:w-[1000px] w-full">
                {skills.softwares.map((skill, index) => {
                    return <SwiperSlide key={index} className="w-full">
                    <div className="ww-full h-[150px] bg-[#232329] flex
                    items-center justify-end pb-2 flex-col text-center">
                        <div className="text-6xl hover:text-accent
                        transition-all duration-300 mb-[12px]"> 
                            {skill.icon}
                        </div>
                        <p className="text-[13px] sm:text-[16px] font-medium uppercase">{skill.name}</p>
                        <p className={`font-light tracking-wider text-[10px] sm:text-xs text-accent uppercase
                         hover:opacity-100 ${skillLevelColored(skill.level)}`}>
                            {skill.level}
                        </p>
                    </div>
                    </SwiperSlide>
                })}
                <ProjectSlideButtons containerStyles="flex gap-2 absolute right-0 
                bottom-[calc(50%_-_22px)] z-20 w-full justify-between -translate-y-5"
                projectSize={5}
                btnStyles="hover:bg-accent text-primary
                text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
            </Swiper>
        </div>
    </div>
    )
}

export default Skills
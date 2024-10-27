import { education } from "../../constants.jsx"
import { useContext } from "react"
import { LangContext } from "../App.jsx"


const Education = () => {
    
    const { lang } = useContext(LangContext)
    
    return (
        <div className="w-full mb-20">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-5xl xl:text-5xl font-bold font-nodeTitle uppercase">
                    {lang == "ES" ? education.titleES : education.titleEN}
                </h3>
                <div className="h-fit">
                    <ul className="grid grid-cols-1 gap-[30px]">
                        {education.items.map((item, index) => {
                            return (
                                <li key={index}
                                className="bg-[#232329] h-[184px] py-6 px-10
                                flex flex-col justify-center items-center lg:items-start gap-1">
                                    <span className="text-accent font-tags text-2xl font-medium">{item.duration}</span> 
                                    <h3 className="text-xl min-h-[60px] font-medium
                                    text-center lg:text-left">
                                        {lang == "ES" ? item.degreeES : item.degreeEN}
                                    </h3>
                                    <div className="flex items-center gap-3">
                                    <span className="w-[6px] h-[6px] bg-accent" />
                                    <p className="text-white/60 font-medium">
                                        {lang == "ES" ? item.institutionES : item.institutionEN}
                                    </p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Education
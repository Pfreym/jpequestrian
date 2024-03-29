import Image from "next/image";
import Horse1 from "../../../public/images/Horse1.png";

export function Splash () {
    return (

<div className="flex flex-col bg-gray-50">    
        <div className="m-auto font-bold font-epilogue md:text-4xl text-l">Unleash Your Horse's Potential</div>
        <div className="text-gray-500 m-auto font-bold md:pl-24 font-epilogue text-l md:text-4xl">Learn, Share and Thrive with JP Equestrian</div>
        <div className="text-black m-auto md:pl-24 font-epilogue text-sm md:text-xl">Coaching and Mentorship for You and your Horse</div>
            <div className="flex justify-between m-auto">
                <Image 
                src={Horse1}
                width={1523}
                height={713}
                alt="Horse"/>
                </div>
            </div>
                )
            }
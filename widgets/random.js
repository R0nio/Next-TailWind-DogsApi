'use client'
import {Button, Title} from "../shared/ui";
import Image from "next/image";
import placeholder from '../img/LoadingBlurDog.jpg';


export const Random = () => {
    return (
        <div className="">
            <Title children="Пора завести"/>
            <div className="flex items-end justify-between">
                <h2 className="font-[Inter] font-black text-[120px] lowercase text-[#222733]">Собака</h2>
                <Button children="Случайная собака" func={()=> console.log("3123")}></Button>
            </div>
            <div className="bg-gray-100 p-6 rounded-[50px] flex items-center justify-between my-12">
                <div className="flex flex-col items-start">
                    <span className="text-[#222733] font-[Montserrat] text-2xl font-semibold">Ваша собака</span>
                    <p className="text-[#222733] font-[Inter] text-4xl font-black">Собака нэйми</p>
                </div>
                <Image className="w-[178px] h-[161px] rounded-[50px]" src={placeholder} alt="placeholder dog"/>
            </div>
        </div>
    )
}
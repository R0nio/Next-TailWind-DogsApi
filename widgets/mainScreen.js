import dogs from '../img/MainPic.jpg'
import Image from 'next/image'

export const MainScreen = () =>{
    return(
        <div className="w-full flex justify-center my-14">
            <Image src={dogs} alt='aaa'/>
        </div>
    )
}
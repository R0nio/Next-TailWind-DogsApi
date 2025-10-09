import dog from '../img/BeatifulDog.jpg'
import Image from 'next/image'


export const About = () =>{
    return (
        <div className='flex justify-between items-center bg-[#f2f2f2] rounded-[50px] py-14 px-14 my-16'>
            <div>
                <span className='text-[#222733] font-[Inter] text-[128px] font-black'>собака</span>
                <p className='text-[#222733] font-[Montserrat] text-[20px] font-semibold w-[680px]'>Домашнее животное из сем. хищных млекопитающих, к к-рому относятся также волк, лисица и др.</p>
            </div>
            <div>
                <Image src={dog} alt='pic of dog' className='rounded-4xl w-[370px] '/>
            </div>
        </div>
    )
}
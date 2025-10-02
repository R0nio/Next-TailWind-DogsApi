import {Header} from '../widgets/header'

export const Footer = () =>{
    return(
        <div className='flex flex-col text-center gap-4'>
            <Header />
            <span className='font-[Montserrat] font-semibold text-16 text-[#222733] opacity-[0.5]'>Бирюков Иван, П-44</span>
        </div>
    )
}
import { Title } from "../shared/ui";
import { DogCard } from "../shared/card";

const breedslist =[
    {src: "akita"},
    {src: "beagle"},
    {src: "havanese"},
    {src: "brabancon"},
    {src: "husky"},
    {src: "mix"},
    {src: "pembroke"},
    {src: "samoyed"},
    {src: "sharpei"},
    {src: "saluki"},
];

export const Breeds = () =>{
    return(
        <div>
            <Title children='Породы'/>
            <div className="grid  grid-cols-5 grid-rows-2 gap-2.5">
                {breedslist.map((item, i)=>{
                    return <DogCard breed={item.src} key={i} />
                })}
            </div>
        </div>
    )
}
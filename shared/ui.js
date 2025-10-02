


export const Button = ({children}) =>{
    return(
        <div className="bg-[#4d86ff] px-[20px] py-1 w-fit rounded-full transition cursor-pointer">
            <a href="#">
                <button>
                    <p className="text-white text-sm">{children}</p>
                </button>
            </a>
        </div>
    )
}
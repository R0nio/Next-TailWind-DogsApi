


export const Button = ({children}) =>{
    return(
        <div className="bg-[#4d86ff]">
            <a href="#">
                <button>
                    <p className="text-white">{children}</p>
                </button>
            </a>
        </div>
    )
}
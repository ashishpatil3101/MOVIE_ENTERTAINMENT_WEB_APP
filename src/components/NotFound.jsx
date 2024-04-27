import NotFoundIMage from "/404.gif"

export const NotFound = ()=>{
     
    return (
        <div className="h-screen w-screen flex items-center  justify-center  bg-black">
            <img className="h-[60%] w-[40%]" src={`${NotFoundIMage}`}/>
        </div>
    )
}

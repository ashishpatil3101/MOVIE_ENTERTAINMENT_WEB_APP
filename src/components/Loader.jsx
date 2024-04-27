import LoaderGif from '/loader.gif'

export const Loader = ()=>{
     
    return (
        <div className="h-screen w-screen flex items-center  justify-center bg-black">
            <img className='h-[75%] ' src={`${LoaderGif}`} alt="Loading gif"/>
        </div>
    )
}

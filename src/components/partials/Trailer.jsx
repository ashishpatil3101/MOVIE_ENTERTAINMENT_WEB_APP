import ReactPlayer from "react-player"
import { useSelector } from "react-redux"
import { useLocation, useNavigate, Link } from "react-router-dom"
import {NotFound} from '../NotFound';

export const Trailer = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const category = pathname.includes("movie") ? "movies" : "tvshows"
    const ytvideo = useSelector(state => state[category].info.videos)
    
    return   (
        <div className="bg-[rgba(0,0,0,0.9)] absolute z-[100] top-0 left-0 w-screen h-screen flex items-center justify-center">
            <Link
                className="ri-close-fill hover:text-[#6556CD] absolute text-2xl text-white right-[5%] top-[5%]"
                onClick={() => navigate(-1)}
            ></Link>

           {ytvideo ?  <ReactPlayer
                controls
                height={500}
                width={900}
                url={`https://www.youtube.com/watch?v=${ytvideo.key}`} 
                /> : <NotFound />}
        </div>
    )
}
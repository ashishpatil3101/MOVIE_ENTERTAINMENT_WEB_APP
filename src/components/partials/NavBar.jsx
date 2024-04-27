
import { Link } from "react-router-dom";

const SideNav = () => {
    
    return (
        <div className="w-[20%] border-r-2 border-zinc-400 p-10">
            <h1 className="text-2xl font-bold">
                <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
                <span className=" text-white">CinePLex</span>
            </h1>
            <nav className="flex flex-col text-zinc-400 text-xl gap-2">
                <h1 className="text-white font-semibold text-xl mt-10 mb-5">New Feeds</h1>

                <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300"> <i className="ri-fire-fill mr-1"></i>Trending</Link>

                <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300"><i className="ri-bard-fill mr-2"></i>Popular</Link>
                <Link  to="/movie" className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300"><i className="ri-movie-2-fill mr-2"></i>Movies</Link>
                <Link to="/tv"  className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300"><i className="mr-2 ri-tv-2-fill"></i>Tv shows</Link>
                <Link to="/person" className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300"><i className="ri-team-fill mr-2"></i>People</Link>
            </nav>

            {/* <nav className="flex flex-col text-zinc-400 text-xl gap-2">
                <h1 className="text-white font-semibold text-xl mt-10 mb-5">New Feeds</h1>

                <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300"> <i className="ri-fire-fill mr-1"></i>Trending</Link>

                <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300"><i className="ri-bard-fill mr-2"></i>Popular</Link>
                <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300"><i className="ri-movie-2-fill mr-2"></i>Movies</Link>

            </nav> */}
        </div>

    )
}

export default SideNav;
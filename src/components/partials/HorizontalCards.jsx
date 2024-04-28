import { Link } from "react-router-dom";
import { DropDown } from "./DropDown";
import noIMageAvailable from '/noIMageAvailabele.png'

export const HorizontalCards = ({ data }) => {

    return (
      
            <div className="w-[120%]  flex overflow-y-hidden mb-5 p-5 h-[55%]"  >
                {data.length > 0 ? data.map((d, i) => {
                    return <Link to={`/${d.media_type}/details/${d.id}`} key={d.id} className="min-w-[17%]  bg-zinc-900 mr-5 mb-5">
                        <img className="w-full object-cover h-[45%]" src={d.backdrop_path || d.profile_path || d.poster_path ? `https://image.tmdb.org/t/p/original${d.backdrop_path || d.profile_path || d.poster_path}` : noIMageAvailable}></img>
                        <div className="text-white p-3 h-[55%] overflow-y-auto">
                            <h1 className=" text-xl text-white font-semibold"> {d.title || d.name || d.original_name || d.original_title}</h1>
                            <p className="" >{d.overview.slice(0, 80)}...<Link className='text-zinc-500'> more</Link></p>
                        </div>

                    </Link>
                }): <h1 className="text-3xl text-white mt-5 text-center font-black">Nothing to show</h1>} 
            </div>

    );
};

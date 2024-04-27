import { Link } from "react-router-dom";
import { DropDown } from "./DropDown";

export const HorizontalCards = ({ data }) => {

    return (
      
            <div className="w-[100%]  flex overflow-y-hidden mb-5 p-5"  >
                {data.map((d, i) => {
                    return <Link to={`/${d.media_type}/details/${d.id}`} key={d.id} className="min-w-[17%]  bg-zinc-900 mr-5 mb-5">
                        <img className="w-full object-cover h-[45%]" src={`https://image.tmdb.org/t/p/original${d.backdrop_path || d.profile_path || d.poster_path}`}></img>
                        <div className="text-white p-3 h-[55%]">
                            <h1 className=" text-xl text-white font-semibold"> {d.title || d.name || d.original_name || d.original_title}</h1>
                            <p className="" >{d.overview.slice(0, 35)}...<Link className='text-zinc-500'> more</Link></p>
                        </div>

                    </Link>
                })}
            </div>

    );
};

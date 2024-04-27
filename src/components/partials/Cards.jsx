import { Link } from "react-router-dom";

export const Cards = ({ data, title }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {data.map((c, i) => (
                
                
                <Link 
                    className="relative flex flex-col items-center w-56  rounded-lg shadow-md  mb-5 "
                    key={i} 
                  
                    to={`/${c.media_type || title}/details/${c.id}`} 
                >
                 { c.vote_average &&  <div className="rounded-full bg-yellow-300 text-white w-[6vh] h-[6vh] flex justify-center items-center absolute left-0 ">
                        {(c.vote_average).toFixed() * 10}<sup>%</sup>
                    </div>}
                    <img
                        className="h-64 w-full object-cover"
                        src={`https://image.tmdb.org/t/p/original/${c.profile_path || c.poster_path || c.backdrop_path}`}
                        alt=""
                    />
                    <h1 className="text-lg text-zinc-200 font-semibold mt-3 px-4">{c.name || c.title || c.original_name || c.original_title}</h1>
                    
                
                </Link>
            ))}
        </div>
    );
};

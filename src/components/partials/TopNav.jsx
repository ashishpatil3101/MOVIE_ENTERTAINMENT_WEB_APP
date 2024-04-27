import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import noImage from '/noIMageAvailabele.png';

const TopNav = () => {
    const [query, setQuery] = useState("");
    const [searches, setsearches] = useState([]);

    const getSearches = async () => {
        try {
            const { data } = await axios.get(`/search/multi?query=${query}`);
            setsearches(data.results);
        } catch (error) {
            console.log("tmdb api error in top nav searches", error);
        }
    };

    useEffect(() => {
        getSearches();
    }, [query]);

    return (
        <div className="relative w-full h-[10vh] flex justify-start ml-[20%] items-center">
            <i className="text-zinc-400 text-3xl ri-search-line"></i>
            <input
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                className="w-[50%] mx-10 p-3 text-xl text-white outline-none border-none bg-transparent"
                type="text"
                placeholder="Search anything"
            />

            {query.length > 0 && (
                <i
                    onClick={() => setQuery("")}
                    className="text-zinc-400 text-3xl ri-close-fill"
                ></i>
            )}

            <div className="z-[100] absolute rounded w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto top-[100%] left-[5%]">

                {searches.map((s, i) => (
                    <Link
                    to={`/${s.media_type}/details/${s.id}`} 
                        key={i}
                        className="font-semibold text-zinc-600 hover:text-black hover:bg-zinc-300 duration-300 w-[100%] p-5 flex justify-start items-center border-b-2 border-zinc-100"
                    >
                        <img
                            className="w-[8vh] h-[8vh] object-cover rounded mr-5"
                            src={s.backdrop_path || s.profile_path || s.poster_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path || s.poster_path}` : noImage}
                            alt=""
                        />
                        <span>{s.title || s.name || s.original_name || s.original_title}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TopNav;

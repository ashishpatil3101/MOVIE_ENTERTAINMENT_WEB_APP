import { useNavigate, Link } from "react-router-dom"
import TopNav from "./partials/TopNav";
import { DropDown } from "./partials/DropDown";
import { useEffect, useState } from "react";
import axios from '../utils/axios';
import { Cards } from "./partials/Cards";
import { Loader } from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";


export const Trending = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState("all");
    const [duration, setDuration] = useState("week");
    const [trending, setTrending] = useState([]);
    const [page, setPage] = useState(1);
    document.title = 'Trending '+ category;

    const getTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/${duration}`);
            setTrending(data.results);
            setPage(page+1)

        } catch (error) {
            console.log("tmdb api error in home", error);
        }
    }

    useEffect(() => {
        getTrending();
    }, [duration, category]);

    return (
        trending.length > 0 ? <div className="p-[2%]  w-screen h-screen overflow-hidden overflow-y-auto">
            <div className="w-full flex items-center mb-[1%] px-[4.2%]">

                <h1 className="text-xl text-zinc-400 font-semibold w-[20%] ">
                    <i className="ri-arrow-left-line hover:text-[#6556CD] w-[20%] pr-[4%]" onClick={(() => navigate(-1))}></i>
                    Trending</h1>
                <TopNav />
                <DropDown title="Category" options={["tv", "movie", "all"]} setCateFun={setCategory} />
                <div className="w-[2%]"> </div>
                <DropDown title="Duration" options={["week", "day"]} setCateFun={setDuration} />

            </div>
            <InfiniteScroll dataLength={trending.length} next={getTrending} hasMore={true}>
                <Cards data={trending} title={category} />
            </InfiniteScroll>
        </div> : <Loader />
    )
}
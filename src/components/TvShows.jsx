import { useNavigate, Link } from "react-router-dom"
import { DropDown } from "./partials/DropDown";
import { useEffect, useState } from "react";
import axios from '../utils/axios';
import { Cards } from "./partials/Cards";
import { Loader } from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import TopNav from "./partials/TopNav";

export const Tvshows = ()=>{
    const navigate = useNavigate();
    const [category, setCategory] = useState("airing_today");
    const [tvshows, setTvShows] = useState([]);
    const [page, setPage] = useState(1);
    document.title = 'Tvshows '+ category;

    const getTvShows = async () => {
      try {
          const { data } = await axios.get(`/tv/${category}`);
          setTvShows(data.results);
          setPage(page+1)

      } catch (error) {
          console.log("tmdb api error in tc shows", error);
      }
  }

  useEffect(() => {
    getTvShows();
  }, [ category]);
  console.log(tvshows)
      return (
        tvshows.length > 0 ? <div className="p-[2%]  w-screen h-screen overflow-hidden overflow-y-auto">
            <div className="w-full flex items-center mb-[1%] px-[4.2%]">

                <h1 className="text-xl text-zinc-400 font-semibold w-[20%]">
                    <i className="ri-arrow-left-line hover:text-[#6556CD] w-[20%] pr-[4%]" onClick={(() => navigate(-1))}></i>
                    Tv shows 
                </h1>
                <TopNav />
                <DropDown title="Category" options={[ "top_rated", "airing_today", "on_the_air"]} setCateFun={setCategory} />
                <div className="w-[2%]"> </div>

            </div>
            <InfiniteScroll dataLength={tvshows.length} next={getTvShows} hasMore={true}>
                <Cards data={tvshows} title="tv" />
            </InfiniteScroll>
        </div> : <Loader />
    )
}
import { useNavigate, Link } from "react-router-dom"
import { DropDown } from "./partials/DropDown";
import { useEffect, useState } from "react";
import axios from '../utils/axios';
import { Cards } from "./partials/Cards";
import { Loader } from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import TopNav from "./partials/TopNav";

export const Movie = ()=>{
    const navigate = useNavigate();
    const [category, setCategory] = useState("now_playing");
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    document.title = 'Movies '+ category;

    const getMovies = async () => {
      try {
          const { data } = await axios.get(`/movie/${category}`);
          setMovies(data.results);
          setPage(page+1)

      } catch (error) {
          console.log("tmdb api error in home", error);
      }
  }

  useEffect(() => {
    getMovies();
  }, [ category]);
      return (
        movies.length > 0 ? <div className="p-[2%]  w-screen h-screen overflow-hidden overflow-y-auto">
            <div className="w-full flex items-center mb-[1%] px-[4.2%]">

                <h1 className="text-xl text-zinc-400 font-semibold  w-[20%] ">
                    <i className="ri-arrow-left-line hover:text-[#6556CD] w-[20%] pr-[4%]" onClick={(() => navigate(-1))}></i>
                    Movies 
                </h1>
                <TopNav />
                <DropDown title="Category" options={["upcoming", "top_rated", "now_playing", "pouplar"]} setCateFun={setCategory} />
                <div className="w-[2%]"> </div>

            </div>
            <InfiniteScroll dataLength={movies.length} next={getMovies} hasMore={true}>
                <Cards data={movies} title="movie"/>
            </InfiniteScroll>
        </div> : <Loader />
    )
}
import { useNavigate, Link } from "react-router-dom"
import { DropDown } from "./partials/DropDown";
import { useEffect, useState } from "react";
import axios from '../utils/axios';
import { Cards } from "./partials/Cards";
import { Loader } from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import TopNav from "./partials/TopNav";

export const People = ()=>{
    const navigate = useNavigate();
    const [category, setCategory] = useState("popular");
    const [person, setPerson] = useState([]);
    const [page, setPage] = useState(1);
    document.title = 'People '+ category;

    const getPerson = async () => {
      try {
          const { data } = await axios.get(`/person/${category}`);
          setPerson(data.results);
          setPage(page+1)

      } catch (error) {
          console.log("tmdb api error in tc shows", error);
      }
  }

  useEffect(() => {
    getPerson();
  }, [ category]);
      return (
        person.length > 0 ? <div className="p-[2%]  w-screen h-screen overflow-hidden overflow-y-auto">
            <div className="w-full flex items-center mb-[1%] px-[4.2%]">

                <h1 className="text-xl text-zinc-400 font-semibold  w-[20%]">
                    <i className="ri-arrow-left-line hover:text-[#6556CD] w-[20%] pr-[4%]" onClick={(() => navigate(-1))}></i>
                    People
                </h1>
                <TopNav />
                <div className="w-[2%]"> </div>

            </div>
            <InfiniteScroll dataLength={person.length} next={getPerson} hasMore={true}>
                <Cards data={person} title="person" />
            </InfiniteScroll>
        </div> : <Loader />
    )
}
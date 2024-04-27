import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { asyncLoadtv, removetv } from "../store/actions/tvActions";
import { useNavigate, Link } from "react-router-dom";
import { Loader } from "./Loader";
import {HorizontalCards} from "../components/partials/HorizontalCards"



export const TVDetails = ()=>{
    const {pathname} =useLocation();
    const navigate = useNavigate();
    const { info } = useSelector((state) => state.tvshows);
    const { id } = useParams();
    const dispacth = useDispatch();
    useEffect(() => {
      dispacth(asyncLoadtv(id));
      return () => {
        dispacth(removetv());
      };
    }, [id]);
    let urLpath;
    if (info)
      urLpath = `https://image.tmdb.org/t/p/original${
      
        info.detail.backdrop_path ||
        info.detail.poster_path ||
        info.detail.profile_path 
      }`;
    console.log(info
    );
    return info ? (
        <div
          style={{
            background: `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.5),rgba(0,0,0,.7)), url(${urLpath})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
    
            backgroundRepeat: 'no-repeat',
          }}
          className="relative w-screen h-[150vh] px-[8%] overflow-y-auto"
        >
          {/* {part 1 navigation} */}
          <nav className="h-[10vh] items-center w-full text-zinc-100 flex gap-10 text-xl">
            <Link
              className="ri-arrow-left-line hover:text-[#6556CD] w-[20%] pr-[4%]"
              onClick={() => navigate(-1)}
            ></Link>
            <a
              target="_blank"
              href={`${info.detail.homepage}`}
              className="hover:text-[#6556CD]"
            >
              <i className="ri-external-link-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
              className="hover:text-[#6556CD]"
            >
              <i className="ri-earth-fill"></i>
            </a>
    
            <a
              target="_blank"
              href={`https://www.imdb.com/title/${info.externalId.imdb_id}/`}
              className="hover:text-[#6556CD]"
            >
              IMDB
            </a>
          </nav>
    
          {/* {part 2 poster and details} */}
          <div className="w-full flex">
            <img
              className="h-[60vh] w-64 object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                info.detail.profile_path ||
                info.detail.poster_path ||
                info.detail.backdrop_path
              }`}
              alt=""
            />
    
            <div className="content ml-[5%] text-white">
              <h1 className="text-4xl font-black  text-white">
                {info.detail.name ||
                  info.detail.title ||
                  info.detail.original_name ||
                  info.detail.original_title}
                <small className="text-2xl text-zinc-300 font-bold">
                {info.detail.first_air_date ? `(${info.detail.first_air_date?.split("-")[0]})` : ""}
                </small>
              </h1>
    
              <div className="mt-3 mb-3 flex text-white items-center gap-x-3">
             
                  <span className="rounded-full bg-yellow-300 text-white w-[6vh] h-[6vh] flex justify-center items-center">
                    {info.detail.vote_average.toFixed() * 10}
                    <sup>%</sup>
                  </span>
                  <h1 className="font-semibold text-2xl w-[60px]leading-6">User score</h1>
                  <h1>{info.detail?.first_air_date}</h1>
                  <h1>{info.detail.genres.map(g=> g.name).join(", ")}</h1>
                  {/* {<h1>{info.detail?.runtime} minutes</h1>} */}
    
              </div>
    
              {/* <h1 className="text-xl  font-semibold italic text-zinc-200">{info.detail.tagline}</h1> */}
    
              <h1 className="text-xl  mt-3 ">Overview</h1>
              <p>{info.detail.overview}</p>
    
              <h1 className="text-xl  mt-3 ">Movie translated</h1>
              <p className="mb-10">{info.translations.slice(0, 5).join(", ")}</p>
             
              <Link className="px-5 py-5 bg-[#6556CD] rounded-lg" to={`${pathname}/trailer`}  >Play Trailer</Link>
            </div>
          </div>
    
          {/* {part 3 platforms} */}
    
          <div className="w-[80%] flex flex-col gap-y-5 mt-10">
            {info.watchProvider && info.watchProvider.flatrate && (
              <div className="flex gap-10 items-center text-white">
                <h1>Available on platforms</h1>
                {info.watchProvider.flatrate.map((w) => (
                  <img
                    title={w.provider_name}
                    className="w-[7vh] h-[7vh] object-cover rounded-md"
                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    key={w.logo_path}
                  />
                ))}
              </div>
            )}
    
            {/* {info.watchProvider && info.watchProvider.rent && (
              <div className="flex gap-10 items-center text-white">
                <h1>Available on rent</h1>
                {info.watchProvider.rent.map((w) => (
                  <img
                    title={w.provider_name}
                    className="w-[7vh] h-[7vh] object-cover rounded-md"
                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    key={w.logo_path}
                  />
                ))}
              </div>
            )}
    
            {info.watchProvider && info.watchProvider.buy && (
              <div className="flex gap-10 items-center text-white ml-2">
                <h1>Available to buy</h1>
                {info.watchProvider.buy.map((w) => (
                  <img
                    title={w.provider_name}
                    className="w-[7vh] h-[7vh] object-cover rounded-md"
                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    key={w.logo_path}
                  />
                ))}
              </div>
            )} */}
          </div>
    
          {/* {recommondation and similarity} */}
          
          <hr className="mt-5"/>
          <h1 className="text-3xl font-bold text-white">Recommendation and similar</h1>
          <HorizontalCards   data={info.recommondation.length > 0 ? info.recommondation : info.simila}
          />     
    
          <Outlet />
        </div>
      ) : (
        <Loader />
      );
}
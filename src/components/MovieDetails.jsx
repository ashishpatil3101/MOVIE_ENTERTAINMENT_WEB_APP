import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { asyncLoadMovie, removeMovie } from "../store/actions/movieActions";
import { useNavigate, Link } from "react-router-dom"
import { Loader } from './Loader'
export const MovieDetails = () => {
    const navigate = useNavigate();
    const { info } = useSelector((state) => state.movies)
    const { id } = useParams();
    const dispacth = useDispatch();
    useEffect(() => {
        dispacth(asyncLoadMovie(id));
        return () => {
            dispacth(removeMovie())
        }
    }, []);
    let urLpath;
    if (info) urLpath = `https://image.tmdb.org/t/p/original${info.detail.backdrop_path || info.detail.profile_path || info.detail.poster_path}`;
    console.log(info)
    return info ? (
        <div style={{
            background: `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.5),rgba(0,0,0,.7)), url(${urLpath})`, backgroundPosition: 'top 10%',
            backgroundSize: 'cover',

            // backgroundRepeat: 'no-repeat',

        }}
            className="w-screen h-screen px-[8%]">

            <nav className="h-[10vh] items-center w-full text-zinc-200 flex gap-10 text-xl" >
                <Link className="ri-arrow-left-line hover:text-[#6556CD] w-[20%] pr-[4%]" onClick={(() => navigate(-1))}>

                </Link>
                <a target="blank" href={`${info.detail.homepage}`}>
                    <i className="ri-external-link-fill"></i>
                </a>
                <a target="blank" href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}>
                    <i className="ri-earth-fill"></i>
                </a>

                <a target="blank" href={`https://www.imdb.com/title/${info.externalId.imdb_id}/`}>IMDB
                </a>

            </nav>

        </div>
    ) : <Loader />
}
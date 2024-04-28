import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { asyncLoadperson, removeperson } from "../store/actions/personActions";
import { useNavigate, Link } from "react-router-dom";
import { Loader } from "./Loader";
import { HorizontalCards } from "../components/partials/HorizontalCards"


export const PersonDetails = () => {

    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { info } = useSelector((state) => state.person);
    const { id } = useParams();
    const dispacth = useDispatch();
    useEffect(() => {
        dispacth(asyncLoadperson(id));
        return () => {
            dispacth(removeperson());
        };
    }, [id]);
    let urLpath;
    if (info)
        urLpath = `https://image.tmdb.org/t/p/original${info.detail.backdrop_path ||
            info.detail.poster_path ||
            info.detail.profile_path
            }`;
    console.log(info);
    return info ? (
        <div className="px-[8%] w-screen bg-[#1f1e24] h-[170vh]">
            {/* {part 1 navigation} */}
            <nav className="h-[10vh] items-center w-full text-zinc-100 flex gap-10 text-xl">
                <Link
                    className="ri-arrow-left-line hover:text-[#6556CD] w-[20%] pr-[4%]"
                    onClick={() => navigate(-1)}
                ></Link>

            </nav>


            {/* {part 2 left poster and details} */}
            <div className="flex  w-full">
                <div className="w-[20%]">
                    <img
                        className="h-[35vh] w-64 object-cover"
                        src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
                        alt=""
                    />
                    <hr className="mt-3 mb-3" />
                    {/* social media links */}
                    <div className="text-2xl text-white flex gap-x-5">

                        <a
                            target="_blank"
                            href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
                            className="hover:text-[#6556CD]"
                        >
                            <i className="ri-earth-fill"></i>
                        </a>

                        <a
                            target="_blank"
                            href={`https://www.facebook.com/${info.externalId.facebook_id}`}
                            className="hover:text-[#6556CD]"
                        >
                            <i className="ri-facebook-circle-fill"></i>
                        </a>

                        <a
                            target="_blank"
                            href={`https://www.instagram.com/${info.externalId.instagram_id}`}
                            className="hover:text-[#6556CD]"
                        >
                            <i className="ri-instagram-fill"></i>
                        </a>


                        <a
                            target="_blank"
                            href={`https://www.twitter.com/${info.externalId.twitter_id}`}
                            className="hover:text-[#6556CD]"
                        >
                            <i className="ri-twitter-x-fill"></i>
                        </a>

                    </div>
                    <h1 className="text-2xl font-semibold text-zinc-400 mt-5 mb-3">Personal info</h1>
                    <h1 className="text-lg font-semibold text-zinc-400">Known for</h1>
                    <h1 className="font-semibold text-zinc-400">{info.detail.known_for_department}</h1>

                    <h1 className="text-lg font-semibold text-zinc-400 mt-3">Gender</h1>
                    <h1 className="font-semibold text-zinc-400">{info.detail.gender === 2 ? "Male" : "Female"}</h1>

                    <h1 className="text-lg font-semibold text-zinc-400 mt-3">Birthday</h1>
                    <h1 className="font-semibold text-zinc-400">{info.detail.birthday}</h1>

                    <h1 className="text-lg font-semibold text-zinc-400 mt-3">Place of birth</h1>
                    <h1 className="font-semibold text-zinc-400">{info.detail.place_of_birth}</h1>


                </div>

                {/* {part 3 right detail and information} */}
                <div className="w-[80%] ml-[5%]">
                    <h1 className="text-5xl font-semibold text-zinc-400 mb-3 font-black">{info.detail.name}</h1>
                    <h1 className="text-xl font-semibold text-zinc-400">Bio-graphy</h1>
                    <p className="text-zinc-400 mt-3">{info.detail.biography.substring(0,500)}</p>
                    <h1 className="text-lg font-semibold text-zinc-400 mt-3 font-black">Known for</h1>
                    <HorizontalCards data={info.combineCredits.cast}/>
                </div>

            </div>

        </div>
    ) : <Loader />;
}
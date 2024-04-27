import { Link } from "react-router-dom";

const Header = ({data})=>{
    if(!data) return <div>not anthing,{data}</div>
    const urLpath = `https://image.tmdb.org/t/p/original${data.backdrop_path || data.profile_path || data.poster_path}`;
    return (
        <div style={{background: `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.5),rgba(0,0,0,.7)), url(${urLpath})`,  backgroundPosition: 'top 10%',
        backgroundSize: 'cover',     
          
        // backgroundRepeat: 'no-repeat',

        }} className="w-full h-[50vh] flex flex-col justify-end items-start p-[7%] pb-5">
            <h1 className="text-4xl text-white w-[70%]"> {data.title || data.name || data.original_name || data.original_title}</h1>
            <p className="text-white w-[70%] mt-3 mb-3">{data.overview.slice(0,200)}...<Link className='text-blue-400' to={`/${data.media_type}/details/${data.id}`}> more</Link></p>
            <p className="text-white">
            <i className="text-yellow-500 ri-megaphone-fill"></i>{" "}
            {data.release_date || 'no information'}
            <i className="text-yellow-500 ml-5 ri-album-fill"></i>
            {data.media_type.toUpperCase()}
            </p>
            <Link className="p-4 rounded text-white font-semibold mt-5 bg-[#6556CD]">watch trailer</Link>
        </div>
    )
}

export default Header;
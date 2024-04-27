import { useEffect, useState } from 'react';
import NavBar from '../components/partials/NavBar';
import TopNav from './partials/TopNav';
import axios from '../utils/axios';
import Header from './partials/Header';
import { HorizontalCards } from './partials/HorizontalCards';
import { DropDown } from './partials/DropDown';
import { Loader } from './Loader';

const Home = () => {
    document.title = 'Home | Movie Web App';
    const [wallPaper, setWallPaper] = useState(null);
    const [trending, setTrending] = useState(null);
    const [category, setCategory] = useState('all')
    const getWallPaper = async () => {
        try {
            const { data } = await axios.get("/trending/all/day");
            const d = data.results[(Math.random() * data.results.length).toFixed()];
            setWallPaper(d);
        } catch (error) {
            console.log("tmdb api error in home", error);
        }
    }

    const getTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/day`);
            setTrending(data.results);
        } catch (error) {
            console.log("tmdb api error in home", error);
        }
    }

    useEffect(() => {
        !wallPaper && getWallPaper();
         getTrending();
    }, [category])
    return wallPaper && trending ? (
        <>
            <NavBar />
            <div className="w-[80%] h-full overflow-hidden overflow-y-auto">
                <TopNav />
                <Header data={wallPaper} />
                <div className="flex justify-between p-5 py-2 items-center">
                    <h1 className="text-zinc-400 text-2xl font-bold ">Trending</h1>
                    <DropDown title="Filter" options={["tv", "movie", "all"]} setCateFun={setCategory } />
                </div>
                <HorizontalCards data={trending} />
            </div>
        </>

    ) : (<Loader />)
}

export default Home;
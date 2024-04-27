import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { Trending } from "./components/Trending";
import { Popular } from "./components/Popular";
import { Movie } from "../src/components/Movie";
import { Tvshows } from "./components/TvShows";
import { People } from "./components/People";
import { MovieDetails } from "./components/MovieDetails";
import { TVDetails } from "./components/TvDetails";
import { PersonDetails } from "./components/PersonDetails";
import { Trailer } from "./components/partials/Trailer";

function App() {
    return (
        <div className="bg-[#1f1e24] w-screen h-screen flex">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/popular" element={<Popular />} />
                <Route path="/movie" element={<Movie />}>
                    {" "}
                </Route>
                <Route path="/movie/details/:id" element={<MovieDetails />}>
                    <Route path="/movie/details/:id/trailer" element={<Trailer />} />
                </Route>
                <Route path="/tv" element={<Tvshows />}></Route>
                <Route path="/tv/details/:id" element={<TVDetails />} >
                    <Route path="/tv/details/:id/trailer" element={<Trailer />} />
                </Route>

                <Route path="/person" element={<People />}>
                    {" "}
                </Route>
                <Route path="/person/details/:id" element={<PersonDetails />} />
            </Routes>
        </div>
    );
}

export default App;

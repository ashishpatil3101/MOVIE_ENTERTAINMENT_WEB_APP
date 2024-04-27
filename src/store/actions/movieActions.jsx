export {removeMovie}from '../reducers/movieSlice';
import axios from '../../utils/axios';
import {loadMovie} from '../reducers/movieSlice';

export const asyncLoadMovie= (id)=> async(dispacth, getState)=>{
    try {
        const detail =await axios.get(`/movie/${id}`);
        const externalId = await axios.get(`/movie/${id}/external_ids`);

        const recommondation = await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const videos = await axios.get(`/movie/${id}/videos`);
        const watchProvider = await axios.get(`/movie/${id}/watch/providers`);
        const res = {
            detail: detail.data,
            externalId: externalId.data,
            recommondation: recommondation.data.results,
            similar: similar.data.results,
            videos: videos.data.results.find(m=> m.type="Trailer"),
            watchProvider: watchProvider.data.results.IN   
        }
        dispacth(loadMovie(res));
    } catch (error) {
        console.log(error)
    }
}
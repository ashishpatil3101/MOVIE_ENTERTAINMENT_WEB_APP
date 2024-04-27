export {removetv}from '../reducers/tvshows';
import axios from '../../utils/axios';
import {loadtv} from '../reducers/tvshows';

export const asyncLoadtv= (id)=> async(dispacth, getState)=>{
    try {
        const detail =await axios.get(`/tv/${id}`);
        const externalId = await axios.get(`/tv/${id}/external_ids`);

        const recommondation = await axios.get(`/tv/${id}/recommendations`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const translations = await axios.get(`/tv/${id}/translations`);
        const videos = await axios.get(`/tv/${id}/videos`);
        const watchProvider = await axios.get(`/tv/${id}/watch/providers`);
        const res = {
            detail: detail.data,
            externalId: externalId.data,
            recommondation: recommondation.data.results,
            similar: similar.data.results,
            translations: translations.data.translations.map(t=> t.name),
            videos: videos.data.results.find(m=> m.type="Trailer"),
            watchProvider: watchProvider.data.results.IN   
        }
        dispacth(loadtv(res));
    } catch (error) {
        console.log(error)
    }
}
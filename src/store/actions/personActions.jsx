export {removeperson}from '../reducers/personSlice';
import axios from '../../utils/axios';
import {loadperson} from '../reducers/personSlice';

export const asyncLoadperson= (id)=> async(dispacth, getState)=>{
    try {
        const detail =await axios.get(`/person/${id}`);
        const externalId = await axios.get(`/person/${id}/external_ids`);
        const combineCredits = await axios.get(`/person/${id}/combined_credits`);
        const tvCredits = await axios.get(`/person/${id}/tv_credits`);
        const movieCredits = await axios.get(`/person/${id}/movie_credits`);
        const res = {
            detail: detail.data,
            externalId: externalId.data,
            combineCredits: combineCredits.data,
            tvCredits: tvCredits.data,
            movieCredits: movieCredits.data
        }
        dispacth(loadperson(res));
    } catch (error) {
        console.log(error)
    }
}
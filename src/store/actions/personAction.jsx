export {removeperson}from '../reducers/personSlice';
import axios from '../../utils/axios';
import {loadperson} from '../reducers/personSlice';

export const asyncLoadperson= (id)=> async(dispacth, getState)=>{
    try {
        const detail =await axios.get(`/person/${id}`);
        const externalId = await axios.get(`/person/${id}/external_ids`);
        const res = {
            detail: detail.data,
            externalId: externalId.data,
        }
        dispacth(loadperson(res));
    } catch (error) {
        console.log(error)
    }
}
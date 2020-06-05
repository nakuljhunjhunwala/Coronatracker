import axios from 'axios';

export const fetchData = async ()=> {
    try {
        const url = "https://api.covid19india.org/state_district_wise.json";
        const {data} = await axios.get(url);

        return data;
    } catch (error) {
        alert(error);
    }
}


export const fetchZone = async ()=> {
    try {

        const url = "https://api.covid19india.org/zones.json";
        const {data} = await axios.get(url);

        return data;
    } catch (error) {
        alert(error);
    }
}
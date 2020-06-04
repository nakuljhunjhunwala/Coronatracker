import axios from 'axios';

const url = "https://api.covid19india.org/state_district_wise.json";

export const fetchData = async ()=> {
    try {
        const {data} = await axios.get(url);

        const maharastraData = data.Maharashtra.districtData;

        return maharastraData;
    } catch (error) {
        alert(error);
    }
}
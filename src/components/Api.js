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



export const fetchNews = async ()=> {
    try {

              const d = new Date();
        const date = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()-1}`;
        
const proxyUrl = "https://cors-anywhere.herokuapp.com/"
const url = `${proxyUrl}https://newsapi.org/v2/everything?q=covid%2019&from=${date}&pageSize=6&language=en&domains=ndtv.com,indiatoday.in,indianexpress.com&sortBy=popularity&apiKey=8067ce9c47be446085bc0e70056d7665`;


        // const url = `http://newsapi.org/v2/everything?q=covid%2019&from=${date}&pageSize=6&language=en&domains=ndtv.com,indiatoday.in,indianexpress.com&sortBy=popularity&apiKey=8067ce9c47be446085bc0e70056d7665`;
        const {data} = await axios.get(url);

        return data;

    } catch (error) {
        alert(error);
    }
}

import React, {
  useState,
  useEffect
} from 'react';
import './App.css';
import Cards from './components/Card';
import Graph from './components/Graph';
// import News from './components/News';
import DistrictPicker from './components/DistritPicker';
import {
  fetchData
} from './components/Api';

const App = () => {
  const [rawdata, setrawData] = useState({});
  const [data, setData] = useState({});
  const [state, setstate] = useState("State Unassigned");
  const [district, setdistrict] = useState('');


  useEffect(() => {

    const getData = async () => {
      const mdata = await fetchData();
      setrawData(mdata);
     
      setData(mdata[state].districtData);
      
    }

    getData();

  }, [setData,setrawData,state]);


  const getState = (state) => {
   
    setstate(state);
    setdistrict("");
  }
  
  const getDistrict = (district) => {
    
    setdistrict(district);
  }

  


  return (
  <div className="App" >
    <h1 >Corona Tracker </h1>
     <Cards data = {
      data
    }
    district = {
      district
    } > </Cards>
     <DistrictPicker data = {
      data
    }
    rawdata = {
      rawdata
    }
    district = {
      district
    }
    getDistrict = {
      getDistrict
    }
    getState = {
      getState
    } /> 
     
    <Graph data = {
      data
    }
    district = {
      district
    } /> 



    {/* removed due to api issues */}

{/* 
    <News
     data = {
      data
    }
    district = {
      district
    }
    /> */}




  </div>
  );
}


export default App;
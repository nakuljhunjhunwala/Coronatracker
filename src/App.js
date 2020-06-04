import React, {
  useState,
  useEffect
} from 'react';
import './App.css';
import Cards from './components/Card';
import Graph from './components/Graph';
import DistrictPicker from './components/DistritPicker';
import {
  fetchData
} from './components/Api';

const App = () => {

  const [data, setData] = useState({});

  const [district, setdistrict] = useState('Thane');

  useEffect(() => {

    const getData = async () => {
      const mdata = await fetchData();
      setData(mdata);
    }

    getData();

  }, []);

  const getDistrict = (district) => {
    setdistrict(district);
  }


  return (
  <div className="App" >
    <h1 >Maharastra Corona Tracker </h1>
     <Cards data = {
      data
    }
    district = {
      district
    } > </Cards>
     <DistrictPicker data = {
      data
    }
    getDistrict = {
      getDistrict
    } /> 
     
    <Graph data = {
      data
    }
    district = {
      district
    } /> 
  </div>
  );
}


export default App;
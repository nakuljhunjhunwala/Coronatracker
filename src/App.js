import React, {
  useState,
  useEffect
} from 'react';
import './App.css';
import DailyVisitor from './components/DailyVisitor';
import Cards from './components/Card';
import Bcard from './components/Bcard';
import Graph from './components/Graph';
// import News from './components/News';
import DistrictPicker from './components/DistritPicker';
import {
  fetchData
} from './components/Api';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';





const App= ()=>{
  return(
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/bhiwandi" exact component={Bhiwandi} />
      </Switch>
    </Router>
  );
}





const Bhiwandi = ()=>{
  return(

   
      <div className="App" >
        <h1 >Bhiwandi Corona Tracker </h1>
    <DailyVisitor></DailyVisitor>
        {/* <Bcard></Bcard> */}
        <h2>Site Under Maintainence </h2>
        <a href="/">Main Page</a>

        <center><h3>Managed and created by <br></br>Nakul Jhunjhunwala</h3></center>

        </div>
  
  );
}






const Home = () => {
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
    <DailyVisitor></DailyVisitor>
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

    <a href="/bhiwandi">Check Bhiwandi Data</a>
     
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

<center><h3>Managed and created by <br></br>Nakul Jhunjhunwala</h3></center>


  </div>
  );
}


export default App;
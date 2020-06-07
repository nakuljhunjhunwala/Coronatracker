import React, {useState,useEffect} from 'react';
import {
    fetchCount
  } from './Api';
  import CountUp from 'react-countup';


const DailyVisitor = () => {

    const [count, setcount] = useState("")

    
    useEffect(() => {
  
      const getData = async () => {
        const mdata = await fetchCount();
       
        setcount(mdata.value);
        
      }
  
      getData();
  
    }, [setcount]);




    return(
    <h3 style={{marginBottom:"20px"}}>VISITORS: {count === "" ? "Calculating" : <CountUp start = {
        0
    }
    end = {
     count
    }
    duration = {
        2.5
    }
    seperator = "," />}</h3>
    )
    

}

export default DailyVisitor;
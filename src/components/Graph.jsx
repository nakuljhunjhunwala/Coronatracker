import React,{useState,useEffect} from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    fetchZone
  } from './Api';


const Graph = ({data , district})=> {

    const [zone, setzone] = useState("");
    
    useEffect(() => {

        const getData = async () => {
          const mdata = await fetchZone();
          setzone(mdata.zones);
        }
    
        getData();

      
       
    
      }, [setzone]);

    if(!data[district]){
        return("Loading...")
       }
      
    let colo = zone.filter((z)=> z.district === district)
      console.log(colo)
     

      
   const {active , deceased, recovered} = data[district];

    const Piechart = (
        <Doughnut
        height={300}
        data={{
            labels:["Active" , "Death" , "Recovered"],
            datasets:[
                {
                    label: 'Rainfall',
                    backgroundColor: [
                      '#FFFF00',
                      '#FF0000',
                      '#008000',
                    ],
                    data: [active , deceased, recovered],
                    borderColor: 'rgb(0, 0, 0)',
                 }
            ]
        }}
        />
    );
    return(
        <div style={{marginBottom:"100px"}}>
            <center><h2 style={{color : colo[0].zone}}>
              {colo[0].zone} Zone</h2></center>
            {Piechart}
        </div>
    )
}

export default Graph;
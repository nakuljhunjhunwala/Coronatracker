import React from 'react';
import { Doughnut } from 'react-chartjs-2';


const Graph = ({data , district})=> {

    if(!data[district]){
        return("")
       }

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
            {Piechart}
        </div>
    )
}

export default Graph;
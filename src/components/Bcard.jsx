import React, {useState, useEffect} from 'react';
import {
    Card,
    CardContent,
    Typography,
    Grid
} from '@material-ui/core';
import CountUp from 'react-countup';
import './Card.css';
import {
    fetchBhiwandi
  } from './Api';

const Bcard = () => {



    const [data, setdata] = useState("");
    
    useEffect(() => {

        const getData = async () => {
          const mdata = await fetchBhiwandi();
          setdata(mdata);
        }
    
        getData();

      
       
    
      }, [setdata]);


    if (!data) {
        return ("loading...")
    }

    return ( 
        <div className = "container" >
        <Grid container spacing = {
            3
        }
        justify = "center" >

        <Grid item component = {
            Card
        }
        xs = {
            12
        }
        md = {
            5
        }
        className = "card confirmed" >
        <CardContent >
        <Typography gutterBottom > Confirmed </Typography>
        <Typography variant = "h5" >
        <CountUp start = {
            0
        }
        end = {
            data.confirmed
        }
        duration = {
            2.5
        }
        seperator = "," />
        </Typography> 
        </CardContent> 
        </Grid>

        <Grid item component = {
            Card
        }
        xs = {
            12
        }
        md = {
            5
        }
        className = "card active" >
        <CardContent >
        <Typography gutterBottom > Active </Typography> 
        <Typography variant = "h5" >
        <CountUp start = {
            0
        }
        end = {
           data.active
        }
        duration = {
            2.5
        }
        seperator = "," />
        </Typography> 
        </CardContent> 
        </Grid>


        <Grid item component = {
            Card
        }
        xs = {
            12
        }
        md = {
            5
        }
        className = "card death" >
        <CardContent >
        <Typography gutterBottom > Death </Typography> <Typography variant = "h5" >
        <CountUp start = {
            0
        }
        end = {
            data.death
        }
        duration = {
            2.5
        }
        seperator = "," />
        </Typography> 
        </CardContent> 
        </Grid>

        <Grid item component = {
            Card
        }
        xs = {
            12
        }
        md = {
            5
        }
        className = "card recovered" >
        <CardContent >
        <Typography gutterBottom > Recovered </Typography> <Typography variant = "h5" >
        <CountUp start = {
            0
        }
        end = {
          data.recovered
        }
        duration = {
            2.5
        }
        seperator = "," />
        </Typography>  </CardContent> </Grid>

        </Grid>

        </div>
    )
}

export default Bcard;
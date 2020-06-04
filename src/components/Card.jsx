import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    Grid
} from '@material-ui/core';
import CountUp from 'react-countup';
import './Card.css';

const Cards = ({
    data,
    district
}) => {

    if (!data[district]) {
        return ("Loading...")
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
            data[district].confirmed
        }
        duration = {
            2.5
        }
        seperator = "," />
        </Typography> 
        <Typography variant = "body2" >
        <CountUp start = {
            0
        }
        end = {
            data[district].delta.confirmed
        }
        duration = {
            2.5
        }
        seperator = "," /> + </Typography> 
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
            data[district].active
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
            data[district].deceased
        }
        duration = {
            2.5
        }
        seperator = "," />
        </Typography> <Typography variant = "body2" >
        <CountUp start = {
            0
        }
        end = {
            data[district].delta.deceased
        }
        duration = {
            2.5
        }
        seperator = "," />
        + </Typography> 
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
            data[district].recovered
        }
        duration = {
            2.5
        }
        seperator = "," /
        >
        </Typography> <Typography variant = "body2" >
        <CountUp start = {
            0
        }
        end = {
            data[district].delta.recovered
        }
        duration = {
            2.5
        }
        seperator = "," 
        />
        + </Typography> </CardContent> </Grid>

        </Grid>

        </div>
    )
}

export default Cards;
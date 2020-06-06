import React, {useState,useEffect} from 'react';
import {Card,CardActionArea,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import {
    fetchNews
  } from './Api';
  import './News.css';
const News = ({data , district}) => {

    const [news, setnews] = useState("")

    
  useEffect(() => {

    const getData = async () => {
      const mdata = await fetchNews();
     
      setnews(mdata.articles);
      
    }

    getData();

  }, [setnews]);
  

  if(news === ""){
    return ("")
  }


  if (!data[district]) {
    return ("")
}

  const newsData = news.map((n , i)=>
  <Card className="root" key={i}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={n.urlToImage}
          title={n.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3">
            {n.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {n.description}
          </Typography>
          <Typography gutterBottom variant="body2" component="h3">
            Source: {n.source.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={n.url} target="_blank">
          Learn More
        </Button>
      </CardActions>
    </Card>)

  return(
  <div className="ncontainer">
    <div className="news-container">

      {newsData}
    </div>
  </div>
  )
}

export default News;
import React from 'react'
import {Col, ListGroup, ListGroupItem, Image} from 'react-bootstrap/lib/'

const NewsFeed = ({newsProvider,newsFeed}) => {
  let newsArray = [];
  {newsFeed === null ? console.log("the newsFeed is null") :
    newsArray = newsFeed.map((news,index) => {
      return (
        <Col sm={12} md={12} key={index}>
          <ListGroupItem >
            <Image src={news.urlToImage} responsive={true} rounded={true} />
            <h3>{news.title}</h3>
            <p>{news.description}</p>
            <a href={news.url} target="_blank">Read More</a>

          </ListGroupItem>
        </Col>
      )
    })
  }
  return(
    <Col sm={12} md={12}>
      <ListGroup>
        {newsArray}
      </ListGroup>
    </Col>
  )
}

export default NewsFeed;

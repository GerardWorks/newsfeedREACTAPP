import React from 'react'
import {Col, ListGroup, ListGroupItem } from 'react-bootstrap/lib/'

const NewsList = ({newsList, retrieveNews}) => {
  let newsProvider = [];
  {newsList === null ? console.log("newsList is null") :
    newsProvider = newsList.map(provider => {
      return (
        <Col sm={12} md={12} key={provider.name}>
          <ListGroupItem className="newsList" onClick={retrieveNews.bind(null,provider.id)}>{provider.name}</ListGroupItem>
        </Col>
      )
    })
    return (
      <Col sm={12} md={12}>
        <ListGroup>
          {newsProvider}
        </ListGroup>
      </Col>
    )
  }
}

export default NewsList

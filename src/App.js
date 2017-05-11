import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
import NewsList from './components/newslist'
import NewsFeed from './components/newsfeed'
import {Col} from 'react-bootstrap/lib/'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newsProvider: [],
      newsFeed: [],
      selectedNews: 'techcrunch'
    }
    this.loadNewsProvider = this.loadNewsProvider.bind(this);
    this.loadNewsFeed = this.loadNewsFeed.bind(this);
    this.changeNewsProvider = this.changeNewsProvider.bind(this);
  }
  loadNewsProvider(url){
    fetch(url)
    .then(response => {
      return response.json();
    }).then(json => {
      console.log(json.sources)
      this.setState({
        newsProvider: json.sources
      })
    }).catch(err => {
      console.log("There was a problem with retrieving news providers", err)
    })
  }
  loadNewsFeed(url){
    fetch(`${url}&source=${this.state.selectedNews}`)
    .then(response => {
      return response.json();
    }).then(json => {
      this.setState({
        newsFeed: json.articles
      })
    }).catch(err => {
      console.log("There was a problem with retrieving news feeds", err)
    })
  }
  changeNewsProvider(provider){
    fetch(`${this.props.newsUrl}?source=${provider}&language=en&apiKey=faae4403a23e41e18e6afc7792a41bec`)
    .then(response => {
      return response.json();
    }).then(json => {
      console.log(json.articles)
      this.setState({
        newsFeed: json.articles,
        selectedNews: provider
      })
    }).catch(err => {
      console.log("There was a problem with retrieving news feeds", err)
    })
  }
  componentWillMount(){
    this.loadNewsProvider(`${this.props.baseUrl}/?apiKey=faae4403a23e41e18e6afc7792a41bec`)
    this.loadNewsFeed(`${this.props.newsUrl}?sortBy=latest&apiKey=faae4403a23e41e18e6afc7792a41bec`)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Global News Feed</h2>
        </div>
      <div className="container-fluid">
        <div className="col-sm-2 col-md-3" >
          <NewsList newsList={this.state.newsProvider} retrieveNews={this.changeNewsProvider} />
        </div>
        <div className="col-sm-10 col-md-9">
          <h2 id="newsProvider">{this.state.selectedNews}</h2>
          <NewsFeed newsFeed={this.state.newsFeed}/>
        </div>
      </div>
      </div>
    );
  }
}

export default App;

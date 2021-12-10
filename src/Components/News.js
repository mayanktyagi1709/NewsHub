import React, { Component } from "react";
import NewsItem from "./NewsItem";
export default class News extends Component {

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0d5e789c790247199b9152d13f945bd9";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles});
  }

  constructor()
  {
    // super class - use to call the constructor of the parent class
    super();
    this.state = {
      articles: []
    }
  }
  render() {
    return (
      <div className="container">
        <h1>NewsHub - Top Headlines</h1>
        <div className="row my-3">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
            <NewsItem
              title={element.title.slice(0,45)}
              description={element.description.slice(0, 88)}
              newsURL={element.url}
              imageURL={element.urlToImage}/>
            </div>  
          })}
          
        </div>
      </div>
    );
  }
}

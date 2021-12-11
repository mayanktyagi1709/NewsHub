import React, { Component } from "react";
import NewsItem from "./NewsItem";
export default class News extends Component {

  constructor() {
    // super class - use to call the constructor of the parent class
    super();
    this.state = {
      articles: [],
      page: 1
    };
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=0d5e789c790247199b9152d13f945bd9&page=1&pageSize=18";

    // fetching url using fetch() API
    let data = await fetch(url);

    // converting the fetched data into json format
    let parsedData = await data.json();
    // setting the state of "articles" as parsedData
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
  }

  handlePrev = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0d5e789c790247199b9152d13f945bd9&page=${this.state.page-1}&pageSize=18`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ 
        articles: parsedData.articles,
        page: this.state.page-1
      });
  };

  handleNext = async () => {
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/18))
    {
      
    }
    else
    {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0d5e789c790247199b9152d13f945bd9&page=${this.state.page+1}&pageSize=18`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ 
        articles: parsedData.articles,
        page: this.state.page+1
      });
    }
  };

  render() {
    return (
      <div className="container">
        <h1>NewsHub - Top Headlines</h1>
        <div className="row my-3">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  newsURL={element.url}
                  imageURL={element.urlToImage}
                />
              </div>
            );
          })}
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page<= 1}
              type="button"
              onClick={this.handlePrev}
              className="btn btn-primary mx-3"
            >
              &laquo; Previous
            </button>
            <button
              type="button"
              onClick={this.handleNext}
              className="btn btn-primary"
            >
              Next &raquo;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

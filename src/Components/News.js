import React, { Component } from "react";
import PropTypes from 'prop-types'
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
export default class News extends Component {

  static defaultProps = {
    pageSize: 6,
    country: 'in',
    category: 'general'
  }

  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
  }

  constructor() {
    // super class - use to call the constructor of the parent class
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0d5e789c790247199b9152d13f945bd9&page=1&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true
    })
    // fetching url using fetch() API
    let data = await fetch(url);

    // converting the fetched data into json format
    let parsedData = await data.json();
    // setting the state of "articles" as parsedData
    this.setState({ 
      articles: parsedData.articles, 
      totalResults: parsedData.totalResults,
      loading: false 
    });
  }

  handlePrev = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0d5e789c790247199b9152d13f945bd9&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      this.setState({
        loading: true
      })
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ 
        articles: parsedData.articles,
        page: this.state.page-1,
        loading: false
      });
  };

  handleNext = async () => {
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
    {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0d5e789c790247199b9152d13f945bd9&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true
      });

      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ 
        articles: parsedData.articles,
        page: this.state.page+1,
        loading: false
      });
    }
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center" style={{margin:"40px"}}>NewsHub - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row my-3">
          {!this.state.loading && this.state.articles.map((element) => {
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
              disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
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

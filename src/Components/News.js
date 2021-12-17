import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types'
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  // document.title = `${capitalize(props.category)} - NewsHub;

  const capitalize = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const updateNews = async ()=>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    // fetching url using fetch() API
    let data = await fetch(url);
    props.setProgress(30);
    // converting the fetched data into json format
    let parsedData = await data.json();
    // setting the state of "articles" as parsedData
    props.setProgress(70);

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)

    props.setProgress(100);

  }
  useEffect(() => {
    updateNews();
  }, [])
 

  const fetchMoreData = async()=>{
    setPage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }

  return (
    <>
      <h1 className="text-center" style={{margin:"40px"}}>Top Headlines - {capitalize(props.category)}</h1>
      <hr/>
      {loading && <Spinner/>}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner/>}
      >
        <div className="container y-3">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    source={element.source.name}
                    description={element.description}
                    newsURL={element.url}
                    imageURL={element.urlToImage}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );

}

News.defaultProps = {
  pageSize: 6,
  country: 'in',
  category: 'general'
}

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string
}

export default News

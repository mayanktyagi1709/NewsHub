import React, { Component } from "react";
import NewsItem from "./NewsItem";
export default class News extends Component {

  articles = [
    {
      "source": {
      "id": "cbs-news",
      "name": "CBS News"
      },
      "author": "Christopher Christopher",
      "title": "China's lunar rover spots mysterious \"hut\" on far side of moon - CBS News",
      "description": "The rover will spend the next few months trying to find out what the cube-shaped object really is.",
      "url": "https://www.cbsnews.com/news/moon-china-lunar-rover-mystery-hut/",
      "urlToImage": "https://cbsnews3.cbsistatic.com/hub/i/r/2021/12/07/313eda39-b809-4f5d-a6e1-ebf9dff9a677/thumbnail/1200x630/21c6068f7151234cce72eac4bfd2c263/screen-shot-2021-12-07-at-11-28-35-am.png",
      "publishedAt": "2021-12-08T12:34:14Z",
      "content": "China's Yutu 2 rover has spotted a mysterious object described as a \"hut\" or \"house\" on the far side of the moon, according to a recent log of the lunar rover's activities.  \r\nYutu 2 encountered the … [+1656 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "WPBF West Palm Beach"
      },
      "author": "Brandon Lopez",
      "title": "Omicron variant detected in Florida, health officials say - WPBF West Palm Beach",
      "description": "Health officials confirmed Tuesday that the omicron variant of COVID-19 has been detected in Florida.",
      "url": "https://www.wpbf.com/article/omicron-florida-variant-detected/38452065",
      "urlToImage": "https://kubrick.htvapps.com/vidthumb/0fea2145-5c80-4f00-8971-73410a617d4e/0fea2145-5c80-4f00-8971-73410a617d4e_image.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
      "publishedAt": "2021-12-08T12:29:00Z",
      "content": "Health officials confirmed Tuesday that the omicron variant of COVID-19 has been detected in Florida.\r\nRELATED: Tracking COVID-19 in Florida\r\nThe variant was detected at a VA hospital in Tampa.\r\nAcco… [+428 chars]"
      },
      {
      "source": {
      "id": "reuters",
      "name": "Reuters"
      },
      "author": null,
      "title": "UK PM apologises for video of staff joking about Christmas lockdown party - Reuters UK",
      "description": "British Prime Minister Boris Johnson apologised on Wednesday after a video surfaced showing his staff laughing and joking about a gathering in Downing Street during a Christmas COVID lockdown last year when such festivities were banned.",
      "url": "https://www.reuters.com/world/uk/uk-pm-johnson-under-fire-over-christmas-lockdown-party-2021-12-08/",
      "urlToImage": "https://www.reuters.com/resizer/6k_CU300k7cFATCPZ-6_8SOFOvg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SXTSXRUWKJJU7HUGDNX27V2RHA.jpg",
      "publishedAt": "2021-12-08T12:23:00Z",
      "content": "LONDON, Dec 8 (Reuters) - British Prime Minister Boris Johnson apologised on Wednesday after a video surfaced showing his staff laughing and joking about a gathering in Downing Street during a Christ… [+3419 chars]"
      },
      {
      "source": {
      "id": "the-wall-street-journal",
      "name": "The Wall Street Journal"
      },
      "author": "Joe Wallace",
      "title": "Stock Futures Point to More Gains on Wall Street - The Wall Street Journal",
      "description": "European natural-gas prices jump on reports that Nord Stream 2 could be shut if Russia invades Ukraine",
      "url": "https://www.wsj.com/articles/global-stock-markets-dow-update-12-08-2021-11638953454",
      "urlToImage": "https://images.wsj.net/im-447992/social",
      "publishedAt": "2021-12-08T12:23:00Z",
      "content": "U.S. stock futures rose and Treasury yields slipped as investors assessed the uncertain effects of the Omicron variant on the economy.Futures the S&amp;P 500 gained 0.5% Wednesday, a day after the be… [+3624 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Germany's Olaf Scholz takes over from Merkel as chancellor - BBC News",
      "description": "Olaf Scholz is sworn in as chancellor, leading a three-party coalition after 16 years of Merkel rule.",
      "url": "https://www.bbc.com/news/world-europe-59575773",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6F7D/production/_122014582_scholzoath.jpg",
      "publishedAt": "2021-12-08T11:55:22Z",
      "content": "Image caption, The new chancellor was sworn in by the president of the Bundestag during a brief ceremony\r\nOlaf Scholz has been sworn in as Germany's new chancellor, bringing to an end Angela Merkel's… [+4577 chars]"
      },
      {
      "source": {
      "id": "cnn",
      "name": "CNN"
      },
      "author": "Lisa Respers France, CNN",
      "title": "Nick Cannon mourns loss of his youngest child to a brain tumor - CNN",
      "description": "Television host and actor Nick Cannon shared with his talk show audience on Tuesday that his youngest child, Zen, has died of a brain tumor",
      "url": "https://www.cnn.com/2021/12/07/entertainment/nick-cannon-zen-obit-wellness/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211207122940-nick-cannon-file-101321-restricted-super-tease.jpg",
      "publishedAt": "2021-12-08T10:43:00Z",
      "content": null
      }, 
  ]

  constructor()
  {
    // super class - use to call the constructor of the parent class
    super();
    this.state = {
      articles: this.articles
    }
  }
  render() {
    return (
      <div className="container">
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

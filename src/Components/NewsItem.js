import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageURL, newsURL, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card my-3" style={{ width: "18rem" }}>
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex: "1"}}>
             {source}
          </span>
          <img src={imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>

            <p className="card-text">{description}</p>
            <p class="card-text">
              <small class="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            {/* target="_blank opens the link in new tab" */}
            <a
              rel="noreferrer"
              href={newsURL}
              target="_blank"
              className="btn btn-primary btn-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

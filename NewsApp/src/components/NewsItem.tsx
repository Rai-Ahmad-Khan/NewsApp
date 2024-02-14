import React, { Component } from "react";

export class NewsItem extends Component<Props> {
  render() {
    let { title, description, imageUrl, newsUrl, auther, date, source } = this.props;
    return (
      <div>
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <span className="position-absolute translate-middle badge rounded-pill bg-success"
          style={{left: "89%", zIndex: "1", top:"10px"}}>
           {source}
          </span>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!auther ? "Unknown": auther } on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsItem;

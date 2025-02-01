import React, { Component } from 'react';

export class NewsItem extends Component {
  constructor() {
    super();
  }

  render() {
    let { title, description, imageUrl, newsUrl } = this.props;

    return (
      <div className='my-3'>
        <div className="card">
          <img 
            src={imageUrl ? imageUrl : "https://image.cnbcfm.com/api/v1/image/108087359-1736978907351-gettyimages-2193501448-a9i04848.jpeg?v=1736979073&w=1920&h=1080"} 
            className="card-img-top" 
            alt="News"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target='_blank' rel='noopener noreferrer' className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

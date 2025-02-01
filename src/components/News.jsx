import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    pageSize: 5,
    category: 'general',
  }


  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }
  fetch_data = async (newPage) => {
    this.setState({loading: true});
      let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=d348eb1b1a4c4d27abbf22167e98af7a&page=${newPage}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ articles: parsedData.articles, loading: false , totalResults: parsedData.totalResults, page: newPage});
  }

  handlePrevClick = () => {
    let newPage = this.state.page - 1;
    this.fetch_data(newPage);
  }

  handleNextClick = () => {
    let newPage = this.state.page + 1;
    this.fetch_data( newPage);
  }

  componentDidMount() {
    this.fetch_data(this.state.page);
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>Top Headlines</h2>

        {this.state.loading &&<Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        {!this.state.loading && (
          <div className="container d-flex justify-content-center my-5">
            <button type="button" disabled={this.state.page <= 1} className="btn btn-dark mx-3" onClick={this.handlePrevClick}>
              &larr; Previous
            </button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 5)} type="button" className="btn btn-dark mx-3" onClick={this.handleNextClick}>
              Next &rarr;
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default News;

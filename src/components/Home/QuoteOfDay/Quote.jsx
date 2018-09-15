import React, { Component } from "react";
import "./Quote.css";
import axios from "axios";

const QUOTE_API_URL = "https://quotes.rest/qod";

class Quote extends Component {
  constructor() {
    super();
    this.state = {};
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote = () => {
    axios.get(QUOTE_API_URL).then(response => {
      const quote = response.data.contents.quotes[0].quote;
      const author = response.data.contents.quotes[0].author;
      this.setState({ quote: quote });
      this.setState({ author: author });
    });
  };

  componentDidMount() {
    this.getQuote();
  }

  render() {
    return (
      <div className="QuoteContainer">
        <h3>Quote of the Day:</h3>
        <p>{this.state.quote}</p>
        <p>- {this.state.author}</p>
      </div>
    );
  }
}

export default Quote;

import React, { Component } from 'react';
import { Link } from 'react-router';

/**
 * @class
 * @name Book
 * @description Book definition
 */
export class Book extends Component {
  constructor(props) {
    super(props);
  }

  authorsToString(authors) {
    if (authors) {
      return authors.map((author) => author).join(' ')
    }

    return '';
  }

  getThumbnail(thumbs) {
    if (thumbs) {
      if (thumbs.smallThumbnail) {
        return thumbs.smallThumbnail;
      }

      if (thumbs.thumbnail) {
        return thumbs.thumbnail;
      }
    }

    return '';
  }

  hightlightTerm(term, text) {
    let words = text.split(' ');

    return words.map((word, index) => {
      if (word.toLocaleLowerCase() === term.toLowerCase()) {
        return (
          <strong key={index}>{ word }</strong>
        );
      }

      return (
        <span key={index}> { word } </span>
      );
    });
  }

  render() {
    return (
      <div className="book">
        <header className="book__header">
          <Link to={`books/${this.props.book.id}`}>
            <h1 className="book__title">{ this.hightlightTerm(this.props.term, this.props.book.volumeInfo.title) }</h1>
          </Link>

          <small className="book__more-info">
            { this.authorsToString(this.props.book.volumeInfo.authors) }
          </small>
        </header>

        <section className="book__content row">
          <img className="book__content__image col-xs-6" src={ this.getThumbnail(this.props.book.volumeInfo.imageLinks) } />

          <p className="book__content__description col-xs-6">
            { this.props.book.searchInfo !== undefined
              ? <span dangerouslySetInnerHTML={{__html: this.props.book.searchInfo.textSnippet }}></span>
              : 'No description provied'
            }
          </p>
        </section>

        <button onClick={() => this.props.bookmark(this.props.book)}>Bookmark</button>
      </div>
    )
  }
}

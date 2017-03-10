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
      if (thumbs.thumbnail) {
        return thumbs.thumbnail;
      }

      if (thumbs.smallThumbnail) {
        return thumbs.smallThumbnail;
      }
    }

    return '';
  }

  hightlightTerm(term, text) {
    let words = text.split(' ');

    return words.map((word, index) => {
      if (word.toLocaleLowerCase() === term.toLowerCase()) {
        return `<strong key={index}> ${word}</strong>`
      }

       return word
    }).join(' ');
  }

  render() {
    return (

      <div className="book">
        <header className="book__header">
          <Link to={`books/${this.props.book.id}`}>
            <h1 className="book__title"
                dangerouslySetInnerHTML={{__html: this.hightlightTerm(this.props.term, this.props.book.volumeInfo.title) }}>
            </h1>
          </Link>
        </header>

        <section className="book__content row">
          <div className="col-lg-3">
            <img className="book__content__image" src={ this.getThumbnail(this.props.book.volumeInfo.imageLinks) } />
          </div>

          <div className="col-xs-9">
            <p className="book__content__author">
              { this.authorsToString(this.props.book.volumeInfo.authors) }
            </p>

            <p className="book__content__description ">
              { this.props.book.searchInfo !== undefined
                ? <span dangerouslySetInnerHTML={{__html: this.props.book.searchInfo.textSnippet }}></span>
                : 'No description provied'
              }
            </p>
          </div>
        </section>

        <button onClick={() => this.props.bookmark(this.props.book)}>Bookmark</button>
      </div>
    )
  }
}

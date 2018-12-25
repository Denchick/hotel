import React, { Component } from 'react';
import PropTypes from 'prop-types'


class NewsItem extends Component {
    render() {
        const {image, text} = this.props;

        return (
            <div className="footer-news-item">
                <a href="#">
                    <img src={image} width="70px" alt="" />
                    <p className="entry-title">{text}</p>
                </a>
            </div>
        );
    }
}

NewsItem.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string
}

export { NewsItem };
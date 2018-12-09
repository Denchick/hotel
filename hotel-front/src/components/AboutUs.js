import React, { Component } from 'react';
import PropTypes from 'prop-types'

class AboutUs extends Component {
    renderParagraphs = () => {
        return this.props.text.map(function(item, index) {
            return <p key={index}>{item}</p>
        });
    }

    render() {
        return (
            <div className="banner picture-inside">
                <div className="container">
                    <div className="about-us">
                        <h4>О нас</h4>
                        {this.renderParagraphs()}
                    </div>
                </div>
            </div>
        );
    }
}

AboutUs.propTypes = {
    text: PropTypes.arrayOf(PropTypes.string).isRequired
}

export { AboutUs }
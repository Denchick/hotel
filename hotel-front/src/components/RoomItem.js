import React, { Component } from 'react';
import PropTypes from 'prop-types'

class RoomItem extends Component {
    render() {
        const {title, description, image} = this.props;

        return (
            <div className="room-item">
                <figure>
                    <a href="#">
                        <img className="img-responsive" src={image} alt=""></img>
                    </a>
                </figure>
                <div className="text-box-item">
                    <h3 className="box-item-title">{title}</h3>
                    <p className="box-item-text">{description}</p>
                    <a href="#">
                        <div className="button-text big-button">Смотреть номер </div>
                    </a>
                </div>
            </div>
        );
    }
}

RoomItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export {RoomItem}
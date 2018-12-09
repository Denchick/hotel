import React, { Component } from 'react';
import { RoomItem } from './RoomItem';
import PropTypes from 'prop-types'

class Rooms extends Component {
    renderRooms = () => {
        const { roomsData } = this.props;
        
        return roomsData.map(item => {
            const {id, title, description, image} = item;
            return <RoomItem key={id} title={title} description={description} image={image} />
        })

    }

    render() {
        return (
            <div className="container">
                <div className="block-title">
                    <h2>Номера отеля</h2>
                    <p className="italic">
                        <em>Большой выбор номеров для комфортного отдыха </em>
                    </p>
                </div>

            <div className="hotel-rooms">
                {this.renderRooms()}
            </div>

        </div>
        );
    }
}

Rooms.propTypes = {
    roomsData: PropTypes.array.isRequired
}

export { Rooms }
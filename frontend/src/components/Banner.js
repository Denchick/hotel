import React, { Component } from 'react';


class Banner extends Component {
    render() {
        return (
            <div className="banner picture-outside">
                <div className="container">
                    <div className="welcoming-message">
                        <h2>Мы рады приветствовать Вас в нашем Отеле!</h2>
                        <a href="#rooms">
                            <div className="button-text">Номера отеля</div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export { Banner }
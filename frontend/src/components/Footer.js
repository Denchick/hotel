import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { NewsItem } from './NewsItem';

class Footer extends Component {

    renderContacts = () => {
        const { contacts } = this.props;

        return (
            <React.Fragment>
                <address>
                    <i className="fas fa-map-marker-alt"></i> {contacts.address}
                </address>
                <ul className="bottom-contacts">
                    <li><a href={contacts.telPhone}><i className="fas fa-phone"></i> {contacts.formattedPhone}</a></li>
                    <li><a href={'mailto:'+ contacts.mail}><i className="fas fa-envelope"></i> {contacts.mail}</a></li>
                </ul>
                <div className="social-icons">
                    <a href="https://vk.com/" className="vk-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-vk"></i></a>
                    <a href="https://facebook.com/" className="facebook-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/" className="instagram-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                </div>
            </React.Fragment>
        )
    }

    renderNews = () => {
        return this.props.newsData.map(function(item) {
            return <NewsItem key={item.id} image={item.image} text={item.text} />
        })
    }

    renderCallForm = () => {
        return (
            <React.Fragment>
                <p>Оставьте номер Вашего телефона, и мы перезвоним вам.</p>
                <form className="call-form">
                    <input type="text" placeholder="Ваше имя" />
                    <input type="text" placeholder="Ваш телефон" />
                    <button className="button-text">
                        заказать звонок
                    </button>
                </form>
            </React.Fragment>
        )
    }

    render() {
        return (
            <footer>
            <div className="container">
                <div className="footer-item">
                    <h4>Контакты</h4>
                    {this.renderContacts()}
                </div>
    
                <div className="footer-item">
                    <h4>Новости и акции</h4>
                    {this.renderNews()}
                </div>
    
                <div className="footer-item">
                    <h4>Заказ обратного звонка</h4>
                    {this.renderCallForm()}
                </div>
            </div>
            <div className="copyright">&copy; Отель. Все права защищены.</div>
        </footer>
        );
    }
}

Footer.propTypes = {
    contacts: PropTypes.object.isRequired,
    newsData: PropTypes.array.isRequired
}

export { Footer }
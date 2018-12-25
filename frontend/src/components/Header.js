import React from 'react'
import PropTypes from 'prop-types'

class Header extends React.Component {
    render() {
        const { contacts } = this.props;

        return (
            <header>
                <div className="container">
                    <div className="top-contacts">
                        <a href={contacts.telPhone}><i className="fas fa-phone"></i> {contacts.formattedPhone}</a>
                        <a href={'mailto:' + contacts.mail}><i className="fas fa-envelope"></i> {contacts.mail}</a>
                    </div>
                    <div className="social-icons top" style={{float: 'right'}}>
                        <a href="https://vk.com/" className="vk-icon" ><i className="fab fa-vk"></i></a>
                        <a href="https://facebook.com/" className="facebook-icon"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/" className="instagram-icon"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </header>
        )
    }
}

Header.propTypes = {
    contacts: PropTypes.object.isRequired
}

export { Header }
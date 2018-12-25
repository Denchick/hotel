import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header'
import { Banner } from './components/Banner';
import { Rooms } from './components/Rooms';
import { AboutUs } from './components/AboutUs'
import { Footer } from './components/Footer';

class App extends Component {
  state = {
    settings: '',
    aboutUs: [],
    rooms: [],
    news: []
  };
  componentDidMount() {
    this.callApiSettings()
      .then(res => this.setState({ settings: res }))
      .catch(err => console.log(err));
    this.callApiAboutUs()
      .then(res => this.setState({ aboutUs: res.text }))
      .catch(err => console.log(err));
    this.callApiRooms()
      .then(res => this.setState({ rooms: res }))
      .catch(err => console.log(err));
    this.callApiNews()
      .then(res => this.setState({ news: res }))
      .catch(err => console.log(err));
  }
  callApiSettings = async () => {
    const response = await fetch('/api/settings');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  callApiAboutUs = async () => {
    const response = await fetch('/api/aboutUs');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  callApiRooms = async () => {
    const response = await fetch('/api/rooms');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }
  
  callApiNews = async () => {
    const response = await fetch('/api/news');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  render() {
    return (
      <React.Fragment>
        <Header contacts={this.state.settings} />
        <Banner />
        <Rooms roomsData={this.state.rooms}/>
        <AboutUs text={this.state.aboutUs} />
        <Footer contacts={this.state.settings} newsData={this.state.news} />
      </React.Fragment>
    );
  }
}

export default App;

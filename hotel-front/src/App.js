import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header'
import { Banner } from './components/Banner';
import { Rooms } from './components/Rooms';
import { AboutUs } from './components/AboutUs'
import { Footer } from './components/Footer';

class App extends Component {
  render() {
    const contacts = {
      phone: {
        tel: 'tel:+78005553535',
        formatted: '8-800-555-35-35'
      },
      mail: 'main@hotel.ru',
      address: 'Сочи, Курортный проспект, 100'
    }

    const rooms = [
      {
        id: 1,
        title: 'Стандарт',
        description: '"Стандарт"- (20 кв.м.) с удобствами (душ + санузел). Номер оборудован: двуспальной кроватью, креслом-кроватью (или односпальной кроватью), шкафом для одежды, тумбочками, журнальным столом, ТВ, холодильником и кондиционером.',
        image: '/images/standard_room.jpg'
      },
      {
        id: 2,
        title: 'Семейный',
        description: 'Просторные однокомнатные номера, в некоторых номерах имеется декоративная перегородка, отделяющая спальную зону от гостиной. Из окон номеров открываются виды на бассейн либо на курортный бульвар, либо на море.',
        image: '/images/standard_room_family.jpg'
      },
      {
        id: 3,
        title: 'Джуниор сюит',
        description: 'Двухкомнатные номера повышенной комфортности. Из окон номеров открывается вид на курортный бульвар. В номерах окна с усиленной звукозащитой.',
        image: '/images/junior_suit.jpg'
      }
    ]

    const aboutUs = [
      'Отель расположен в лучшем районе города Сочи, курортном посёлке Джемете. Джемете славится просторными песчаными пляжами и местом для отдыха, где нет городской суеты.',
      'В шаговой доступности вся инфраструктура продуктовый магазин "Магнит", аптеки, различные кафе и остановки. А также детские развлечения аквапарк "Тики-Так", детский парк и дельфинарий "Немо". Прогулка до моря займёт не более 7 минут.',
      'Огороженная территория позволяет детям безопасно играть на детских площадках, в то время когда родители могут отдыхать в беседках в красивом, цветущем дворе.'
    ]

    const news = [
      {
        id: 1,
        image: '/images/news1.jpg',
        text: 'Открытие ресторана. Авторская кухня.'
      },
      {
        id: 2,
        image: '/images/news2.jpg',
        text: 'Новые приключенческие программы.'
      },
      {
        id: 3,
        image: '/images/news3.jpg',
        text: 'Новые номера отеля.'
      },
      {
        id: 4,
        image: '/images/news4.jpg',
        text: 'Открытие сезона 20!8.'
      }
    ]

    return (
      <React.Fragment>
        <Header contacts={contacts} />
        <Banner />
        <Rooms roomsData={rooms}/>
        <AboutUs text={aboutUs} />
        <Footer contacts={contacts} newsData={news} />
      </React.Fragment>
    );
  }
}

export default App;

import React from 'react';
import Header from './app/Header.js';
import Content from './app/Content.js';
import './App.css';

const rooms = [
  {
    img: 'http://thedesignsoc.com/subdomains/test/wp-content/uploads/Michael-Fiebrich-Crown-Tower-Manila-Asia-Pacific-Hotel-over-200-Rooms-Thumbnail.jpg',
    name: 'Beautiful Room'
  },
  {
    img: 'http://thedesignsoc.com/subdomains/test/wp-content/uploads/Michael-Fiebrich-Crown-Tower-Manila-Asia-Pacific-Hotel-over-200-Rooms-Thumbnail.jpg',
    name: 'Big Room'
  },
  {
    img: 'http://thedesignsoc.com/subdomains/test/wp-content/uploads/Michael-Fiebrich-Crown-Tower-Manila-Asia-Pacific-Hotel-over-200-Rooms-Thumbnail.jpg',
    name: 'Snapy Room'
  },
  {
    img: 'http://thedesignsoc.com/subdomains/test/wp-content/uploads/Michael-Fiebrich-Crown-Tower-Manila-Asia-Pacific-Hotel-over-200-Rooms-Thumbnail.jpg',
    name: 'Clean Room'
  },
  {
    img: 'http://thedesignsoc.com/subdomains/test/wp-content/uploads/Michael-Fiebrich-Crown-Tower-Manila-Asia-Pacific-Hotel-over-200-Rooms-Thumbnail.jpg',
    name: 'Huge Room'
  },
  {
    img: 'http://thedesignsoc.com/subdomains/test/wp-content/uploads/Michael-Fiebrich-Crown-Tower-Manila-Asia-Pacific-Hotel-over-200-Rooms-Thumbnail.jpg',
    name: 'Minimalist Room'
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      keyWordSearch: ""
    }
  }
  handleOnSearch = (keyword) => {
    this.setState({
      keyWordSearch: keyword
    });
  }
  render() {
    return (
      <div className="App">
        <Header className="App-header" rooms={rooms} onSearch={this.handleOnSearch} />
        <Content className="App-content" rooms={rooms} keyWordSearch={this.state.keyWordSearch} />
      </div>
    );
  }
}

export default App;

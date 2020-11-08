import { Component } from 'react';

import './App.scss';


import Navigation from '../navigation/Navigation'
import Hero from '../hero/Hero'
import HowItWorks from '../how_it_works/HowItWorks'
import Post from '../post/Post'


class App extends Component {

  
  constructor(props) {
      super(props);
      this.state = {};
      this.setMobile = this.setMobile.bind(this);
  }


  setMobile = () => {
      this.setState({
          mobile: window.innerWidth <= 900 ? true : false,
      })
  }

  isMobile = () => {
    return this.state.mobile;
  }

  componentDidMount() {
      this.setMobile();
      window.addEventListener("resize", this.setMobile);
  }


  componentWillUnmount() {
      window.removeEventListener("resize", this.setMobile);
  }



  render() {
    return (
      <div className="App">
        <Navigation mobile={this.isMobile()}/>
        <Hero mobile={this.isMobile()}/>
        <HowItWorks/>
        <Post/>
      </div>
    );
  }
  
}

export default App;

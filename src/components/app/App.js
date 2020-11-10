import { Component } from 'react';

import './App.scss';


import Navigation from '../navigation/Navigation'
import Hero from '../hero/Hero'
import HowItWorks from '../how_it_works/HowItWorks'
import Post from '../post/Post'
import Featured from '../featured/Featured'
import CallToAction from '../call_to_action/CallToAction'
import Footer from '../footer/Footer'


class App extends Component {

  
  constructor(props) {
      super(props);
      this.state = {mobile:false};
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
      window.addEventListener("resize", this.setMobile);
  }
  
  componentWillMount() {
    this.setMobile();
  }


  componentWillUnmount() {
      window.removeEventListener("resize", this.setMobile);
  }



  render() {
    return (
      <div className="App">
        <Navigation mobile={this.state.mobile}/>
        <Hero mobile={this.state.mobile}/>
        <HowItWorks/>
        <Post/>
        <Featured/>
        <CallToAction/>
        <Footer/>
      </div>
    );
  }
  
}

export default App;

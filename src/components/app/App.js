import { Component } from 'react';

import './App.scss';


import Navigation from '../navigation/Navigation'
import Hero from '../hero/Hero'
import HowItWorks from '../how_it_works/HowItWorks'
import Post from '../post/Post'
import Featured from '../featured/Featured'
import CallToAction from '../call_to_action/CallToAction'
import Footer from '../footer/Footer'
import Form from '../form/Form'


class App extends Component {

  
  constructor(props) {
      super(props);
      this.state = {mobile:false, formType: "register"};
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

  toggleForm = (type) => {
    this.setState({
      formType: type,
      formShow: !this.state.formShow
    })
  }


  


  render() {
    return (
      <div className="App">
        <Navigation toggleForm={this.toggleForm} mobile={this.isMobile()}/>
        <Hero mobile={this.isMobile()}/>
        <HowItWorks/>
        <Post toggleForm={this.toggleForm}/>
        <Featured/>
        <CallToAction/>
        <Footer/>
        {/* {this.state.formShow ? 
        <Form type={this.state.formType}/>
        : null} */}
        {this.state.formShow ? <Form toggleForm={this.toggleForm} type={this.state.formType} popup={true}/> : null}
        
      </div>
    );
  }
  
}

export default App;

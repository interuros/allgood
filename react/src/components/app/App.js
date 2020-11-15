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
      this.state = {mobile:false, formType: "register", isLoggedIn: false, user: false};
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

    /* logs user if token exists */
    fetch("http://localhost:3000/user/get", {
      headers: {
        'Content-Type': 'appliaction/json',
        Authorization: localStorage.getItem('token'),
      }
    })
    .then(response => response.text())
    .then(responseText => {
      
      if (responseText !== "Forbidden") {
        let data = JSON.parse(responseText);

        if (data.user) {
          this.setUser(data.user);
          this.setLoggedIn(true);
        }
      }
      
    })
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

  setLoggedIn = (bool) => {
    this.setState({isLoggedIn: bool});
  }


  setUser = (user) => {
    this.setState({user: user});
  }


  render() {
    return (
      <div className="App">
        <Navigation setUser={this.setUser} user={this.state.user} setLoggedIn={this.setLoggedIn} isLoggedIn={this.state.isLoggedIn} toggleForm={this.toggleForm} mobile={this.isMobile()}/>
        <Hero mobile={this.isMobile()}/>
        <HowItWorks/>
        {this.state.isLoggedIn === false ? <Post toggleForm={this.toggleForm}/> : ""}
        <Featured/>
        <CallToAction/>
        {this.state.formShow ? <Form setUser={this.setUser} setLoggedIn={this.setLoggedIn} toggleForm={this.toggleForm} type={this.state.formType} popup={true}/> : null}
        <Footer/>        
      </div>
    );
  }
  
}

export default App;

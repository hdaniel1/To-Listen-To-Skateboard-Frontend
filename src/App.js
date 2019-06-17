import React from 'react';
import {withRouter, Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import BacklogCard from './containers/BacklogCard'
import ProfileCard from './containers/ProfileCard'
import BacklogPage from './containers/BacklogPage'
import ProfilePage from './containers/ProfilePage'


class App extends React.Component {
    constructor() {
      super() 
      this.state = {
        currentUser:null
      }
    }
   
    componentDidMount() {
      fetch("http://localhost:3000/api/v1/users/1")
      .then(res => res.json())
      .then(user => {
        this.setState({
          currentUser:user
        })
      })
    }

    showBacklogPage = () => {
      this.props.history.push("/search")
    }

    showProfilePage = () => {
      this.props.history.push("/profile")
    }

    render() {
      return (
        
          <React.Fragment>
            {this.state.currentUser ? <NavBar user={this.state.currentUser}/> : null}
            <div className="ui inverted vertical masthead center aligned segment">
       
              <Route exact path="/" render={() => <BacklogCard handleClick={this.showBacklogPage}/>} />
              <Route exact path="/" render={() => <ProfileCard handleClick={this.showProfilePage}/>} />
              <Route exact path="/search" render={() => <BacklogPage />} />
              <Route exact path="/profile" render={() => <ProfilePage currentUser={this.state.currentUser}/>} />

            {/* <BacklogPage /> */}
            {/* {this.state.currentUser ? <ProfilePage currentUser={this.state.currentUser}/> : null} */}
            </div>
          </React.Fragment>
      );
    }
}

export default withRouter(App)
import React from 'react';
import {withRouter, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import BacklogCard from './containers/BacklogCard'
import ProfileCard from './containers/ProfileCard'
import BacklogPage from './containers/BacklogPage'
import ProfilePage from './containers/ProfilePage'
import {Card} from 'semantic-ui-react'



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
    //routes
    showBacklogPage = () => {
      this.props.history.push("/search")
    }

    showProfilePage = () => {
      this.props.history.push("/profile")
    }

    goBackHome = (event) => {
      debugger
      switch (event.target.innerText){
        case "Home":
          this.props.history.push("/")
          break;
        case "My Albums":
          this.showProfilePage()
          break;
        case "Search":
          this.showBacklogPage()
          break;
        default:
            this.props.history.push("/")
      }
    }

    render() {
      return (
        
          <React.Fragment>
            {this.state.currentUser ? <NavBar handleClick={this.goBackHome} user={this.state.currentUser}/> : null}
              <Card.Group >
                <Route exact path="/" render={() => <BacklogCard handleClick={this.showBacklogPage}/>} />
                <Route exact path="/" render={() => <ProfileCard handleClick={this.showProfilePage}/>} />
                <Route exact path="/search" render={() => <BacklogPage />} />
                <Route exact path="/profile" render={() => <ProfilePage currentUser={this.state.currentUser}/>} />
              </Card.Group>
          </React.Fragment>
      );
    }
}

export default withRouter(App)
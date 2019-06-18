import React from 'react';
import {withRouter, Route, Redirect, Switch} from 'react-router-dom'
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
      switch (event.target.innerText){
        case "Home":
          this.props.history.push("/home")
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
               {this.state.currentUser ? <NavBar handleClick={this.goBackHome} user={this.state.currentUser} /> : <Redirect to="/home" />}}
               <Switch>
                  <Route exact path="/home" render={() => 
                      <Card.Group >
                          <BacklogCard handleClick={this.showBacklogPage}/>
                          <ProfileCard handleClick={this.showProfilePage}/>
                      </Card.Group>
                    }/>
                  <Route exact path="/search" render={() => <BacklogPage />} />
                  <Route exact path="/profile" render={() => <ProfilePage currentUser={this.state.currentUser}/>} />
                  <Route path="*" render={() => <Redirect to="/home" />} />
              </Switch>
          </React.Fragment>
      );
    }
}

export default withRouter(App)
import React from 'react'
import AlbumList from './AlbumList'


export default class ProfilePage extends React.Component {
    constructor() {
        super()
        this.state = {
            backlogAlbums:[]
        }
    }

     //api calls

    //remove album from backlog
    removeFromBacklog = (album) => {
        //remove the album from array of backlog albums so it's removed without refresh (Find a way to do this as non-optomistic rendering)
        let backlogAlbumsCopy = this.state.backlogAlbums.filter(albumObj => album !== albumObj)
        this.setState({backlogAlbums: backlogAlbumsCopy}, () =>  alert("Album Removed from Backlog!"))
        fetch(`http://localhost:3000/api/v1/user_albums/${album.userAlbumId}`, {method: "DELETE"})
    }

    fetchMyAlbums() {

        fetch(`http://localhost:3000/api/v1/user_albums?user_id=${this.props.currentUser.id}`)
        .then(res => res.json())
        .then(userAlbums => userAlbums.forEach(userAlbum => {
            let backlogAlbumsCopy = this.state.backlogAlbums 
            //get the album info for the userAlbum + userAlbum ID (for deletion and updating purposes)
            userAlbum["album"].userAlbumId = userAlbum["id"]
            backlogAlbumsCopy.push(userAlbum["album"])
            this.setState({
                backlogAlbums: backlogAlbumsCopy
            })
        }))
    }

    //lifecycle method(s)

    componentDidMount() {
        this.fetchMyAlbums()
    }


    render() {
        return(
            <React.Fragment>
                {this.state.backlogAlbums.length > 0 ? <AlbumList removeFromBacklog={this.removeFromBacklog} albums={this.state.backlogAlbums} /> : null}
            </React.Fragment>
        )
    }
}
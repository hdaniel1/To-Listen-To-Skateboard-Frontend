import React from 'react'
import Searchbar from '../components/Searchbar'
import AlbumList from './AlbumList'

export default class BacklogPage extends React.Component {
    constructor() {
        super()
        this.state = {
            searchTerm:"",
            albums:[]
        }
    }

    //api calls

    //add album to user's backlog
    addToBacklog = (album) => {
        fetch("http://localhost:3000/api/v1/user_albums", {
            method: "POST", 
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                user_id: 1,
                album_id: album.id
            })
        })
        .then(res => res.json())
        .then(response => {
            if (response.message === "Already added") {
                alert("You've already added this album to your backlog!")
            }
            else {
                alert("Album Added to Backlog!")
            }
        })
    }

    //get all albums in the db
    fetchAlbums() {
        fetch("http://localhost:3000/api/v1/albums")
        .then(res => res.json())
        .then(albums => {
            this.setState({albums: albums})
        })
    }

    //state setting method(s)
    changeSearchTerm = (searchPhrase) => {
        this.setState({searchTerm:searchPhrase})
        fetch("http://localhost:3000/api/v1/albums")
    }

    changeAlbumToShow = (album) => {
        this.setState({albumToShow: album})
    }

    //lifecycle method(s)
    componentDidMount() {
        this.fetchAlbums()
    }

    render() {
        return(
            <React.Fragment>
                <div id="searchbar">
                    <Searchbar setSearchTerm={this.changeSearchTerm}/>
                </div>
                <AlbumList 
                removeFromBacklog={this.removeFromBacklog}
                addToBacklog={this.addToBacklog}
                albums={this.state.albums.filter(album => 
                    album.title.toLowerCase().includes(this.state.searchTerm) ||
                    album.artist.toLowerCase().includes(this.state.searchTerm))} />
            </React.Fragment>
        )
    }
}
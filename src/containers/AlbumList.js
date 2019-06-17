import React from 'react'
import Album from '../components/Album'
import {Card} from 'semantic-ui-react'

export default class AlbumList extends React.Component {
    render(){
        return(    
           <Card.Group centered>
               {this.props.albums.map(album => 
               <Album 
                    key={album.id} 
                    albumInfo={album} 
                    albumToShow={this.props.albumToShow} 
                    removeFromBacklog={this.props.removeFromBacklog}
                    addToBacklog={this.props.addToBacklog}
                />)}
           </Card.Group>
        )
    }
}
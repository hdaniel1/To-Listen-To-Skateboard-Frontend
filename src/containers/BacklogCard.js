import React from 'react'
import {Card} from 'semantic-ui-react'

export default class BacklogCard extends React.Component {

    render() {
        return(
            <div className="ui link centered cards" id="backlog-card">
                <div className="card" onClick={() => this.props.handleClick()}>
                    <div className="image">
                            <img src="https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500" alt="background" />
                    </div>   
                    <div className="ui bottom attached button" >
                        <i className="music icon"></i>
                        Browse Albums
                    </div>           
                </div>
            </div>
        )
    }
}
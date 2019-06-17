import React from 'react'

export default class ProfileCard extends React.Component {

    render() {
        return(
            <div className="ui link centered cards" id="profile-card">
                <div className="card" onClick={() => this.props.handleClick()}>
                    <div className="image">
                            <img src="https://www.electronicbeats.net/app/uploads/2017/10/vinyl-records-stock-2017-billboard-1548.jpg" alt="background"/>
                    </div>          
                    <div className="ui bottom attached button">
                        <i className="headphones icon"></i>
                        My Profile
                    </div>          
                </div>
            </div>
        )
    }
}
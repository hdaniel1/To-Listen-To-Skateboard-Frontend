import React from 'react'


export default class Searchbar extends React.Component {
    render() {
        return(
            <input type="text" id="searchbar" placeholder="Search.." onChange={(event) => this.props.setSearchTerm(event.target.value)}>
            </input>
        )
    }
}


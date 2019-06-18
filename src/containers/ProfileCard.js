import React from 'react'
import {Card, Image, Button, Icon} from 'semantic-ui-react'

export default class ProfileCard extends React.Component {

    render() {
        return(
            <Card id="profile-card" >
                <Image src="https://www.electronicbeats.net/app/uploads/2017/10/vinyl-records-stock-2017-billboard-1548.jpg" alt="background" />
                <Card.Content>
                    <Button fluid onClick={() => this.props.handleClick()}>
                        <Icon name='headphones' />
                     My Albums
                    </Button>
                </Card.Content>
            </Card>
        )
    }
}
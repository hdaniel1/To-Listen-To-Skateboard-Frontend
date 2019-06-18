import React from 'react'
import {Card, Image, Button, Icon} from 'semantic-ui-react'

export default class BacklogCard extends React.Component {

    render() {
        return(
            <Card id="backlog-card" >
                <Image src="https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500" alt="background" />
                <Card.Content>
                    <Button fluid onClick={() => this.props.handleClick()}>
                        <Icon name='music' />
                     Browse Albums
                    </Button>
                </Card.Content>
            </Card>
        )
    }
}
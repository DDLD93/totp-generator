import React from 'react'
import Card from 'react-bootstrap/Card'

function Cards(props) {
    return (
        <div>
            <Card  style={{ width: '18rem', marginTop: '3px' }}>
            <Card.Body>
                <Card.Title className= "title">{props.title}</Card.Title>
                <Card.Subtitle style={{fontFamily: 'italic'}} className="mb-2 text-muted">{props.user}</Card.Subtitle>
                <Card.Text className="token">
                    {props.token}
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Cards

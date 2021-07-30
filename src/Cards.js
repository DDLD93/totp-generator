import React, { useRef } from 'react'
import Card from 'react-bootstrap/Card'

function Cards(props) {
  const token = useRef(null)
    function copy() {
    let tokens = token.current.innerText
        navigator.clipboard.writeText(tokens)
            alert("Copied the text: " + tokens);
      }
    return (
        <div>
            <Card onClick={copy} style={{ width: '18rem', marginTop: '3px' }}>
            <Card.Body>
                <Card.Title className= "title">{props.title}</Card.Title>
                <Card.Subtitle style={{fontFamily: 'italic'}} className="mb-2 text-muted">{props.user}</Card.Subtitle>
                <Card.Text ref={token} className="token">
                    {props.token}
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Cards

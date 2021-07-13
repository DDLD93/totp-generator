import Card from 'react-bootstrap/Card'


export default function Notes () {

    
    return (
        <div style={{position: 'relative', zIndex: '1', paddingTop:'90px'}}>

            <Note />
        </div>
        )
}

function Note(props) {
   // const [notes, setnotes] = useState([])

  return (
    <Card>
    <Card.Body>
      <Card.Title>Google keys</Card.Title>
      <Card.Text>tesyyy,m m mass  skjn    sdjknklmklm,.,ax      sakjnklmlkamlkmaskmklwmsaoijkqls;kaz,</Card.Text>
      <Card.Text>
        <small className="text-muted">created{props.time} ago!</small>
      </Card.Text>
    </Card.Body>
  </Card>
  )  
}

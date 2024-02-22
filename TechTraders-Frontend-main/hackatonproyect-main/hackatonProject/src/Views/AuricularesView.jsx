import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';


const AuricularesView = () => {
  return (
    <div className='m-5 mb-3'>

      <h1>¡Nuestros auriculares!</h1>

    <CardGroup className="g-5">
      <Card>
        <Card.Img variant="top" src="https://img.pccomponentes.com/articles/74/745960/2158-apple-airpods-3a-generacion-comprar.jpg" />
        <Card.Body>
          <Card.Title>Apple AirPods 3ª Generación</Card.Title>
          <Card.Text>
          Audio espacial con seguimiento dinámico de la cabeza.
          Ecualización adaptativa.
          Mayor duración de la batería.
          Chip de sonido: Apple H1.
          Estuche de carga MagSafe.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Alta Gama</ListGroup.Item>
        <ListGroup.Item>Stock: 5</ListGroup.Item>
        <ListGroup.Item>€189</ListGroup.Item>
      </ListGroup>
      </Card>

      <Card>
        <Card.Img variant="top" src="https://img.pccomponentes.com/articles/1078/10789942/1372-samsung-galaxy-buds-fe-auriculares-bluetooth-blancos-con-cancelacion-activa-de-ruido.jpg"/>
        <Card.Body>
          <Card.Title>Samsung Galaxy Buds FE</Card.Title>
          <Card.Text>
            Transmisión de voz perfecta.
            Batería de larga duración.
            Versión de Bluetooth: Bluetooth v5.2.
            Cancelación activa de ruido (ANC): Sí,
            Sensor Hall.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Alta Gama</ListGroup.Item>
        <ListGroup.Item>Stock: 5</ListGroup.Item>
        <ListGroup.Item>€80</ListGroup.Item>
      </ListGroup>
      </Card>

      <Card>
        <Card.Img variant="top" src="https://img.pccomponentes.com/articles/1001/10011246/1759-xiaomi-flipbuds-pro-auriculares-bluetooth-negros.jpg" />
        <Card.Body>
          <Card.Title>Xiaomi FlipBuds Pro</Card.Title>
          <Card.Text>
            Cancelación activa híbrida de ruido de 40 dB.
            Modo de transparencia doble.
            Tecnología de audio principal de Qualcomm.
            Altavoz de 11 mm superbalanceado.
            28 horas de reproducción total.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Alta Gama</ListGroup.Item>
        <ListGroup.Item>Stock: 5</ListGroup.Item>
        <ListGroup.Item>€160</ListGroup.Item>
      </ListGroup>
      </Card>
    </CardGroup>
     
      </div>
  )
}

export default AuricularesView
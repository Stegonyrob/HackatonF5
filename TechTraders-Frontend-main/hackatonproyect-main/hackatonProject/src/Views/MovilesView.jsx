import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';

const MovilesView = () => {
  return (
    <div className='m-5 mb-3'>

    <CardGroup className="g-5">
      <Card>
        <Card.Img variant="top" src="https://img.pccomponentes.com/articles/1077/10777839/140-apple-iphone-15-pro-128gb-titanio-natural-libre.jpg" />
        <Card.Body>
          <Card.Title>Iphone 15 Pro Max</Card.Title>
          <Card.Text>
          Pantalla: Super Retina XDR OLED de 6,7 pulgadas.
          Chip: A17 Pro con CPU y GPU mejoradas.
          Cámara: Sistema Pro con lentes de alta calidad.
          Dimensiones: Ancho: 7,67 cm, Alto: 15,99 cm, Grosor: 0,83 cm.
          Peso: 221 g.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Alta Gama</ListGroup.Item>
        <ListGroup.Item>Stock: 5</ListGroup.Item>
        <ListGroup.Item>€1600</ListGroup.Item>
      </ListGroup>
      </Card>

      <Card>
        <Card.Img variant="top" src="https://img.pccomponentes.com/articles/1080/10805957/1748-samsung-galaxy-s24-ultra-12-256gb-amarillo-titanium-libre.jpg"/>
        <Card.Body>
          <Card.Title>Samsung S24 Ultra</Card.Title>
          <Card.Text>
            Pantalla: Dynamic LTPO AMOLED 2X de 6,8 pulgadas.
            Chip: Snapdragon 8 Gen 3 con CPU de 8 núcleos.
            Cámara: Principal de 200 MP, periscopio telefoto de 50 MP, telefoto de 10 MP, ultrawide de 12 MP.
            Dimensiones: 162,3 x 79 x 8,6 mm.
            Peso: 232 g o 233 g.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Alta Gama</ListGroup.Item>
        <ListGroup.Item>Stock: 5</ListGroup.Item>
        <ListGroup.Item>€1579</ListGroup.Item>
      </ListGroup>
      </Card>

      <Card>
        <Card.Img variant="top" src="https://elchapuzasinformatico.com/wp-content/uploads/2024/02/Xiaomi-14-Ultra.jpg" />
        <Card.Body>
          <Card.Title>Xiaomi 14 Ultra</Card.Title>
          <Card.Text>
            Pantalla: Dynamic LTPO AMOLED 2X de 6,8 pulgadas.
            Chip: Snapdragon 8 Gen 3 con CPU de 8 núcleos.
            Cámara: Principal de 200 MP, periscopio telefoto de 50 MP, telefoto de 10 MP, ultrawide de 12 MP.
            Dimensiones: 162,3 x 79 x 8,6 mm.
            Peso: 232 g o 233 g.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Alta Gama</ListGroup.Item>
        <ListGroup.Item>Stock: 5</ListGroup.Item>
        <ListGroup.Item>€1400</ListGroup.Item>
      </ListGroup>
      </Card>
    </CardGroup>
     
      </div>
  )
}

export default MovilesView;
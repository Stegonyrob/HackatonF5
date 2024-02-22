import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';


const TabletsView = () => {
  return (
    <div className='m-5 mb-3'>

      <h1>¡Nuestras tablets!</h1>

    <CardGroup className="g-5">
      <Card>
        <Card.Img variant="top" src="https://img.pccomponentes.com/articles/1063/10635785/1895-apple-ipad-pro-2022-129-wifi-cellular-2tb-gris-espacial.jpg" />
        <Card.Body>
          <Card.Title>iPad Pro, 12,9 pulgadas (6.ª generación)</Card.Title>
          <Card.Text>
          Pantalla Multi‑Touch de 12,9 pulgadas en diagonal retroiluminada por mini‑LED con tecnología IPS.
          CPU de 8 núcleos (4 de rendimiento y 4 de eficiencia).
          Aceleración por hardware para H.264, HEVC, ProRes y ProRes RAW.
          Sistema de cámaras Pro.
          Cuatro altavoces.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Alta Gama</ListGroup.Item>
        <ListGroup.Item>Stock: 5</ListGroup.Item>
        <ListGroup.Item>€1514</ListGroup.Item>
      </ListGroup>
      </Card>

      <Card>
        <Card.Img variant="top" src="https://img.pccomponentes.com/articles/1078/10788298/1559-samsung-galaxy-tab-s9-ultra-5g-16-1tb-gris.jpg"/>
        <Card.Body>
          <Card.Title>Samsung Galaxy Tab S9 Ultra 5G</Card.Title>
          <Card.Text>
            Pantalla: Dynamic AMOLED 2X de 14,6".
            Certificación IP 68, resistencia al polvo y al agua.
            Procesador: Octa-Core Qualcomm Snapdragon 8 Gen 2.
            Memoria interna: 16 GB.
            Generación de red móvil: 5G.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Alta Gama</ListGroup.Item>
        <ListGroup.Item>Stock: 5</ListGroup.Item>
        <ListGroup.Item>€1150</ListGroup.Item>
      </ListGroup>
      </Card>

      <Card>
        <Card.Img variant="top" src="https://img.pccomponentes.com/articles/1080/10803261/1226-xiaomi-pad-6-11-28k-8-256gb-wifi-gris.jpg" />
        <Card.Body>
          <Card.Title>Tablet Xiaomi Pad 6 Pro</Card.Title>
          <Card.Text>
            Pantalla: 11″ LCD con resolución de 2,8K y 144Hz..
            Procesador: Qualcomm Snapdragon 8+Gen 1,.
            RAM de 8GB o 12GB,.
            Batería de 8.600 mAh con carga rápida de 67W.
            Gráfica integrada Qualcomm Adreno 730.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Alta Gama</ListGroup.Item>
        <ListGroup.Item>Stock: 5</ListGroup.Item>
        <ListGroup.Item>€629</ListGroup.Item>
      </ListGroup>
      </Card>
    </CardGroup>
     
      </div>
    
  )
}

export default TabletsView;
  
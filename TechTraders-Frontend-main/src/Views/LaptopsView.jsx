import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';


const LaptopsView = () => {
  return (
    <div className='m-5 mb-3'>

      <h1>¡Nuestras laptops!</h1>

    <CardGroup className="g-5">
      <Card>
        <Card.Img variant="top" src="https://img.pccomponentes.com/articles/1081/10811718/1148-asus-rog-strix-g16-g614jvr-n4003-intel-core-i9-14900hx-32gb-1tb-ssd-rtx-4060-16.jpg" />
        <Card.Body>
          <Card.Title>ASUS ROG Strix G16</Card.Title>
          <Card.Text>
          Procesador: Intel® Core™ i9 14900HX.
          GPU NVIDIA® GeForce RTX™ 4080.
          Pantalla: Nebula Display 2.5K de 240 Hz.
          Batería de 90 Wh.
          Memoria interna: 32 GB.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Alta Gama</ListGroup.Item>
        <ListGroup.Item>Stock: 5</ListGroup.Item>
        <ListGroup.Item>€1569</ListGroup.Item>
      </ListGroup>
      </Card>

      <Card>
        <Card.Img variant="top" src="https://img.pccomponentes.com/articles/1079/10798401/13-apple-macbook-pro-apple-m3-pro-11-nucleos-18gb-512gb-ssd-gpu-14-nucleos-14-plata-foto.jpg"/>
        <Card.Body>
          <Card.Title>Apple Macbook Pro Apple M3</Card.Title>
          <Card.Text>
            antalla Liquid Retina XDR de 14,2 pulgadas en diagonal;1 resolución nativa de 3.024 por 1.964 a 254 píxeles por pulgada.
            CPU de 11 núcleos.
            Batería de polímeros de litio de 70 vatios.
            18 GB de memoria unificada.
            Magic Keyboard retroiluminado.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Alta Gama</ListGroup.Item>
        <ListGroup.Item>Stock: 5</ListGroup.Item>
        <ListGroup.Item>€2359</ListGroup.Item>
      </ListGroup>
      </Card>

      <Card>
        <Card.Img variant="top" src="https://img.pccomponentes.com/articles/1067/10676242/1667-lenovo-legion-pro-5-16irx8-intel-core-i7-13700hx-32gb-1tb-ssd-rtx-4060-16-review.jpg" />
        <Card.Body>
          <Card.Title>Lenovo Legion Pro 5 16IRX8</Card.Title>
          <Card.Text>
            Procesadores Intel® Core™ de 13.a generación y la tarjeta gráfica NVIDIA® GeForce RTX™.
            Memoria RAM 2x 16GB SO-DIMM DDR5-4800.
            Pantalla 16" WQXGA IPS 500nits Anti-glare, 100% sRGB, 240Hz, DisplayHDR™ 400, Dolby® Vision™, G-SYNC®, Low Blue Light, High Gaming Performance
            High Definition (HD) Audio, Realtek® ALC3306 codec.
            Teclado 4-Zone RGB Backlit, Spanish.
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

export default LaptopsView
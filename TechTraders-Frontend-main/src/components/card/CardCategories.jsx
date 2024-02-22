import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CardCategories() {
  const slides = useSelector(state => state.slides.slides);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {slides.map((slide, index) => (
        <Card key={index} style={{ width: '20rem', margin: '3rem', height: '20rem' }}>
          <Link to={slide.link} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card.Img variant="top" src={slide.image} alt={slide.title} style={{ width: '18rem', margin: '1rem', height: '18rem', position: 'relative' }}/>
            <div style={{position: 'absolute', bottom: '130px', left: '100px', width: '60%', color: 'white',  padding: '10px' }}>
              <h5>{categories[index] ? categories[index].title : slide.title}</h5>
            </div>
          </Link>
        </Card>
      ))}
    </div>
  );
}

export default CardCategories;
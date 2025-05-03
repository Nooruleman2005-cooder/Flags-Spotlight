import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Spinner, Card, Row, Col } from 'react-bootstrap';
import '../Styling/style.css';

const CountryDetail = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
        const data = await response.json();
        setCountry(data[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching country:", error);
        setLoading(false);
      }
    };

    fetchCountry();
  }, [name]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <>
      <Container style={{ marginTop: '100px' }}>
        <Card className="cardstyle">
          <Row className="g-0 h-100">
            <Col md={5}>
              <Card.Img
                src={country.flags.png}
                alt={country.name.common}
                style={{ height: '100%', width: '100%', objectFit: 'contain', padding: '30px' }}
              />
            </Col>
            <Col md={7}>
              <Card.Body>
                <Card.Title className='cardt'>{country.name.common}</Card.Title>
                <Card.Text>
                  <strong>Capital:</strong> {country.capital?.[0]} <br />
                  <strong>Region:</strong> {country.region} <br />
                  <strong>Subregion:</strong> {country.subregion} <br />
                  <strong>Population:</strong> {country.population.toLocaleString()} <br />
                  <strong>Area:</strong> {country.area} km² <br />
                  <strong>Languages:</strong> {Object.values(country.languages || {}).join(", ")} <br />
                  <strong>Timezones:</strong> {country.timezones.join(", ")} <br />
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default CountryDetail;

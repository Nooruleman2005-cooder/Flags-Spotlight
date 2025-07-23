import React from 'react'
import { Spinner, Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styling/style.css';


const FlagsData = () => {
  const [flagsData, setFlagsData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFlagData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,subregion,timezones,area");
        const data = await response.json();
        console.log(data);
        setFlagsData(data);
        setLoading(false);
      }
      catch (error) {
        console.log("Error", error)
        setLoading(false);
      }
    }
    fetchFlagData();
  }, []);

  return (
    <>
      {loading ? (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
          <Spinner animation="border" />
        </div>
      ) : (
        <Container style={{ marginTop: '100px' }} >
          <Row>
            {Array.isArray(flagsData) ? (
              flagsData.map((country, index) => (
                <Col key={index} md={4} lg={3} className="mb-4">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={country?.flags?.png}
                      alt={country?.name?.common}
                      style={{ height: '180px', objectFit: 'cover' }}
                    />
                    <Link to={`/country/${country.name.common}`}>
                      <Button variant=" rgb(250, 87, 177)">View Details</Button>
                    </Link>
                  </Card>
                </Col>
              ))
            ) : (
              <p>No data found.</p>
            )}

          </Row>
        </Container>
      )}
    </>
  )
}

export default FlagsData
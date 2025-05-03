import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Spinner, Container, Row, Col } from 'react-bootstrap';
import '../Styling/style.css';

const SearchPage = () => {
    const { searchTerm } = useParams();
    console.log(searchTerm)
    const [filteredFlagData, setFilteredFlagData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFlagData = async () => {
            try {
                const res = await fetch('https://restcountries.com/v3.1/all');
                const data = await res.json();

                const nameFiltered = data.filter((country) =>
                    country.name?.common?.toLowerCase().includes(searchTerm.toLowerCase())
                );

                setFilteredFlagData(nameFiltered);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching filtered data:', err);
                setLoading(false);
            }
        };

        fetchFlagData();
    }, [searchTerm]);

    if (loading) {
        return (
            <div style={{ textAlign: 'center', marginTop: '100px' }}>
                <Spinner animation="border" />
            </div>
        );
    }

    return (
        <Container style={{ marginTop: '100px' }}>
            {filteredFlagData.length === 0 ? (
                <p style={{ color: 'red' }}>No country found with "{searchTerm}"</p>
            ) : (
                filteredFlagData.map((country, index) => (
                    <Card key={index} className="cardstyle mb-4">
                        <Row className="g-0 h-100">
                            <Col md={5}>
                                <Card.Img
                                    src={country.flags.png}
                                    alt={country.name.common}
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'contain',
                                        padding: '30px'
                                    }}
                                />
                            </Col>
                            <Col md={7}>
                                <Card.Body>
                                    <Card.Title className="cardt">{country.name.common}</Card.Title>
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
                ))
            )}
        </Container>
    );
};

export default SearchPage;

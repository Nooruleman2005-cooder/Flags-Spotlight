import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../Styling/style.css';
import { useState } from 'react';


const Searchbar = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (search) {
            navigate(`/search/${search}`);
        } else {
            navigate('/home');
        }
    };

    return (
        <>
            <Form className="d-flex serchform" onSubmit={handleSearch} >
                <Form.Control
                    type="search"
                    placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}
                    className="me-2"
                    aria-label="Search"
                />
                <Button type='submit' variant=" rgb(250, 87, 177)" className='search'>Search</Button>
            </Form>
        </>
    )
}

export default Searchbar
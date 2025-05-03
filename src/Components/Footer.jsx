import React from 'react'
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <footer
        style={{
          backgroundColor: '#343a40',
          color: 'white',
          padding: '20px 0',
          marginTop: '40px',
          textAlign: 'center',
        }}
      >
        <Container>
          <p>© {new Date().getFullYear()} Flags Spotlight  | Made By Noor-Ul-Eman | All rights reserved.</p>
        </Container>
      </footer>
    </>
  )
}

export default Footer
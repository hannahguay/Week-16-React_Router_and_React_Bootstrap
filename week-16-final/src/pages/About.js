import React from 'react'
import Header from '../components/Header'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card'

//components
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <Header />
          <Container >
              <div className='d-flex justify-content-center'>
                <Card className="min-vw-75" style={{ backgroundColor: '#e3e3e3', marginTop: 40 }} >
                  <Card.Title className='d-flex justify-content-center' style={{ marginBottom: 0, marginTop: 10 }}></Card.Title>
                  <Card.Body>
                    <p>“Subtracting from your list of priorities is as important as adding to it.”<br></br>
                    <br></br>
                    <strong>― Frank Sonnenberg, Soul Food: Change Your Thinking, Change Your Life</strong>  </p>
                  </Card.Body>
                </Card>
              </div>
      </Container>
      <Footer />
    </div>
  )
}

export default About
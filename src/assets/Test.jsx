import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import img from './images/Gallary/Gallary (1).jpg'; // Replace with your actual image path

const Test = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg">
            <CardBody>
              <CardTitle tag="h5">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    ★★★★★
                  </div>
                  <div>
                    <img src={img} alt="Woman" className="rounded-circle" style={{ width: '100px', height: '100px' }} />
                  </div>
                </div>
              </CardTitle>
              <CardText>
                "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams. "
              </CardText>
              <CardText className="text-muted">
                Marcela Glock
              </CardText>
              <CardText className="text-muted">
                Chief Executive, Spotify
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Test;
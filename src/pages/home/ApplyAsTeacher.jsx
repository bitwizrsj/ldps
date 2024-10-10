import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import Gallary from '/src/assets/images/Gallary.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const ApplyAsTeacher = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Container className="mt-5 d-flex align-items-center" fluid>
      <Row className="justify-content-center">
        <Col md={12} lg={10}>
          <Card className="shadow border-0" style={{ backgroundColor: "#ffecec" }}>
            <Row noGutters>
              <Col md={5} className="d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${Gallary})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="bg-dark opacity-75 text-center p-5">
                  <h2 className="text-white mb-0">Join Our Teaching Team</h2>
                </div>
              </Col>
              <Col md={7}>
                <CardBody>
                  <CardTitle tag="h5" className="text-center mb-4">
                    <h2>Join Our Teaching Team</h2>
                  </CardTitle>
                  <CardText>
                    We are looking for dedicated and passionate individuals to join our team of educators. Bring your expertise, enthusiasm, and commitment to make a difference in students' lives.
                  </CardText>
                  <CardText className="text-muted">
                    <ul className="list-unstyled text-dark">
                      <li className="mb-2"><span className="me-2 text-primary">&#9679;</span> Empower young minds with knowledge</li>
                      <li className="mb-2"><span className="me-2 text-primary">&#9679;</span> Collaborate with a team of passionate educators</li>
                      <li className="mb-2"><span className="me-2 text-primary">&#9679;</span> Create engaging and innovative lesson plans</li>
                      <li className="mb-2"><span className="me-2 text-primary">&#9679;</span> Foster a positive and inclusive classroom environment</li>
                    </ul>
                  </CardText>
                  <Button color="primary" onClick={handleShowModal} className="mx-auto d-block">
                    Apply Now
                  </Button>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Modal isOpen={showModal} toggle={handleCloseModal} centered>
        <ModalHeader toggle={handleCloseModal}>Apply for Teaching Position</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="applicantName">Name</Label>
              <Input type="text" id="applicantName" required />
            </FormGroup>
            <FormGroup>
              <Label for="applicantEmail">Email</Label>
              <Input type="email" id="applicantEmail" required />
            </FormGroup>
            <FormGroup>
              <Label for="applicantResume">Resume</Label>
              <Input type="file" id="applicantResume" required />
            </FormGroup>
            <FormGroup>
              <Label for="applicantMessage">Message</Label>
              <Input type="textarea" id="applicantMessage" rows="3" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={handleCloseModal}>Cancel</Button>
          <Button color="primary" type="submit">Submit Application</Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default ApplyAsTeacher;

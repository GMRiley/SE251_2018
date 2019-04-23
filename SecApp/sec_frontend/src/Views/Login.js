import React, { Component } from "react";
import { Form, Button, Container, Col, Card } from "react-bootstrap";

class Login extends Component {
    render() {
        return (
            <Container>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Form className="loginForm">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Container>

        )
    }
}
export default Login;
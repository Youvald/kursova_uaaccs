import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/registration.css';

function LoginForm() {
    const { login } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login({ email, password })) {
            navigate('/');
        }
    };

    return (
        <Container className="registration-container">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <div className="registration-box">
                        <h2 className="text-center">Логін</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formPassword">
                                <Form.Label>Пароль</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Button className="btn-custom w-100 mt-3" type="submit">
                                Увійти
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginForm;

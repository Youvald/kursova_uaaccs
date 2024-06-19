import React, { useState, useContext } from 'react';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import { UserContext } from '../context/UserContext'; // Імпортуйте UserContext
import { useNavigate } from 'react-router-dom'; // Імпортуйте useNavigate

import '../styles/registration.css'; // Імпортуємо стилі

function RegistrationForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const { register } = useContext(UserContext); // Використовуйте register з UserContext
    const navigate = useNavigate(); // Використовуйте useNavigate для навігації

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleRepeatPasswordVisibility = () => setShowRepeatPassword(!showRepeatPassword);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== repeatPassword) {
            alert('Passwords do not match!');
            return;
        }

        if (register({ email, password })) {
            navigate('/'); // Переадресуйте користувача на головну сторінку після реєстрації
        }
    };

    return (
        <Container className="registration-container">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <div className="registration-box">
                        <h2 className="text-center">Реєстрація</h2>
                        <p className="text-center">Вже маєте акаунт? <a href="/src/pages/Logisn">Увійти</a></p>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formEmail">
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                                <InputGroup>
                                    <Form.Control
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Пароль"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <InputGroup.Text onClick={togglePasswordVisibility}>
                                        <i className={`bi bi-eye${showPassword ? "" : "-slash"}`}></i>
                                    </InputGroup.Text>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group controlId="formRepeatPassword">
                                <InputGroup>
                                    <Form.Control
                                        type={showRepeatPassword ? "text" : "password"}
                                        placeholder="Повторіть пароль"
                                        value={repeatPassword}
                                        onChange={(e) => setRepeatPassword(e.target.value)}
                                    />
                                    <InputGroup.Text onClick={toggleRepeatPasswordVisibility}>
                                        <i className={`bi bi-eye${showRepeatPassword ? "" : "-slash"}`}></i>
                                    </InputGroup.Text>
                                </InputGroup>
                            </Form.Group>
                            <Button className="btn-custom w-100 mt-3" type="submit">ЗАРЕЄСТРУВАТИСЯ</Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default RegistrationForm;

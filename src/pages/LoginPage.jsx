import { Container, Row, Col, Form, Button, FloatingLabel, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

import FooterComponent from '../components/Customer/FooterComponent'

import logo from '../assets/logo.png'
import imgLogin from '../assets/img-login.png'

const LoginPage = () => {
    return (
        <>
            <section className="login mt-5">
                <Container>
                    <Row className="d-flex align-items-center">
                        <Col lg={6}>
                            <div className="brand mb-5">
                                <img src={logo} alt="" />
                            </div>

                            <Row className="d-flex align-items-center mb-5">
                                <Col lg={6}>
                                    <h1>Masuk ke Sygara</h1>
                                </Col>

                                <Col lg={6}>
                                    <Link to="/register" className="text-success d-flex justify-content-end">Buat Akun</Link>
                                </Col>
                            </Row>

                            <Form action="/">
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <FloatingLabel controlId="floatingInput" label="cth. example@email.com" className="mb-3 text-secondary">
                                        <Form.Control type="email" name="email" placeholder="name@example.com" />
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <FloatingLabel controlId="floatingInput" label="Masukkan Password" className="mb-3 text-secondary">
                                        <Form.Control type="password" name="password" placeholder="Masukkan Password" />
                                    </FloatingLabel>
                                </Form.Group>

                                <a href="mailto:support@sygara.com" target="_blank" className="text-success d-flex justify-content-end mt-3">Lupa Password?</a>

                                <Button type="submit" className="w-100 mt-5" variant="success">Masuk</Button>
                            </Form>
                        </Col>

                        <Col lg={6}>
                            <img src={imgLogin} alt="" className="img-login"/>
                        </Col>
                    </Row>
                </Container>
            </section>

            <FooterComponent/>
        </>
    );
}

export default LoginPage;

import React from 'react'

import { Container, Row, Col, Form, Button, FloatingLabel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import FooterComponent from '../components/Customer/FooterComponent'

import logo from '../assets/logo.png'
import imgLogin from '../assets/img-login.png'

const LoginPage = () => {
    return (
        <>
            <section className="login mt-5">
                <Container>
                    <Row className='d-flex align-items-center'>
                        <Col lg={6}>
                            <div className="brand mb-5">
                                <img src={logo} alt="" />
                            </div>
                            <Row className='d-flex align-items-center mb-5'>
                                <Col lg={6}>
                                    <h1>Masuk ke Sygara</h1>
                                </Col>
                                <Col lg={6}>
                                    <Link to='/register' className="text-success d-flex justify-content-end">Buat Akun</Link>
                                </Col>
                            </Row>

                            <Form action="/">
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <FloatingLabel controlId="floatingInput" label="cth. example@email.com" className="mb-3 text-secondary">
                                        <Form.Control type="email" placeholder="name@example.com" name='email' />
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <FloatingLabel controlId="floatingPassword" label="Masukkan Password" className='mb-3 text-secondary'>
                                        <Form.Control type="password" placeholder="Password" name='password' />
                                    </FloatingLabel>
                                </Form.Group>

                                <Link to='/forgotpw' className="text-success d-flex justify-content-end mt-3">Lupa Password?</Link>
                                <Button type="submit" variant="success" className="w-100 mt-5">Masuk</Button>
                            </Form>
                        </Col>

                        <Col>
                            <img src={imgLogin} alt="image" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <FooterComponent/>
        </>
    )
}

export default LoginPage
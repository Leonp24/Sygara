import React from 'react'

import { Container, Row, Col, Form, Button, FloatingLabel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import FooterComponent from '../components/Customer/FooterComponent'

import logo from '../assets/logo.png'
import imgRegister from '../assets/img-register.png'
import Swal from 'sweetalert2';

const RegisterPage = () => {

    // set sweetalert
    const handleSubmit = (event) => {
        event.preventDefault();

        Swal.fire({
            title: 'Berhasil Buat Akun!',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#198754',
            customClass: {
                confirmButton: 'rounded-pill'
            }
        }).then((result) => {
            if (result.isConfirmed) {
            window.location.href = '/login';
            }
        });
    };

    return (
        <>
            <section className="register mt-5">
                <Container>
                    <Row className='d-flex align-items-center'>
                        <Col lg={6}>
                            <div className="brand mb-5">
                                <img src={logo} alt="" />
                            </div>
                            <Row className='d-flex align-items-center mb-5'>
                                <Col lg={6}>
                                    <h1>Daftar di Sygara</h1>
                                </Col>
                                <Col lg={6}>
                                    <Link to='/login' className="text-success d-flex justify-content-end">Masuk</Link>
                                </Col>
                            </Row>

                            <Form onSubmit={handleSubmit}>

                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Nama Lengkap</Form.Label>
                                            <FloatingLabel controlId="floatingInput" label="cth. Ahmad Fulan" className="mb-3 text-secondary">
                                                <Form.Control type="text" placeholder="cth. Ahmad Fulan" name='fullname' />
                                            </FloatingLabel>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={6}>
                                        <Form.Group>
                                            <Form.Label>Nomor Telepon</Form.Label>
                                            <FloatingLabel controlId="floatingInput" label="cth. 628xxxxx" className="mb-3 text-secondary">
                                                <Form.Control type="text" placeholder="cth. 628xxxxx" name='telepon' />
                                            </FloatingLabel>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group>
                                            <Form.Label>Email</Form.Label>
                                            <FloatingLabel controlId="floatingInput" label="cth. example@email.com" className="mb-3 text-secondary">
                                                <Form.Control type="email" placeholder="name@example.com" name='email' />
                                            </FloatingLabel>
                                        </Form.Group>
                                    </Col>
                                </Row>


                                <Row>
                                    <Col lg={6}>
                                        <Form.Group>
                                            <Form.Label>Buat Password</Form.Label>
                                            <FloatingLabel controlId="floatingPassword" label="Masukkan Password" className='mb-3 text-secondary'>
                                                <Form.Control type="password" placeholder="Password" name='password' />
                                            </FloatingLabel>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group>
                                            <Form.Label>Konfirmasi Password</Form.Label>
                                            <FloatingLabel controlId="floatingPassword" label="Masukkan Password" className='mb-3 text-secondary'>
                                                <Form.Control type="password" placeholder="Password" name='password' />
                                            </FloatingLabel>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Button type="submit" variant="success" className="w-100 mt-3">Daftar</Button>
                            </Form>
                        </Col>

                        <Col>
                            <img src={imgRegister} alt="image" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <FooterComponent />
        </>
    )
}

export default RegisterPage
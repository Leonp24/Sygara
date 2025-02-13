import React from 'react'
import NavbarComponent from '../../components/Customer/NavbarComponent'
import FooterComponent from '../../components/Customer/FooterComponent'

import { Container, Row, Col, Form, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const OrderPage = () => {
    const handleBuyClick = () => {
        window.location.href = '/payment';
    }

    return (
        <>
            <NavbarComponent isLoggedIn={true} />

            <section className="order">
                <Container>
                    <Link to='/cart' className='text-success'><FontAwesomeIcon icon={faAngleLeft} /> Kembali ke Keranjang</Link>
                    <h1 className='text-success mt-3'>Check Out</h1>
                    <Row className='mt-3'>
                        <Col lg={6}>
                            <h4 className='text-success'>Informasi Pengiriman</h4>

                            <Form>
                                <Row className='mb-3'>
                                    <Col lg={6}>
                                        <Form.Group>
                                            <Form.Label>Nama Pembeli</Form.Label>
                                            <Form.Control type="text" name='fullname' value="Ahmad Fulan" disabled />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group>
                                            <Form.Label>Nomor Telepon</Form.Label>
                                            <Form.Control type="text" name='telepon' value="62812345678" disabled />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className='mb-3'>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Alamat</Form.Label>
                                            <Form.Control as='textarea' name='alamat' rows={5} placeholder='cth. jalan jendral sudirman, disamping gang...' />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className='mb-3'>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Pilih Metode Pengiriman</Form.Label>
                                            <Form.Select aria-label="Metode Pengiriman">
                                                <option>-- Pilih Metode Pengiriman --</option>
                                                <option value="reguler">Reguler | Rp 10.000 (tiba dalam 3 jam)</option>
                                                <option value="ekspres">Ekspres | Rp 20.000 (tiba dalam 1 jam)</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className='mb-3'>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Pilih Metode Pembayaran</Form.Label>
                                            <Form.Select aria-label="Metode Pembayaran">
                                                <option>-- Pilih Metode Pembayaran --</option>
                                                <option value="gopay">Gopay</option>
                                                <option value="transfer">Transfer Bank BCA</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>

                        <Col lg={6}>
                            <Card className='rounded-5 p-3'>
                                <Card.Body>
                                    <h4 className='text-success mb-3'>Ringkasan Belanja</h4>

                                    <Row className='mb-3 d-flex align-items-center'>
                                        <Col lg={2}>
                                            <img src="../../src/assets/img-semangka.png" className='img-product border rounded-5 mb-3' alt="" />
                                        </Col>
                                        <Col lg={10} className='d-flex justify-content-between'>
                                            <h5>Semangka</h5>
                                            <p>1kg</p>
                                            <h5 className='text-success text-end'>Rp 15.000</h5>
                                        </Col>
                                    </Row>

                                    <hr />

                                    <Row>
                                        <Col>
                                            <p>Berat Total</p>
                                        </Col>
                                        <Col className='d-flex justify-content-end'>
                                            <p>1 kg</p>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <p>Metode Pengiriman</p>
                                        </Col>
                                        <Col className='d-flex justify-content-end'>
                                            <p>Reguler | Rp 10.000</p>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <p>Metode Pembayaran</p>
                                        </Col>
                                        <Col className='d-flex justify-content-end'>
                                            <p>Gopay</p>
                                        </Col>
                                    </Row>

                                    <Row className='mb-3'>
                                        <Col>
                                            <h5>Total</h5>
                                        </Col>
                                        <Col className='d-flex justify-content-end'>
                                            <h5 className='text-success'>Rp 25.000</h5>
                                        </Col>
                                    </Row>

                                    <button className='btn btn-success w-100' onClick={handleBuyClick}>Bayar Sekarang</button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <FooterComponent />
        </>
    )
}

export default OrderPage
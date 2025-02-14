import { useState } from 'react'
import NavbarComponent from '../../components/Customer/NavbarComponent'
import FooterComponent from '../../components/Customer/FooterComponent'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import imgProduct from '../../assets/img-semangka.png'
import imgEmptyCart from '../../assets/img-empty-cart.png'

const CartPage = () => {
    const [jumlah, setJumlah] = useState(1);

    const handleJumlahChange = (e) => {
        setJumlah(e.target.value);
    }

    const [isCartEmpty, setIsCartEmpty] = useState(false);

    const handleRemoveItem = () => {
        setIsCartEmpty(true);
    }

    const handleBuyClick = () => {
        window.location.href = '/order';
    }

    return (
        <>
            <NavbarComponent isLoggedIn={true} />

            <section className="cart">
                <Container>
                    <h2 className='text-success mb-3'>Keranjang Belanja</h2>
                    {isCartEmpty ? (
                        <div className="text-center mt-5 mb-5">
                            <h4>Keranjang masih kosong :(, <Link to='/product' className='text-success'>Ayo Belanja sekarang!</Link></h4>
                            <img src={imgEmptyCart} alt="empty" className='img-empty-cart' />
                            <FooterComponent />
                        </div>
                    ) : (
                        <Row>
                            <Col lg={6}>
                                <Card className="mb-3 rounded-5">
                                    <Row className="g-0  d-flex align-items-center">
                                        <Col md={4}>
                                            <img src={imgProduct} className="img-fluid rounded-5 border" alt="..." />
                                        </Col>
                                        <Col md={8}>
                                            <Card.Body className='p-4'>
                                                <Row>
                                                    <Col>
                                                        <h5 className="card-title">Semangka</h5>
                                                    </Col>

                                                    <Col className="d-flex justify-content-end">
                                                        <h5 className='text-success'>Rp 15.000</h5>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg={8}>
                                                        <Form className='w-100 mt-3'>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Jumlah/kg</Form.Label>
                                                                <Form.Control type="number" value={jumlah} min={1} max={10} onChange={handleJumlahChange} />
                                                            </Form.Group>
                                                        </Form>
                                                    </Col>

                                                    <Col lg={4} className="d-flex justify-content-end p-3">
                                                        <Button variant="outline-danger" onClick={handleRemoveItem}><FontAwesomeIcon icon={faTrash} /></Button>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col lg={6}>
                                <Card className="mb-3 rounded-5">
                                    <Card.Body className='p-4'>
                                        <h3>Ringkasan Belanja</h3>
                                        <h6>Berat Total : 1kg</h6>
                                        <h6>Sub Total : Rp 15.000</h6>

                                        <Button variant="success" className="w-100 mt-3 rounded-5" onClick={handleBuyClick}>Beli</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    )}
                </Container>
            </section>
        </>
    )
}

export default CartPage
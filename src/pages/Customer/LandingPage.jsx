import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import NavbarComponent from '../../components/Customer/NavbarComponent';
import FooterComponent from '../../components/Customer/FooterComponent';

import banner3 from '../../assets/img-banner3.png';
import logo from '../../assets/logo-putih.png';

const LandingPage = () => {
    return (
        <>
            <NavbarComponent isLoggedIn={true} />

            <section className="hero">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className="banner1 d-flex align-items-center">
                                <div className="description">
                                    <h1 className='text-success'>Natural & Segar <br /> untuk kesehatan</h1>
                                    <Link to='/product' className='btn btn-outline-success'>Belanja Sekarang</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="banner2 text-center">
                                <div className="description">
                                    <h3 className='text-success'>Produk segar langsung dari kebun!</h3>
                                    <Link to='/product' className='btn btn-success'>Lihat Produk</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className='mt-5'>
                        <Col lg={5}>
                            <div className="bg-text d-flex align-items-center">
                                <div className="description">
                                    <h3 className='text-success'>Produk yang dirawat & dipilih dengan kualitas terbaik </h3>
                                    <p>Miliki buah dan sayur berkualitas dari hasis panen yang dijaga ketat agar kesegaran tetap dapat Anda rasakan.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className="banner3 text-center">
                                <img src={banner3} alt="banner" />
                            </div>
                        </Col>
                    </Row>

                    <Row className='mt-5'>
                        <Col>
                            <div className="cta text-center">
                                <div className="description">
                                    <img src={logo} alt="logo" />
                                    <h1 className='text-light mt-3 mb-3'>Ayo Belanja sekarang dan mulai nikmati <br /> kesegaran buah & sayur yang sehat!</h1>
                                    <Link to='/product' className='btn btn-outline-light'>Belanja Sekarang</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <FooterComponent />
        </>
    );
};

export default LandingPage;
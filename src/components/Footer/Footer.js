import React from 'react'
import './Footer.css';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';


const Footer = () => {
    return (
        <div>
            <section style={{ backgroundColor: "black", marginTop: "10px" }}>
                <div className='container' >
                    <div className='row txtt'>
                        <div className='col-lg-3 footone'>
                            <h1>Schemes</h1>
                            <p>Mutual Funds</p>
                            <p>ELSS</p>
                            <p>SIP</p>
                            <p>SIP Calculator</p>
                            <p>Liquid Funds</p>
                            <p>Child Education</p>
                            <div>
                                <FaFacebook className='social-icons' />
                                <AiFillTwitterCircle className='social-icons' />
                                <BsLinkedin className='social-icons' />
                                <AiFillInstagram className='social-icons' />
                                <AiFillYoutube className='social-icons' />
                            </div>

                        </div>
                        <div className='col-lg-3 ' style={{ marginLeft: "-15px" }}>
                            <h1 className='footsec'>About</h1>
                            <p className='footsec-p'>FinEdge was born with a single objective, of
                                enabling wealth creation for our clients through quality and conflict
                                free investment management.
                            </p>
                        </div>
                        <div className='col-lg-3 '>
                            <div className='foot-3' style={{ paddingLeft: "5em" }}>
                                <h1>Pages</h1>
                                <p>Home</p>
                                <p>About</p>
                                <p>Services</p>
                                <p>Contact Us</p>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <h1 className='footnews'>Newsletter</h1>
                            <div className="emdiv email  form-floating mb-3">
                                <input type="email" className="lapfull em form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput" style={{ color: "black" }} className='lap-place place'>Email address</label>
                            </div>
                            <div className='btn-box mt3 emsubmit submit lap-but'><a className='subbut' href="/">Subscribe</a></div>
                        </div>
                        <h6 className='text-center mt5 copy'>All Rights Reserved with Fine Edge . CopyWrite © 2023</h6>
                        <h6 className='text-center mt3 copy'>© Distributed By Fine Edge</h6>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;

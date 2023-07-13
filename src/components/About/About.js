import React from 'react'
import './About.css'

const About = () => {
    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-12 our'>
                        <h1 style={{ color: "#0000000" }} className='mt5' id='about'>OUR STORY</h1>
                        <p>FinEdge was born with a single objective,
                            of enabling wealth creation for our clients through quality and conflict free
                            investment management. The use of technology is our cornerstone in ensuring
                            that we can reach across demographics and geographies, provide a convenient,
                            low cost - high quality, process driven, goal oriented, wealth creation platform.
                        </p>
                        <p>We are experts at what we do and for us our success lies only in making
                            our clients meet their investment objectives. We love the fact that we
                            are known and respected by our clients and the industry for our unique
                            business model and our conflict free advice.</p>
                    </div>
                </div>
                <div className='row abc mt4 d-flex'>
                    <div className='col-lg-3 first'>
                        <img className='img-mobile img-lap' src={require('../../Images/d1.jpg')} alt="" />
                    </div>
                    <div className='col-lg-3 second bg-color'>
                        <h5 className="mt-5">Harsh Gahlaut</h5>
                        <h6>Co-Founder & CEO</h6>
                        <p className='p-size mt-3' >Harsh Co-founded FinEdge after successfully
                            managing several large businesses in the
                            Financial Services Industry. He is a Management
                            Graduate from Symbiosis (Pune) and has worked
                            with institutions like Xerox (Key Accounts Manager),
                            Standard Chartered Bank (Regional Head - Capital Markets),
                            Dawnay Day AV (Country Head - Wealth Management)
                            & Religare Macquarie (Senior Vice President - Private Banking)
                            over the last 21 years.
                        </p>
                    </div>
                    <div className='col-lg-3 gap img2'>
                        <img className='first' style={{ height: "25em" }} src={require('../../Images/d2.jpg')} alt="" />
                    </div>
                    <div className='col-lg-3 second bg-color'>
                        <h5 className="mt-5">Mayank Bhatnagar</h5>
                        <h6>Co-Founder & COO</h6>
                        <p className='p-size mt-3' >Harsh Co-founded FinEdge after successfully
                            managing several large businesses in the
                            Financial Services Industry. He is a Management
                            Graduate from Symbiosis (Pune) and has worked
                            with institutions like Xerox (Key Accounts Manager),
                            Standard Chartered Bank (Regional Head - Capital Markets),
                            Dawnay Day AV (Country Head - Wealth Management)
                            & Religare Macquarie (Senior Vice President - Private Banking)
                            over the last 21 years.
                        </p>
                    </div>
                </div>
                <div className="row abc mt4 d-flex ">
                    <div className='col-lg-3 first'>
                        <img style={{ height: "25em" }} src={require('../../Images/d3.jpg')} alt="" />
                    </div>
                    <div className='col-lg-3 second bg-color'>
                        <h5 className="mt-5">Aniruddha Bose</h5>
                        <h6>Chief Business Officer</h6>
                        <p className='p-size mt-3'>Harsh Co-founded FinEdge after successfully
                            managing several large businesses in the
                            Financial Services Industry. He is a Management
                            Graduate from Symbiosis (Pune) and has worked
                            with institutions like Xerox (Key Accounts Manager),
                            Standard Chartered Bank (Regional Head - Capital Markets),
                            Dawnay Day AV (Country Head - Wealth Management)
                            & Religare Macquarie (Senior Vice President - Private Banking)
                            over the last 21 years.
                        </p>
                    </div>
                    <div className='col-lg-3 gap img2'>
                        <img className='first' style={{ height: "25em" }} src={require('../../Images/d4.jpg')} alt="" />
                    </div>
                    <div className=' col-lg-3 second bg-color'>
                        <h5 className="mt-5">Gaurav Agarwal</h5>
                        <h6>Co-Founder</h6>
                        <p className='p-size mt-3' >Harsh Co-founded FinEdge after successfully
                            managing several large businesses in the
                            Financial Services Industry. He is a Management
                            Graduate from Symbiosis (Pune) and has worked
                            with institutions like Xerox (Key Accounts Manager),
                            Standard Chartered Bank (Regional Head - Capital Markets),
                            Dawnay Day AV (Country Head - Wealth Management)
                            & Religare Macquarie (Senior Vice President - Private Banking)
                            over the last 21 years.
                        </p>
                    </div>
                </div>
                <div className='btn-boxx mt-5'><a href="/">View All</a></div>
            </div>
        </div>
    )
}
export default About;

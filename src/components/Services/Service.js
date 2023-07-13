import React from 'react'
import './Service.css'

const Service = () => {
    return (
        <div>
            <hr />
            <div className='container'>
                <div className='row mt5' id='services'>
                    <h1 className='tl '>Our Services</h1>
                    <h1 className='heading'>Financial Advisory Services by FinEdge</h1>
                    <p>FinEdge was born with a single objective, of enabling wealth creation for our clients through quality and conflict free investment management. The use of technology is our cornerstone in ensuring that we can reach across demographics and geographies,
                        provide a convenient, low cost - high quality, process driven, goal oriented, wealth creation platform.
                    </p>
                    <div className='col-lg-4 mt4'>
                        <img src={require("../../Images/m1.png")} className="department mlarge mlogo logo1 img5" alt="..." />
                        <h5>MONEY TRANSFERS</h5>
                        <p> When you transfer funds from a credit card directly to a bank account for use on purchases.</p>
                    </div>
                    <div className='col-lg-4 mt4'>
                        <img src={require("../../Images/m2.png")} className="department mlarge mlogo logo1" alt="..." />
                        <h5>BUSINESS PAYMENTS</h5>
                        <p>The transfer of money, goods, or services to purchase a product or service.</p>
                    </div>
                    <div className='col-lg-4 mt4'>
                        <img src={require("../../Images/m3.png")} className="department mlarge mlogo logo1" alt="..." />
                        <h5>REAL-TIME PAYMENTS TRACKING</h5>
                        <p>Payments made between bank accounts that are initiated, cleared and settled within seconds, at any time of the day. </p>

                    </div>
                </div>
                <div className='btn-box mt-2'><a href="/">View All</a></div>
                <div className='row' style={{ marginTop: "7em" }}>
                    <div className='col-lg-6'>
                        <img src={require("../../Images/service.jpg")} alt='' style={{ borderRadius: "15px", width: "30em" }} />
                    </div>
                    <div className='col-lg-6'>
                        <h1 className='abt'>Our Platform Offers Multiple Choices</h1>
                        <p>FinEdge has no additional charge for its investment platform.
                            We are compensated by Asset Management companies directly.
                            Each and Every scheme has a Total Expense Ratio (TER)
                            from which expenses are shared between the asset management
                            company and the distributor.</p>
                        <p>We are also Providing multiple types of finance also as shown in previous image</p>
                        <div className='lap butone btn-box butt'><a href="/">Read More</a></div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Service;

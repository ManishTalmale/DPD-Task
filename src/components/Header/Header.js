import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Typewriter } from 'react-simple-typewriter';
import './Header.css'
const Header = () => {

    // const { text } = useTypewriter({
    //     words: ['Saving Taxes',
    //         'Making Your Money Work For You',
    //         'Attaining Financial Freedom',
    //         'Meeting Your Goals'
    //     ],
    //     loop:{},
    //     typeSpeed:120,
    //     deleteSpeed:80,
    // });

    const handleType = (count) => {
        // access word count number
        console.log(count)
    }

    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

    return (
        <>
            <Navbar expand="lg" className="bg-img">
                <Container fluid className='navbar-fixed-top'>
                    <Navbar.Brand href="#" className='bo f2' style={{ color: "white" }}>FINEDGE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" style={{ color: "white" }} className='under'>HOME</Nav.Link>
                            <Nav.Link href="#about" style={{ color: "white" }}>ABOUT</Nav.Link>
                            <Nav.Link href="#services" style={{ color: "white" }}>SERVICES</Nav.Link>
                            <Nav.Link href="#contactus" style={{ color: "white" }}>CONTACT US</Nav.Link>
                            <NavDropdown.Divider />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className='bgimg'>
                <h1 className='type'>
                    <p className='height'>A Wealth Creation Platform For{' '}</p>
                    <span className="shadow" style={{ fontSize: "22px" }}>
                        <Typewriter
                            words={['Saving Taxes',
                                'Making Your Money Work For You',
                                'Attaining Financial Freedom',
                                'Meeting Your Goals'
                            ]}
                            loop={500}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        />
                    </span>
                </h1>
            </div>
        </>
    );
}

export default Header;





import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

let TopBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" style={{display: "flex"}} >
                <Navbar.Brand style={{margin: "5px 0 0 20px", alignSelf:"flex-start"}} href="#home">
                    <img src="https://d2guulkeunn7d8.cloudfront.net/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg" alt="Background"/> 
                </Navbar.Brand>
                <Nav style={{padding: "12px 20px 10px 20px", fontSize: "14px", lineHeight: "26px", fontWeight: "bolder"}} >
                    <Nav.Link style={{color: "#343538", textDecoration: "none", paddingRight: "5px"}} href="#LogIn">Log In</Nav.Link>
                    <Button variant="success" style={{fontSize: "12px", 
                        color: "white", 
                        backgroundColor: "rgb(0, 160, 0)", 
                        border: "rgb(0, 160, 0)", 
                        borderRadius: "5px",
                        padding: "5px 10px"}}>Sign Up</Button>
                </Nav>
            </Navbar>
        </div>
    )
}

export default TopBar;
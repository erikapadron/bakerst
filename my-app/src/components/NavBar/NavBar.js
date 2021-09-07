import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FcIdea } from "react-icons/fc";
import "./NavBar.css";

export const NavBar=({children})=>{
    return (
        <>
        <Navbar className="fondo" expand="lg">
        <Container className="fondo">
            <Navbar.Brand href="#home"><h1>BAKER ST.</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#me">< FcIdea /> Un poco de mi carrera</Nav.Link>
                <NavDropdown title="Clases de:" id="basic-nav-dropdown">
                <NavDropdown.Item className="fondo" href="#action/3.1">< FcIdea />  Inglés</NavDropdown.Item>
                <NavDropdown.Item className="fondo" href="#action/3.2">< FcIdea />  Español</NavDropdown.Item>
                <NavDropdown.Item className="fondo" href="#action/3.3">< FcIdea />  Canto</NavDropdown.Item>
                <NavDropdown.Item className="fondo" href="#action/3.4">< FcIdea />  Piano</NavDropdown.Item>
                <NavDropdown.Item className="fondo" href="#action/3.4">< FcIdea />  Armonía</NavDropdown.Item>
                </NavDropdown>            
            </Nav>            
            </Navbar.Collapse>  
            { children }
        </Container>
        </Navbar>


        </>
    )

}

export default NavBar

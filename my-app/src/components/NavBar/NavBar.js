import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FcIdea } from "react-icons/fc";
import {Link} from 'react-router-dom'
import "./NavBar.css";


export const NavBar=({children})=>{
    return (
        <>
        <Navbar className="fondo" expand="lg">
        <Container className="fondo">
            <Link to= '/'>
            <Navbar.Brand href="#home"><h1>BAKER ST.</h1></Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#me">< FcIdea /> Un poco de mi carrera</Nav.Link>
                <NavDropdown title="Clases de:" id="basic-nav-dropdown">
                <Link to= '/categoria/ingles'>
                <NavDropdown.Item className="fondo" href="ingles">< FcIdea />  Inglés</NavDropdown.Item>                    
                </Link>
                <Link to= '/categoria/español'>
                <NavDropdown.Item className="fondo" href="español">< FcIdea />  Español</NavDropdown.Item>
                </Link>
                <Link to= '/categoria/canto'>
                <NavDropdown.Item className="fondo" href="canto">< FcIdea />  Canto</NavDropdown.Item>
                </Link>
                <Link to= '/categoria/piano'>
                <NavDropdown.Item className="fondo" href="piano">< FcIdea />  Piano</NavDropdown.Item>
                </Link>
                <Link to= '/categoria/armonia'>
                <NavDropdown.Item className="fondo" href="armonia">< FcIdea />  Armonía</NavDropdown.Item>
                </Link>
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

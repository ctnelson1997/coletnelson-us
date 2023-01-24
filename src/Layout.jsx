import { Anchor, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">coletnelson.us</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">home</Nav.Link>
                            <Nav.Link as={Link} to="/blog">blog</Nav.Link>
                            <Nav.Link as={Anchor} target="_blank" href="https://www.coletnelson.us/assets/ctnelson2_resume.pdf">resume</Nav.Link>
                            <Nav.Link as={Anchor} target="_blank" href="https://www.coletnelson.us/assets/ctnelson2_cv.pdf">cv</Nav.Link>
                            <Nav.Link as={Anchor} target="_blank" href="https://cs571.org">cs571.org</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{padding: "1rem"}}>
                <Outlet />
            </div>
        </>
    );
}
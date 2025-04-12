import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';


export function NavMenu() {
  return (
    <>


      <Navbar bg="primary" data-bs-theme="dark" fixed="top" className="justify-content-center">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand href="#home" className="mx-auto">AcessInvest</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#sobre">Sobre</Nav.Link>
            <Nav.Link href="#quemsomos">Quem Somos?</Nav.Link>
            <Nav.Link href="#contatos">Contatos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


    </>
  );
}


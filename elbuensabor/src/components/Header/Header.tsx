import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Navbar  expand="lg" style={{ backgroundColor: '#EFDECD' }}>
      <Container>
        <Navbar.Brand onClick={() => navigate ('/')}>
          <img
            src="https://raw.githubusercontent.com/Zackgd/10Peso/4afad3151c6b78d01aa2f6ef544ae18974db6366/logonombre.svg"
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-text-center"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => navigate ('/')} active>
              Inicio
            </Nav.Link>
            <Nav.Link onClick={() => navigate ('contactos')}>Contactos</Nav.Link>
            <Nav.Link onClick={() => navigate ('/facturas')}>Factura</Nav.Link>
          </Nav>
          <Form className="d-flex mx-auto">
            <FormControl type="search" placeholder="Buscar" aria-label="Search" style={{ width: '400px', margin: 'auto' }} />
          </Form>
          <Link to="/login">
          <Button variant="secondary" className="ml-md-2">
            Iniciar Sesión
          </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
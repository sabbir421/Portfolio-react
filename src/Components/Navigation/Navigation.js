
import { Container, Nav, Navbar, Button,} from 'react-bootstrap';
import { Link as NavLink } from 'react-router-dom';



const Navigation = () => {
  
    
    return (
        <div fluid>
           
            <Navbar className="navbar bg-primary" expand="lg">
                <Container fluid>
                   
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink to="/home" className="link ms-3 text-white text-decoration-none" >Home</NavLink>
                           
                          
                            <NavLink to="/about" className="link ms-3 text-white text-decoration-none" >Abot</NavLink>
                           
                            <NavLink to="/blog" className="link ms-3 text-white text-decoration-none">Blog</NavLink>
                            <NavLink to="/Contact" className="link ms-3 text-white text-decoration-none">Contact</NavLink>
                           

                        </Nav>
                        

                        <Navbar.Text>

                          
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;

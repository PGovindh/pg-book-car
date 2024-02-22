import axios from "axios";
import { useState } from "react";
import { Container, Navbar, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import './SignUpPage.css'

function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();


    const isSignUpDisabled = !username || !password || !role ;

    const signUp = () => {
        // Basic validations
        if ( !username || !password || !role) {
            setMsg("Please fill in all fields");
            return;
        }

         

        // Password validation
        // Minimum 8 characters, at least one uppercase letter, one lowercase letter, one digit, and one special character
        // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        // if (!passwordRegex.test(password)) {
        //     setMsg("Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character");
        //     return;
        // }

        let obj = {
            
            
                "username": username,
                "password": password,
                 "role":role
            
        };

        axios.post('http://localhost:7860/user/add', obj)
            .then(response => {
                // setManager(response.data);
                
                navigate("/user/dashboard");
            })
            .catch(function (error) {
                setMsg("Issue in processing in signup");
            });
    };

    return (
      <div className="signup-page-container">
      <Navbar bg="dark" data-bs-theme="dark" style={{ height: '50px' }}>
          <Navbar.Brand style={{color:"white"}}>&nbsp;&nbsp;&nbsp;&nbsp;Team Flow</Navbar.Brand>
      </Navbar>
      <div className="signup-background-image"></div>

      <Container className="signup-container">
          <Row>
              <Col md={{ span: 6, offset: 3 }} className="ml-auto">
                  {/* Add ml-auto class to move the card to the right */}
                  <Card>
                      <Card.Header>
                          <h3 style={{ textAlign: "center" }}>Sign Up</h3>
                      </Card.Header>
                      <Card.Body>
                          {msg !== "" ? (
                              <div className="alert alert-danger" role="alert">
                                  {msg}
                              </div>
                          ) : null}
                                <Form>
                                    

                                     

                                    <Form.Group as={Row} controlId="formUsername">
                                        <Form.Label column md={6} style={{textAlign:"center"}}>Enter Username:</Form.Label>
                                        <Col md={6}>
                                            <Form.Control type="text" onChange={(e) => setUsername(e.target.value)} />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formPassword">
                                        <Form.Label column md={6} style={{textAlign:"center"}}>Enter Password:</Form.Label>
                                        <Col md={6}>
                                            <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formRole">
                                        <Form.Label column md={6} style={{textAlign:"center"}}>Select Role:</Form.Label>
                                        <Col md={6}>
                                            <Form.Select  onChange={(e) => setRole(e.target.value)} >
                                            <option>Select</option>
                                            <option value="ADMIN">Admin</option>
                                            <option value="CUSTOMER">User</option>
                                             
                                            </Form.Select>

                                        </Col>
                                    </Form.Group>
                                </Form>
                                </Card.Body>
                            <Card.Footer style={{ textAlign: "center" }}>
                                <Button variant="primary" onClick={signUp} disabled={isSignUpDisabled}>SignUp</Button>
                            </Card.Footer>
                        </Card>
                        <div className="mt-4" style={{ textAlign: "left" }}>
                            <span style={{color:"white"}}>
                                Have an Account?
                                <Button variant="link" onClick={() => navigate("/auth/login")}>
                                    Login
                                </Button>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
            <br /><br /><br /><br /><br />
        </div>
    );
}

export default SignUp;
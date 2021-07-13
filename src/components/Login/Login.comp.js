import React from 'react'
import { Container,Row,Col,Form , Button} from 'react-bootstrap'
export const LoginForm = ({handleOnChange,formSwitcher,handleOnSubmit,email,pass}) => {
    return (
        <Container>
            <Row>
                <Col>
                 <h1 className="text-info text-center">Client Login</h1>
                 <hr/>
                 <Form onSubmit={handleOnSubmit}>
                 <Form.Group>
                         <Form.Label>Email address</Form.Label>
                    
                     <Form.Control
                     type="email"
                     name="email"
                     value={email}
                     onChange={handleOnChange}
                     placeholder="Enter Email"
                     required/>
                      </Form.Group>
                      <Form.Group>
                         <Form.Label>Password</Form.Label>
                    
                     <Form.Control
                     type="password"
                     name="password"
                     value={pass}
                     onChange={handleOnChange}
                     placeholder="Enter Password"
                     required/>
                      </Form.Group>
                      <Button type="submit">Login</Button>
                 </Form>
                 <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                <a href="#" onClick={()=>formSwitcher('reset')}>Forgot Password?</a>
                </Col>
            </Row>
        </Container>
    )
}

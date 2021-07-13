import React from 'react'
import { Container,Row,Col,Form , Button} from 'react-bootstrap'
export const PasswordReset = ({handleOnChange,formSwitcher,handleOnSubmit,email,pass}) => {
    return (
        <Container>
            <Row>
                <Col>
                 <h1 className="text-info text-center">Reset password</h1>
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
                      
                      <Button type="submit">Reset Password</Button>
                 </Form>
                 <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                <a href="#" onClick={()=>formSwitcher('login')}>Login Now</a>
                </Col>
            </Row>
        </Container>
    )
}

import React from 'react'
import { Card, Button } from 'react-bootstrap'
const PasswordCard = () => {
    const showPassword = (event) => {
        event.preventDefault()
    }
    return (
        <div>
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>Facebook</Card.Title>
                <Card.Text>
                    Email: jdmmeinhardt@gmail.com   
                    <br />
                    Username: n.a.
                    <br />
                    Password: ***************
                </Card.Text>
                <Button variant="outline-primary" onClick={showPassword}>Show</Button>
                </Card.Body>
            </Card>
            <br />
        </div>
    )
}

export default PasswordCard
import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { useState, useEffect } from 'react'
import ErrorNotification from './ErrorNotification'

function Register() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [background, setBackground] = useState({ backgroundColor: 'transparent' })
    const [notification, setNotification] = useState(undefined)

    const typing = (event) => {
        switch (event.target.id) {
            case 'formBasicPassword':
                console.log('password')
                setPassword(event.target.value)
                break
            case 'formBasicConfirm':
                console.log('confirm')
                setConfirm(event.target.value)
                break
            case 'formBasicEmail':
                setEmail(event.target.value)
                break
        }
    }
    
    const matchingPassword = () => {
        if (password === '' || confirm === '') {
            setBackground({ backgroundColor: 'transparent'})
        }
        else if (password === confirm) {
            setBackground({ backgroundColor: '#eaffd0' })
        }
        else if (password !== confirm) {
            setBackground({ backgroundColor: '#ffd0d2' })
        }
    }

    useEffect(() => {
        matchingPassword()
    }, [password, confirm, email])

    const submitForm = (event) => {
        event.preventDefault()
        console.log('submit')
        if (email === '' || password === '' || password !== confirm) {
            setNotification('show')
            setTimeout(() => setNotification(undefined), 5000)
            return
        }
        history.push('/home')
    }


    return (
        <div>
            <Form>
                <h3>To register, please fill out the information below:</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={typing} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" className='password-validation' placeholder="Password" onChange={typing} style={background} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirm">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" className='passwordValidation' placeholder="Confirm Password" onChange={typing} style={background} />
                </Form.Group>
                <ErrorNotification notification={notification}/>
                <Button variant="primary" type="submit" onClick={submitForm}>
                    Create Account
                </Button>
            </Form>
        </div>
    )
}

export default Register

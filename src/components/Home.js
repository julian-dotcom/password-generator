import React from 'react'
import { useHistory } from 'react-router'
import { Button } from 'react-bootstrap'
import PasswordCard from './PasswordCard'

const Home = () => {
    const history = useHistory()
    return (
        <div>
            <h5>Welcome to the password generator app. Create a new password or look at your existing passwords</h5><br /> 
            Create a new password: <br />
            <Button variant="primary" type="button" onClick={() => history.push('/create')}>
                Create
            </Button>
            <br /><br />
            <PasswordCard />
        </div>
    )
}

export default Home

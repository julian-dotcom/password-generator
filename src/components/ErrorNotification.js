import React from 'react'
import { Alert } from 'react-bootstrap'
const ErrorNotification = ({ notification }) => {
    return (
        <div>
            {notification === 'show'
                ? (<Alert variant='danger'>
                    Please enter an appropriate email and matching passwords.
                    </Alert>)
                : (<div></div>)
            }
        </div>
    )
}

export default ErrorNotification

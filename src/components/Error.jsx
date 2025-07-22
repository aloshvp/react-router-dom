import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {

    const error = useRouteError();

    return (
        <div>
            <h1>Oops....Something Went wrong</h1>
            <p>{error.data || error.message}</p>
            <Link to={-1}>Go Back</Link>
        </div >
    )
}

export default Error

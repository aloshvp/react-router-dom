import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.email.value)
        console.log(e.target.password.value)

        if (e.target.email.value && e.target.password.value) {
            localStorage.setItem("loggedIn", true)
            navigate("/post")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="email" name="email" placeholder='Enter Email' /><br />
                <input type="password" name="password" placeholder='Enter Password' /><br />
                <input type="submit" value="Submit" />
            </form>
        </div >
    )
}

export default Login
import { NavLink, Outlet } from "react-router-dom";


const Home = () => {

    return (
        <>
            <div className='header'>
                <NavLink to={"/auth/login"}>Login</NavLink>
                <NavLink to={"/auth/signup"}>SignUp</NavLink>

            </div>
            <Outlet />
        </>
    )
}

export default Home;

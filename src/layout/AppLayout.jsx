import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const AppLayout = () => {
    return (
        <div>
            {/* Header */}
            <Header />
            {/* loading */}
            {/* body */}
            <Outlet />
        </div>
    )
}
export default AppLayout
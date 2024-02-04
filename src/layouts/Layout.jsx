import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Sidebar from './Sidebar/Sidebar'

function Layout() {
    return (
        <>
            {/* <Header /> */}
            <Sidebar />
            <Outlet />
            {/* <Footer /> */}
        </>
    )
}

export default Layout
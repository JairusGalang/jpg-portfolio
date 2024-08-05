import React from 'react'
import Navbar from '../components/Navbar'

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <Navbar />
            </header>
            {children}
        </div>
    )
}

export default MainLayout
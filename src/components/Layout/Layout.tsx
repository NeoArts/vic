import React from 'react'
import Navbar from '../Navbar/Navbar'
import global from '../../styles/styles.css'

function Layout( { children } : any ) {
    return (
        <React.Fragment>
            <Navbar/>
            {children}
        </React.Fragment>
    )
}

export default Layout
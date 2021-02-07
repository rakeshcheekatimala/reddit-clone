import React from 'react'
import Header from './../Header';
import { Container } from '@material-ui/core';

/**
* @author
* @function Layout for the whole application
**/

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <br />
            <Container>
                {children}
            </Container>
        </>
    )

}

export default Layout;
import React from 'react'
import Header from './../Header';
import { Container } from '@material-ui/core';

/**
* @author
* @function Layout for the whole application
**/

const Layout = ({ children, value, onChange }) => {
    return (
        <>
            <Header value={value} onChange={onChange} />
            <br />
            <Container>
                {children}
            </Container>
        </>
    )

}

export default Layout;
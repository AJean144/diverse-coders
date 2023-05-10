import React, { Fragment } from 'react';
import NavBar from '../components/UIKit/NavBar'
import Header from '../components/Header'
import Body from '../components/Body'

const Home = (props) => (
    <Fragment>
        <NavBar {...props} searchInput />
        <Header {...props} />
        <Body {...props} />
    </Fragment>
)

export default Home;

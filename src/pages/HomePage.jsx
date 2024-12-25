import React from 'react'
import Jumbotron from '../components/Jumbotron';
import Education from '../components/Education';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Layout from '../layout/Layout';

const HomePage = () => {
    return(
    <Layout>
        <Jumbotron/>
        <Education/>
        <Work/>
        <Contact/>
    </Layout>
    )
}
    
    export default HomePage;
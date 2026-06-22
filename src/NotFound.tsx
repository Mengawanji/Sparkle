import React, {Fragment} from 'react';
import Navbar from './components/Navbar/Navbar';
import PageTitle from './components/pagetitle/PageTitle'
import Error from './components/404/404';
import Scrollbar from './components/scrollbar/scrollbar'
import Footer from './components/footer/Footer';

const NotFound: React.FC = () => {

    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Because Every Clean Space Matters'} pagesub={'404'}/> 
            <Error/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default NotFound;


import React from 'react';
import Home from './pages/home/page';
import Layout from './components/layout/Layout';

const Page = () => {
    return (
        <>
     <Layout headerStyle={undefined} footerStyle={undefined} headTitle={undefined} topBarStyle={undefined}>
            <Home />
                </Layout>
        </>
    );
};

export default Page;

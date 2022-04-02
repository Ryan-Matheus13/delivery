import React from 'react';

import Header from "../components/sections/Header";
import Warning from "../components/typography/Warning";
import Banner from "../components/banner/Banner";
import Categorys from "../components/sections/Categorys";

const Home = () => {
    return ( 
        <>
            <Header></Header>
            <Warning></Warning>
            <Banner></Banner>
            <Categorys></Categorys>
        </>
     );
}
 
export default Home;
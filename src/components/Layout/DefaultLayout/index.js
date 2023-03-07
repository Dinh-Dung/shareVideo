import Header from '~/components/Layout/components/Header';
import SlideBar from '~/components/Layout/components/Slidebar';

import React from 'react';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">
                <SlideBar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;

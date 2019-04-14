import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Preloader from './preloader/Preloader';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Main from './main/Main';
import Footer from './footer/Footer';

export default class App extends Component {
    render() {
        return (
            <div id="page-wrapper">
                <Preloader />
                <div id="page-container" className="sidebar-partial sidebar-visible-lg sidebar-no-animations">
                <Sidebar />

                    <div id="main-container">
                        <Header />

                        <Main />

                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
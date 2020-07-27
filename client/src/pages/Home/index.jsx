import React from 'react';
import './index.scss';
import { Route } from "react-router-dom";
import { SuperButton } from '../../modules/';

const Home = () => (
    <section className="desk">
        <div className="outer">
            <Route exact path="/home" component={SuperButton}></Route>
        </div>
    </section>
)

export default Home;
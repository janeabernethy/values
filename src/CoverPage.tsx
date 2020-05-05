import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './CoverPage.css';
import vase from './Images/Cover/CoverVase.png'; 
import * as GSAP from 'gsap';
import  {HashRouter, Switch, Route, Link } from 'react-router-dom';

export class CoverPage extends React.Component<RouteComponentProps> { 

    render() {
        return(
        <div className="coverContent">
            <div className="coverImageContainer">
                <img src={vase} id="coverVase" />
            </div>
            <div className="coverInfoContainer">

     
                    <div className="coverTitle">Your Personal Values</div>
                    <div className="coverText">
                        <p>
                            Your values are the things that you believe are important in the way you live and work. Having clarity around what we care about in a certain area of our lives helps us make good decisions. 
                            They (should) determine your priorities, and, deep down, they’re probably the measures you use to tell if your life is turning out the way you want it to.
                        </p>
                        <p>
                            When the things that you do and the way you behave match your values, life is usually good – you’re satisfied and content. But when these don’t align with your values, that’s when things feel… wrong. Conflict is often caused by a clash in people’s value’s. This can be a source of unhappiness.
                        </p>
                        <p>
                            This is why making a conscious effort to identify your values is so important.
                            Making value-based choices may not always be easy. However, making a choice that is aligned with your values will bring you inner and outer happiness and satisfaction.
                        </p>
                    </div>

                    <Link to="/start">
                        <button className="valueSubmit getStarted">Get started</button>
                    </Link>
            </div>
        </div>
        )
    }
}
  
import React  from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { getValues } from './values';
import './Results.css'
import {
    withRouter
  } from 'react-router-dom'

import copy from './Images/Results/CopyIcon.png'; 
import download from './Images/Results/DownloadIcon.png'; 
import restart from './Images/Results/RestartIcon.png'; 
type ResultProps = { key: string } ;


class Results extends React.Component<RouteComponentProps<ResultProps>> {
    constructor(props: RouteComponentProps<ResultProps>) {
        super(props);
    
        this.home = this.home.bind(this);
        this.download = this.download.bind(this);

    }

    home() {
        this.props.history.push('/')
    }

    copyToClipboard() {

        window.open(
            'https://www.canva.com/design/DAD7FT1sqVI/xqB5T_O3ONGAKTCdhYE0Dg/edit?category=tACFat6uXco&utm_source=onboarding',
            '_blank' // <- This is what makes it open in a new window.
          );
    }

    download() {
      
        const element = document.createElement("a");
        const key = this.props.match.params.key
        const list = getValues().filter(value => value.key === key)[0].options
        const copyList = list.toString()
        const file = new Blob([copyList], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "MyValues.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    render() {
        const key = this.props.match.params.key
        const currentOption = getValues().filter(value => value.key === key)[0];
        const orderedValues = currentOption.options
        return(
            <div className="resultsContent">
                <div className="resultsHeader">Your values in order</div>
                <div className="resultsDescription">These are your values in order. The first 5 are you non negotiables</div>
                <div className="resultsList">
                {
                orderedValues.map((aValue, index) =>
                <div className="resultItem">
                    
                    <div className={index < 5 ? "resultNumberBoxImportant" : "resultNumberBox"}>
                        <div className="resultNumber">{index + 1}</div></div>
                        <div className="resultValue">{aValue}</div>
                    </div>
                )}
                </div>
                <div className="resultButtons">
                    <button className="resultButton" onClick={this.copyToClipboard}>
                        <div><img className="resultButtonImage" src={copy}/></div>
                        <div className="resultButtonText">Make a values Poster</div>  
                    </button>
                    <button className="resultButton" onClick={this.download}>
                        <div><img className="resultButtonImage" src={download}/></div>
                        <div className="resultButtonText">Download your values</div>  
                    </button>
                    <button className="resultButton" onClick={this.home}>
                        <div><img className="resultButtonImage" src={restart}/></div>
                        <div className="resultButtonText">Start over</div>  
                    </button>
                </div>
            </div>
        )
    }
}
export default withRouter(Results)
import React  from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { getValues } from './values';
import './Results.css'
import {
    withRouter
  } from 'react-router-dom'

type ResultProps = { key: string } ;


class Results extends React.Component<RouteComponentProps<ResultProps>> {
    constructor(props: RouteComponentProps<ResultProps>) {
        super(props);
    
        this.home = this.home.bind(this);

    }

    home() {
        this.props.history.push('/')
    }

    render() {
        const key = this.props.match.params.key
        const currentOption = getValues().filter(value => value.key === key)[0];
        return(
            <div className="content">
                <div className="header">Your values in order</div>
                <div className="descriptionCentered">These are your values in order. The first 5 are you non negotiables</div>
                <ol className="resultsList">
                {
                currentOption.options.map(aValue =>
                <li>{aValue}</li>
                )}
                </ol>
                <button className="restartButton" onClick={this.home}> Start again</button>
            </div>
        )
    }
}
export default withRouter(Results)
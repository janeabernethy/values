import React  from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { getValues } from './values';
import './Seesaw.css'
import {
    withRouter
  } from 'react-router-dom'

type SeesawProps = { key: string } ;


class Seesaw extends React.Component<RouteComponentProps<SeesawProps>> {
    constructor(props: RouteComponentProps<SeesawProps>) {
        super(props);
    
        // this.home = this.home.bind(this);

    }

    home() {
        // this.props.history.push('/')
    }

    render() {
        const key = this.props.match.params.key
        //const currentOption = getValues().filter(value => value.key === key)[0];
        const values = ["cheap", "fun environment", "team enviornment", "eating helathy", "realistic", "feeling good", "convenient", "looking good", "strength", "good sleep"]
        return(
            <div className="content">
                <div className="seesawHeader">You are given 2 options with the extact same values: </div>
                
                <div className="seesawAddValueContainer">
                    <div className="seesawInput">
                    <form className="seesawForm">
                        <div className="sawsawInstructionCol1">
                            <div className="seesawInstruction">What is one thing that would make option 2 the most attractive?</div>
                            <input name="one"  className="seesawValueInput" type="text" placeholder="Enter a value"/>
                        </div>
                        <div className="sawsawInstructionCol2">
                            <input type="submit" className="valueSubmit" value="Next"/>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Seesaw)
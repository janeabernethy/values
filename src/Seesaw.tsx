import React, { ChangeEvent, FormEvent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { InputtedValues } from './inputtedValues'
import { getValues } from './values';
import './Seesaw.css'
import {
    withRouter
  } from 'react-router-dom'

type SeesawProps = { key: string } ;

interface SeesawState {
    items: string[]; //replace any with suitable type
    value: string;
  }

class Seesaw extends React.Component<RouteComponentProps<SeesawProps>, SeesawState> {
    constructor(props: RouteComponentProps<SeesawProps>) {
        super(props);
        const inputtedValues: Array<string> = [];
       
        this.state = {items: [], value:""}
        this.handleFirstAdded = this.handleFirstAdded.bind(this);

    }

    handleFirstAdded(event: ChangeEvent<HTMLInputElement>) {
        const target = event.target;
        const value = target.value;
        if (value.length == 0) {
            this.setState({items:[], value:''});
        }
        else {
            this.setState({items:[value], value:''});
        }
      }

      submitHidden() {


        const len = this.state.items.length
        return len == 0
    }

    home() {
        // this.props.history.push('/')
    }

    render() {
        const key = this.props.match.params.key
        //const currentOption = getValues().filter(value => value.key === key)[0];
        const values = ["cheap", "fun environment", "team enviornment", "eating helathy", "realistic", "feeling good", "convenient", "looking good", "strength", "good sleep"]
        return(
            <div className="seesawContent">
                <div className="seesawLeft">
                    <div className="seesawHeader">Your values</div>
                    <div className="seesawInstructions">
                        <p className="seesawInstruction">You are given two sets of options that contain the same values </p>
                        <p className="seesawInstruction">What is one value that you could add to Option Set 1 to make it more attractive than Option Set 2?</p>
                    </div>
                    <div className="seesawInput">
                    <form className="seesawForm" autoComplete="off">
                            <input name="one"  className="seesawValueInput" type="text" placeholder="Enter a value" onChange={this.handleFirstAdded}/>
                            <div className="seesawSubmitDiv">
                            <input type="submit" className="seesawValueSubmit" value="Next" hidden={this.submitHidden()}/>
                            </div>
                    </form>
                </div>
                </div>
                <div className="seesawRight">

                </div>
            </div>
        )
    }
}
export default withRouter(Seesaw)
import React, { ChangeEvent, FormEvent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {  valuesToArray } from './inputtedValues'
import { getValues } from './values';
import './Seesaw.css'
import {
    withRouter
  } from 'react-router-dom'

type SeesawProps = { key: string } ;

interface SeesawState {
    items: string[]; 
    stepNumber: number;
  }

class Seesaw extends React.Component<RouteComponentProps<SeesawProps>, SeesawState> {
    constructor(props: RouteComponentProps<SeesawProps>) {
        super(props);       
        this.state = {items: [], stepNumber:0}
        this.handleItemAdded = this.handleItemAdded.bind(this);
        this.input1Disabled = this.input1Disabled.bind(this);
        this.input2Disabled = this.input2Disabled.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleItemAdded(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        if (value.length === 0) {
            return;
        }
        else {
            var updatedItems  = Object.assign([], this.state.items) as Array<string>
            updatedItems[this.state.stepNumber] = value
            this.setState({items:updatedItems, stepNumber:this.state.stepNumber});
        }
      }

    submit1Hidden() {
        if (this.state.stepNumber === 0) {
            return this.state.items.length === 0
        }
        else {
            return true
        }
    }

    submit2Hidden() {
        if (this.state.stepNumber === 1) {
            return this.state.items.length < 2
        }
        else {
            return true
        }
    }

    submit3Hidden() {
        if (this.state.stepNumber === 2) {
            return this.state.items.length === 2
        }
        else {
            return true
        }
    }

    onSubmit(event: FormEvent<HTMLFormElement>) {
        this.setState({items:this.state.items, stepNumber: this.state.stepNumber + 1})
        if(this.state.stepNumber === 2) {
            const key = this.props.match.params.key
            const currentOption = getValues().filter(value => value.key === key)[0];
            const updatedOptions = currentOption.options.concat(this.state.items)
            currentOption.options = updatedOptions
            event.preventDefault();
            this.props.history.push({pathname: `/comparison${this.props.match.params.key}`})
        }
        else {
            event.preventDefault();
        }

    }

    step2Hidden() {
        return this.state.stepNumber < 1
    }

    step3Hidden() {
        return this.state.stepNumber < 2
    }

    input1Disabled() {
        return this.state.stepNumber > 0
    }

    input2Disabled() {
        return this.state.stepNumber > 1
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
                    <div>
                    <form className="seesawForm" autoComplete="off" onSubmit={this.onSubmit}>
                        <input name="one"  className="seesawValueInput" type="text" placeholder="Enter a value" onChange={this.handleItemAdded} disabled={this.input1Disabled()}/>
                        <div className="seesawSubmitDiv">
                            <input type="submit" className="seesawValueSubmit" value="Next" hidden={this.submit1Hidden()}/>
                        </div>
                    </form>
                    </div>
                    <div hidden={this.step2Hidden()}>
                    <div className="seesawInstructions">
                        <p className="seesawInstruction">Now both lists have FOO added</p>
                        <p className="seesawInstruction">What is one more value that you could add to Option Set 1 to make it more attractive than Option Set 2?</p>
                    </div>
                    <form className="seesawForm" autoComplete="off" onSubmit={this.onSubmit}>
                        <input name="two"  className="seesawValueInput" type="text" placeholder="Enter a value" onChange={this.handleItemAdded} disabled={this.input2Disabled()}/>
                        <div className="seesawSubmitDiv">
                            <input type="submit" className="seesawValueSubmit" value="Next" hidden={this.submit2Hidden()}/>
                        </div>
                    </form>
                    </div>
                    <div hidden={this.step3Hidden()}>
                    <div className="seesawInstructions">
                        <p className="seesawInstruction">Now both lists have FOO added</p>
                        <p className="seesawInstruction">What is one more value that you could add to Option Set 1 to make it more attractive than Option Set 2?</p>
                    </div>
                    <form className="seesawForm" autoComplete="off" onSubmit={this.onSubmit}>
                        <input name="three"  className="seesawValueInput" type="text" placeholder="Enter a value" onChange={this.handleItemAdded}/>
                        <div className="seesawSubmitDiv">
                            <input type="submit" className="seesawValueSubmit" value="Next" hidden={this.submit3Hidden()}/>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
                <div className="seesawRight">

                </div>
            </div>
        )
    }
}
export default withRouter(Seesaw)
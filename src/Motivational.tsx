import React, { ChangeEvent, FormEvent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {  valuesToArray } from './inputtedValues'
import { getValues } from './values';
import './Motivational.css'
import {
    withRouter
  } from 'react-router-dom'
import { Seesaw, SeesawProps } from './Seesaw'
import { throws } from 'assert';

type MotivationalValueProps = { key: string } ;

interface MotivationalValueState {
    items: string[]; 
    stepNumber: number;
    seesaw: Seesaw
    step2Hidden: boolean
    step3Hidden: boolean
  }

class MotivationalValues extends React.Component<RouteComponentProps<MotivationalValueProps>, MotivationalValueState> {
    constructor(props: RouteComponentProps<MotivationalValueProps>) {
        super(props); 
        const key = this.props.match.params.key
        const currentOption = getValues().filter(value => value.key === key)[0];
        const items = currentOption.options

        this.state = {items: [], stepNumber:0, seesaw: new Seesaw({items: items}, {items: items}), step2Hidden: true, step3Hidden: true}
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
        this.setState({items:this.state.items, stepNumber: this.state.stepNumber, step2Hidden: this.state.step2Hidden, step3Hidden: this.state.step3Hidden})
        this.showNext()
        event.preventDefault();

    }

    showNext() {
        if(this.state.stepNumber === 0) {
            this.setState({items:this.state.items, stepNumber: this.state.stepNumber+1, step2Hidden: false, step3Hidden: this.state.step3Hidden})
        }
        if(this.state.stepNumber === 1) {
            this.setState({items:this.state.items, stepNumber: this.state.stepNumber+1, step2Hidden: false, step3Hidden: false})
        }

        if(this.state.stepNumber === 2) {
            const key = this.props.match.params.key
            const currentOption = getValues().filter(value => value.key === key)[0];
            const updatedOptions = currentOption.options.concat(this.state.items)
            currentOption.options = updatedOptions
            this.props.history.push({pathname: `/additional${this.props.match.params.key}`})
        }

    }

    isStep2Hidden() {
        return this.state.step2Hidden
    }

    isStep3Hidden() {
        return this.state.step3Hidden
    }

    input1Disabled() {
        return this.state.stepNumber > 0
    }

    input2Disabled() {
        return this.state.stepNumber > 1
    }

    render() {
        const key = this.props.match.params.key
        const currentOption = getValues().filter(value => value.key === key)[0];
        const items = currentOption.options
        return(
            <div className="additionalContent">
                <div className="additionalLeft">
                    <div className="additionalHeader">Your {currentOption.name} Motivational Values</div>
                    <div className="additionalInstructions">
                        <p className="additionalInstruction">Remember a time you were really motivated about {currentOption.name.toLowerCase()}. What is one word to describe why?</p>
                    </div>
                    <div className="additionalInput">
                    <div>
                    <form className="additionalForm" autoComplete="off" onSubmit={this.onSubmit}>
                        <input name="one"  className="additionalValueInput" type="text" placeholder="Enter a value" onChange={this.handleItemAdded} disabled={this.input1Disabled()}/>
                        <div className="additionalSubmitDiv">
                            <input type="submit" className="valueSubmit" value="Next" hidden={this.submit1Hidden()}/>
                        </div>
                    </form>
                    </div>
                    <div hidden={this.isStep2Hidden()}>
                    <div className="additionalInstructions">
                        <p className="additionalInstruction">Can you remember another time? What would be one word to descrive why?</p>
                    </div>
                    <form className="additionalForm" autoComplete="off" onSubmit={this.onSubmit}>
                        <input name="two"  className="additionalValueInput" type="text" placeholder="Enter a value" onChange={this.handleItemAdded} disabled={this.input2Disabled()}/>
                        <div className="additionalSubmitDiv">
                            <input type="submit" className="valueSubmit" value="Next" hidden={this.submit2Hidden()}/>
                        </div>
                    </form>
                    </div>
                    <div hidden={this.isStep3Hidden()}>
                    <div className="additionalInstructions">
                        <p className="additionalInstruction">Can you remember another time? What would be one more word to descrive why?</p>
                    </div>
                    <form className="additionalForm" autoComplete="off" onSubmit={this.onSubmit}>
                        <input name="three"  className="additionalValueInput" type="text" placeholder="Enter a value" onChange={this.handleItemAdded}/>
                        <div className="additionalSubmitDiv">
                            <input type="submit" className="valueSubmit" value="Next" hidden={this.submit3Hidden()}/>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
                <div className="additionalRight">
                
                </div>
            </div>
        )
    }
}
export default withRouter(MotivationalValues)
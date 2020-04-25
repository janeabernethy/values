import React, { ChangeEvent, FormEvent } from 'react';
import { getValues } from './values';
import { InputtedValues, updateInputValue, valuesCount, valuesToArray } from './inputtedValues'
import  {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import './Options.css';
import vase from './Images/OptionInput/Vase.png'; 


type OptionsProps = { key: string };
export class Options extends React.Component<RouteComponentProps<OptionsProps>> { 
  constructor(props: RouteComponentProps<OptionsProps>) {
    super(props);
    const inputtedValues = {} as InputtedValues;
    this.state =  inputtedValues;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   submitDisabled() {
     return valuesCount(this.state) < 5
  }

 handleChange(event: ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    var updatedValues = updateInputValue(this.state, target.name, target.value)
    this.setState(updatedValues)
  }

 handleSubmit(event: FormEvent<HTMLFormElement>) {
    const inputArray = valuesToArray(this.state)
    const key = this.props.match.params.key
    const currentOption = getValues().filter(value => value.key === key)[0];
    currentOption.options = inputArray
    event.preventDefault();
    this.props.history.push({pathname: `/additional${this.props.match.params.key}`})
  }

  render() {
    const key = this.props.match.params.key
    const currentOption = getValues().filter(value => value.key === key)[0];
    return (
      <div className="optionsInputContainer">
        <div className="optionsPanel">
            <img className="vaseImg" src={vase} />
        </div>
        <div className="optionsInput">
        <div className="optionsHeader">{currentOption.name}</div>
          <div className="optionsDescription">{currentOption.description}</div>
          <div className="optionsRules">Add at least 5 values</div>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <input name="one"   className="valueInput" type="text" placeholder="Enter a value" onChange={this.handleChange} />
            <input name="two"   className="valueInput" type="text" placeholder="Enter a value" onChange={this.handleChange} />
            <input name="three" className="valueInput" type="text" placeholder="Enter a value" onChange={this.handleChange} />
            <input name="four"  className="valueInput" type="text" placeholder="Enter a value" onChange={this.handleChange} />
            <input name="five"  className="valueInput" type="text" placeholder="Enter a value" onChange={this.handleChange} />
            <input name="six"   className="valueInput" type="text" placeholder="Enter a value" onChange={this.handleChange} />
            <input name="seven" className="valueInput" type="text" placeholder="Enter a value" onChange={this.handleChange} />
            <input name="eight" className="valueInput" type="text" placeholder="Enter a value" onChange={this.handleChange} />
            <input name="nine"  className="valueInput" type="text" placeholder="Enter a value" onChange={this.handleChange} />
            <input name="ten"   className="valueInput" type="text" placeholder="Enter a value" onChange={this.handleChange} />
            <input type="submit" className="valueSubmit" value="Next" disabled={this.submitDisabled()}/>
        </form>
      </div>
      </div>
    );
  }
}
import React,  { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Value, getValues } from './values';
import { RouteComponentProps } from 'react-router-dom';
import './Options.css';
import { threadId } from 'worker_threads';

type OptionsProps = { key: string };
type OptionsState = { values: Map<string, string>, count: number};
export class Options extends React.Component<RouteComponentProps<OptionsProps>, OptionsState> { 
  constructor(props: RouteComponentProps<OptionsProps>) {
    super(props);
    let myMap = new Map();

    this.state = {values: myMap, count: 0};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  submitDisabled() {
    var values = {...this.state.values}
    return this.state.count < 5
  }

 handleChange(event: ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    const name = target.name;

    var values = {...this.state.values}
    var count = this.state.count

    if(target.value.length == 0) {
      count--;
      this.setState({count: count})
    }
  
    if(values[name] == null || values[name].length == 0) {
      count++;
      this.setState({count: count})
    }

    values[name] = target.value;
    this.setState({values})
  }

 handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  render() {
    const key = this.props.match.params.key
    const currentOption = getValues().filter(value => value.key === key)[0];
    return (
      <div className="optionsInputContainer">
        <div className="optionsPanel">
          <div className="optionsHeader">{currentOption.name}</div>
          <div className="optionsDescription">{currentOption.description}</div>
          <div className="optionsRules">Add at least 5 values</div>
        </div>
        <div className="optionsInput">
          <form onSubmit={this.handleSubmit}>
            <input name="one" className="valueInput" type="text" placeholder="Enter a value" onChange={this.handleChange} />
            <input name="two" className="valueInput" type="text" placeholder="Enter a value" onChange={this.handleChange} />
            <input name="three" className="valueInput" type="text" placeholder="Enter a value" onChange={this.handleChange} />
            <input name="four" className="valueInput" type="text" placeholder="Enter a value" onChange={this.handleChange} />
            <input name="five" className="valueInput" type="text" placeholder="Enter a value" onChange={this.handleChange} />
            <input name="six" className="valueInput" type="text" placeholder="Enter a value" onChange={this.handleChange} />
            <input name="seven" className="valueInput" type="text" placeholder="Enter a value" onChange={this.handleChange} />
            <input name="eight" className="valueInput" type="text" placeholder="Enter a value" onChange={this.handleChange} />
            <input name="nine" className="valueInput" type="text" placeholder="Enter a value" onChange={this.handleChange} />
            <input name="ten" className="valueInput" type="text" placeholder="Enter a value" onChange={this.handleChange} />
            <input type="submit" className="valueSubmit" value="Next" disabled={this.submitDisabled()}/>
        </form>
      </div>
      </div>
    );
  }
}
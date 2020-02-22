import React,  { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Value, getValues } from './values';
import { RouteComponentProps } from 'react-router-dom';
import './Options.css';
import { threadId } from 'worker_threads';

type TParams = { key: string };
export class Options extends React.Component<RouteComponentProps<TParams>> { 
  constructor(props: RouteComponentProps<TParams>) {
    super(props);
    let myMap = new Map();

    this.state = {values: myMap};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  submitDisabled() {

    console.log("Sub disabled")
    return true 
  }

 handleChange(event: ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });

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
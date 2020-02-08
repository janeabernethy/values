import React,  { MouseEvent } from 'react';
import './App.css';
import { Value, getValues } from './values';
import PropTypes from 'prop-types'
import { Options } from './Options'
var classNames = require('classnames');




export class App extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="header">Select an area of values you work on</div>
        <div className="options">
        {
        getValues().map(aValue =>
          <ValueOption value = { aValue } />
        )}
        </div>
      </div>
    );
  }
}


interface ValueOptionProps {
  value: Value;
}

class ValueOption extends React.Component<ValueOptionProps>  {


  render () {

    return (
      <button className="optionButton">
        <div className="option">
          <div className="optionTitle">{this.props.value.name}</div>
          <div className="optionDescription">{this.props.value.description}</div>
        </div>
      </button>
    )
  }
}


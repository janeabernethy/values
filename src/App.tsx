import React,  { MouseEvent } from 'react';
import './App.css';
import { Value, getValues } from './values';
import  {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import Options from './Options'
var classNames = require('classnames');


export class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="content">
          <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/option:id" component={Options}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const Home = () => (
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

interface ValueOptionProps {
  value: Value;
}

class ValueOption extends React.Component<ValueOptionProps>  {


  render () {


    return (
      <Link to={`/options:${this.props.value.key}`}>
      <button className="optionButton">
        <div className="option">
          <div className="optionTitle">{this.props.value.name}</div>
          <div className="optionDescription">{this.props.value.description}</div>
        </div>
      </button>
      </Link>
    )
  }
}


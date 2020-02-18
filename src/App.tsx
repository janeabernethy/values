import React,  { MouseEvent } from 'react';
import './App.css';
import { Value, getValues } from './values';
import  {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Options } from './Options'


var classNames = require('classnames');

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="content">
          <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/option:key" component={Options}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const Home = () => (
    <div className="content">
    <div className="header">Select an area of values you work on</div>
    <div className="description">Our values are our principles, ethics, priorities in a given context. They determine what is important to us and what we care about. Our motivation levels are linked to our values. We can feel our energy increase when our values are being met and conversely we can struggle with motivation when our values are not present.</div>
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
      <Link to={`/option${this.props.value.key}`}>
      <button className="optionButton">
        <div className={classNames(`option ${this.props.value.class}`)}>
          <img className="optionImage" src={this.props.value.image}/>
          <div className="optionTitle">{this.props.value.name}</div>
          <div className="optionDescription">{this.props.value.description}</div>
        </div>
      </button>
      </Link>
    )
  }
}


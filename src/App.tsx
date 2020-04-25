import React,  { MouseEvent } from 'react';
import './App.css';
import { Value, getValues } from './values';
import  {HashRouter, Switch, Route, Link } from 'react-router-dom';
import { Comparison } from './Comparison'
import { Options } from './Options'
import AdditonalValues  from './Additional'

import  Results  from './Results'

var classNames = require('classnames');

export class App extends React.Component {
  render() {
    return (
      <HashRouter>
        {/* <div className="content"> */}
          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/option:key" component={Options}/>
          <Route path="/comparison:key" component={Comparison}/>
          <Route path="/results:key" component={Results} />
          <Route path="/additional:key" component={AdditonalValues} />
          </Switch>
        {/* </div> */}
      </HashRouter  >
    );
  }
}

const Home = () => (
    <div className="content">
      <div className="header">Select an area of values to work on</div>
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
          <div className="optionImageDiv">
            <img className="optionImage" src={this.props.value.image}/>
          </div>
          <div className="optionText">
            <div className="optionTitle">{this.props.value.name}</div>
            <div className="optionDescription">{this.props.value.description}</div>
          </div>
        </div>
      </button>
      </Link>
    )
  }
}


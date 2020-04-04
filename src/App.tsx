import React,  { MouseEvent } from 'react';
import './App.css';
import { Value, getValues } from './values';
import  {HashRouter, Switch, Route, Link } from 'react-router-dom';
import { Comparison } from './Comparison'
import { Options } from './Options'
import Seesaw  from './Seesaw'
import  Results  from './Results'

var classNames = require('classnames');

export class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="content">
          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/option:key" component={Options}/>
          <Route path="/comparison:key" component={Comparison}/>
          <Route path="/results:key" component={Results} />
          <Route path="/seesaw:key" component={Seesaw} />
          </Switch>
        </div>
      </HashRouter  >
    );
  }
}

const Home = () => (
    <div className="content">
    {/* <Seesaw /> */}
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


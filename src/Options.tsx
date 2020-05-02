import React, { ChangeEvent, FormEvent } from 'react';
import { getValues } from './values';
import { InputtedValues, updateInputValue, valuesCount, valuesToArray } from './inputtedValues'
import { RouteComponentProps } from 'react-router-dom';
import * as GSAP from 'gsap';
import './Options.css';
import vase from './Images/OptionInput/Vase.png'; 
import branch1 from './Images/OptionInput/Branch1.png'; 
import branch2 from './Images/OptionInput/Branch2.png'; 
import branch3 from './Images/OptionInput/Branch3.png'; 
import branch4 from './Images/OptionInput/Branch4.png'; 
import branch5 from './Images/OptionInput/Branch5.png'; 
import branch6 from './Images/OptionInput/Branch6.png';
import branch7 from './Images/OptionInput/Branch7.png'; 
import branch8 from './Images/OptionInput/Branch8.png'; 


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
     return valuesCount(this.state) < 1
  }

 updateLeavesShown(count: number) {
  const branch1 = document.getElementById("branch1")
  const branch2 = document.getElementById("branch2")
  const branch3 = document.getElementById("branch3")
  const branch4 = document.getElementById("branch4")
  const branch5 = document.getElementById("branch5")
  const branch6 = document.getElementById("branch6")
  const branch7 = document.getElementById("branch7")
  const branch8 = document.getElementById("branch8")


  if (count === 1) {
    GSAP.TweenMax.to(branch1, 0.3, {translateY: 105, rotate: 3, delay: 0.2})
    GSAP.TweenMax.to(branch1, 0.2, {opacity: 1, delay: 0.3})
  }
  else if (count === 2) {
    GSAP.TweenMax.to(branch2, 0.3, {translateY: 20, rotate: -6, delay: 0.3})
    GSAP.TweenMax.to(branch2, 0.2, {opacity: 1, delay: 0.4})
  }
  else if (count === 3) {

    GSAP.TweenMax.to(branch3, 0.2, {translateY: 150, rotate: -5, delay: 0.3})
    GSAP.TweenMax.to(branch3, 0, {opacity: 1, delay: 0.3})

    GSAP.TweenMax.to(branch1, 0.2, {translateY: 50, rotate: 1.5, delay: 0.3})


  }
  else if(count === 4) {
        GSAP.TweenMax.to(branch2, 0.2, {translateY: 20, rotate: -3, delay: 0.3})

    GSAP.TweenMax.to(branch3, 0.2, {translateY: 50, rotate: -2.5, delay: 0.3})

  }
  else if(count === 5) {
    GSAP.TweenMax.to(branch1, 0.2, {translateY: 0, rotate: 0, delay: 0.3})

    GSAP.TweenMax.to(branch2, 0.2, {translateY: 0, rotate: 0, delay: 0.3})

    GSAP.TweenMax.to(branch3, 0.2, {translateY: 0, rotate: 0, delay: 0.3})

  }
  else if(count === 6) {
    GSAP.TweenMax.to(branch4, 0, {opacity: 1, delay: 0.3})

    GSAP.TweenMax.to(branch4, 0.2, {translateY: 0, rotate: 0, delay: 0.3})

  } 
  else if(count === 7) {
    GSAP.TweenMax.to(branch5, 0, {opacity: 1, delay: 0.3})

    GSAP.TweenMax.to(branch5, 0.2, {translateY: 0, rotate: 0, delay: 0.3})
  }
  else if (count === 8) {
    GSAP.TweenMax.to(branch6, 0, {opacity: 1, delay: 0.3})

    GSAP.TweenMax.to(branch6, 0.2, {translateX: 0, translateY: 0, rotate: 0, delay: 0.3})
  }
  else if (count === 9) {
    GSAP.TweenMax.to(branch7, 0, {opacity: 1, delay: 0.3})

    GSAP.TweenMax.to(branch7, 0.2, {translateX: 0, translateY: 0, rotate: 0, delay: 0.3})

  }
  else if (count === 10) {
    GSAP.TweenMax.to(branch8, 0, {opacity: 1, delay: 0.3})

    GSAP.TweenMax.to(branch8, 0.2, {translateX: 0, translateY: 0, rotate: 0, delay: 0.3})
  }
 }

 numberOfInputtedValues() {
   var leavesToShow = 0
   if(this.state["one"] != null && this.state["one"].length > 0) {
     leavesToShow++;
   }
   if(this.state["two"] != null && this.state["two"].length > 0) {
    leavesToShow++;
  }
  if(this.state["three"] != null && this.state["three"].length > 0) {
    leavesToShow++;
  }
  if(this.state["four"] != null && this.state["four"].length > 0) {
    leavesToShow++;
  }
  if(this.state["five"] != null && this.state["five"].length > 0) {
    leavesToShow++;
  }
  if(this.state["six"] != null && this.state["six"].length > 0) {
    leavesToShow++;
  }
  if(this.state["seven"] != null && this.state["seven"].length > 0) {
    leavesToShow++;
  }
  if(this.state["eight"] != null && this.state["eight"].length > 0) {
    leavesToShow++;
  }
  if(this.state["nine"] != null && this.state["nine"].length > 0) {
    leavesToShow++;
  }
  if(this.state["ten"] != null && this.state["ten"].length > 0) {
    leavesToShow++;
  }
   this.updateLeavesShown(leavesToShow)

 }
 handleChange(event: ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    var updatedValues = updateInputValue(this.state, target.name, target.value)
    this.setState(updatedValues)
    this.numberOfInputtedValues()
  }

 handleSubmit(event: FormEvent<HTMLFormElement>) {
    const inputArray = valuesToArray(this.state)
    const key = this.props.match.params.key
    const currentOption = getValues().filter(value => value.key === key)[0];
    currentOption.options = inputArray
    event.preventDefault();
    this.props.history.push({pathname: `/motivational${this.props.match.params.key}`})
  }

  render() {
    const key = this.props.match.params.key
    const currentOption = getValues().filter(value => value.key === key)[0];
    return (
      <div className="optionsInputContainer">
        <div className="optionsPanel">
          <img id="branch8" src={branch8} />
          <img id="branch1" src={branch1} />
          <img id="branch2" src={branch2} />
          <img id="branch3" src={branch3} />
          <img id="branch4" src={branch4} />
          <img id="branch5" src={branch5} />
          <img id="branch6" src={branch6} />
          <img id="branch7" src={branch7} />

          <img className="vaseImg" src={vase} />
        </div>
        <div className="optionsInput">
        <div className="optionsHeader">Your {currentOption.name} Values</div>
          <div className="optionsRules">Ask yourself ‘what is important to me in my {currentOption.name}?’ several times until you run out of answers. List each answer.</div>
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
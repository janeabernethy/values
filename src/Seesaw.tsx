import React  from 'react';
import './Seesaw.css';
import seesawBase from './Images/Seesaw/SeesawBase.png'; 
import swingyPart from './Images/Seesaw/SwingyPart.png'; 
import * as GSAP from 'gsap';

export type SeesawProps = { 
    items: Array<string>
 } ;
type SeesawState = { 
    items: Array<string>,
}

export class Seesaw extends React.Component<SeesawProps, SeesawState> {
    constructor(props: SeesawProps, state: SeesawState) {
        super(props);
    }

  
    componentDidMount() {
        const addedOptionA1 = document.getElementById("addedOptionA1")
        const addedOptionA2 = document.getElementById("addedOptionA2")
        const addedOptionA3 = document.getElementById("addedOptionA3")
        const addedOptionB1 = document.getElementById("addedOptionB1")
        const addedOptionB2 = document.getElementById("addedOptionB2")
        const addedOptionB3 = document.getElementById("addedOptionB3")
    }
    render() {
        return (
        <div className="seesawContent">
            <div className="seesawWrapper">
                <div className="seeesawSectionA">
                <div id="addedOptionA3" className="addedOptionA3">
                    <div className="options1Set">
                        <div className="optionBlock blockC">
                            <span id="addedOptionA3Text"  className="blockTextAdded">Added</span>
                        </div>
                    </div>
                </div>
                <div id="addedOptionA2" className="addedOptionA2">
                    <div className="options1Set">
                        <div className="optionBlock blockC">
                            <span id="addedOptionA2Text" className="blockTextAdded">Added</span>
                        </div>
                    </div>
                </div>
                <div id="addedOptionA1" className="addedOptionA1">
                    <div className="options1Set">
                        <div className="optionBlock">
                            <span id="addedOptionA1Text" className="blockTextAdded">Added</span>
                        </div>
                    </div>
                </div>
                <div className="seesawOptionsA" id="seesawOptionsA">
                    {
                        this.props.items.map((object, i) => 
                          i %2 == 0 ? <Seesaw1Option value={object}/> : <Seesaw2Option value={object}/>           
                        )
                    }
                </div>
                </div>
                <div id="addedOptionB3" className="addedOptionB3">
                    <div className="options1Set">
                        <div className="optionBlock">
                            <span id="addedOptionB3Text" className="blockTextAdded">Added</span>
                        </div>
                    </div>
                </div>
                <div id="addedOptionB2" className="addedOptionB2">
                    <div className="options1Set">
                        <div className="optionBlock">
                            <span id="addedOptionB2Text" className="blockTextAdded">Added</span>
                        </div>
                    </div>
                </div>
                <div id="addedOptionB1" className="addedOptionB1">
                    <div className="options1Set">
                        <div className="optionBlock">
                            <span id="addedOptionB1Text" className="blockTextAdded">Added</span>
                        </div>
                    </div>
                </div>
                <div id="seesawOptionsB" className="seesawOptionsB">
                    {
                        this.props.items.map((object, i) => 
                          i %2 == 0 ? <Seesaw1Option value={object}/> :<Seesaw2Option value={object}/>            
                        )
                    }
                </div>
                <div className="seesawBottomSection">
                    <div id="seesawSwingyPart" className="seesawSwingyPart"><img className="seesawSwingyImg" src={swingyPart} /></div>
                    <div className="seesawBase"><img className="seesawBaseImg" src={seesawBase} /></div>
                </div>
            </div>
        </div>
        )
    }

     addOption(newValue: string, count: number, callback: () => void) {
        
        const addedATime = 0.5
        const addedADelay = 0.2
        const offset = 22
        const offsetTime = 0.6
        const offsetDelay = addedATime + addedADelay
        const addedBTime = 0.5
        const addedBDelay = offsetDelay + offsetTime + 1.0
        const resetDelay = addedBTime + addedBDelay
        const resetTime = 1.0

 

        var aTextID = "addedOptionA1Text"
        var bTextID = "addedOptionB1Text"

        const firstValueA = document.getElementById("addedOptionA1")
        const secondValueA = document.getElementById("addedOptionA2") 
        const thirdValueA = document.getElementById("addedOptionA3") 

        const firstValueB = document.getElementById("addedOptionB1")
        const secondValueB = document.getElementById("addedOptionB2") 
        const thirdValueB = document.getElementById("addedOptionB3") 

        if(count === 1) {
  
            aTextID = "addedOptionA2Text"
            bTextID = "addedOptionB2Text"
        }
        else if(count === 2) {
            aTextID = "addedOptionA3Text"
            bTextID = "addedOptionB3Text"
        }

        var aText = document.getElementById(aTextID)
        var bText = document.getElementById(bTextID)

        aText.innerText = newValue
        bText.innerText = newValue

        if(count < 2) {
            const fadeInA = count === 0 ? firstValueA : secondValueA
            const fadeInB = count === 0 ? firstValueB : secondValueB
            GSAP.TweenMax.to(fadeInA, addedATime, {opacity: 1, delay: addedADelay})

            const swingyPart = document.getElementById("seesawSwingyPart")
            GSAP.TweenMax.to(swingyPart, offsetTime, {rotation: -15, delay: offsetDelay})

            const sideA = document.getElementById("seesawSideA")
            GSAP.TweenMax.to(sideA, offsetTime, {bottom: -offset, delay: offsetDelay})

            const sideB = document.getElementById("seesawSideB")
            GSAP.TweenMax.to(sideB, offsetTime, {bottom: offset, delay: offsetDelay})

            const optionsA = document.getElementById("seesawOptionsA")
            GSAP.TweenMax.to(optionsA, offsetTime, {bottom: 83-offset, delay: offsetDelay})

            GSAP.TweenMax.to(firstValueA, offsetTime, {bottom: 403-offset, delay: offsetDelay})
            GSAP.TweenMax.to(secondValueA, offsetTime, {bottom: 449-offset, delay: offsetDelay})

            GSAP.TweenMax.to(firstValueB, offsetTime, {bottom: 403+offset, delay: offsetDelay})
            GSAP.TweenMax.to(secondValueB, offsetTime, {bottom: 449+offset, delay: offsetDelay})

            const optionsB = document.getElementById("seesawOptionsB")
            GSAP.TweenMax.to(optionsB, offsetTime, {bottom: 83+offset, delay: offsetDelay})

            GSAP.TweenMax.to(fadeInB, addedBTime, {opacity: 1, delay:addedBDelay})

            GSAP.TweenMax.to(swingyPart, resetTime, {rotation: 0, delay: resetDelay})
            GSAP.TweenMax.to(sideA, resetTime, {bottom: 0, delay: resetDelay})
            GSAP.TweenMax.to(sideB, resetTime, {bottom: 0, delay: resetDelay})
            GSAP.TweenMax.to(optionsA, resetTime, {bottom: 83, delay: resetDelay})
            GSAP.TweenMax.to(firstValueA, resetTime, {bottom: 403, delay: resetDelay})
            GSAP.TweenMax.to(secondValueA, resetTime, {bottom: 449, delay: resetDelay})
            GSAP.TweenMax.to(optionsB, resetTime, {bottom: 83, delay: resetDelay})
            GSAP.TweenMax.to(firstValueB, resetTime, {bottom: 403, delay:resetDelay, onComplete: callback})
            GSAP.TweenMax.to(secondValueB, resetTime, {bottom: 449, delay:resetDelay})
        }
        else {
            GSAP.TweenMax.to(thirdValueA, addedATime, {opacity: 1, delay: addedADelay})
            GSAP.TweenMax.to(thirdValueB, addedATime, {opacity: 1, delay: addedADelay})
            GSAP.TweenMax.to(thirdValueA, 1, {opacity: 1, delay: addedADelay + addedATime, onComplete: callback})
        }
    }
}

interface Seesaw1OptionProps {
    value: string;
  }
  
  class Seesaw1Option extends React.Component<Seesaw1OptionProps>  {
    render () {
      return (
        <div className="options1Set">
            <div className="optionBlock">
                <span className="blockText block1Text">{this.props.value}</span>
            </div>
        </div>
      )
    }
  }


  interface Seesaw2OptionProps {
    value: string;
  }
  
  class Seesaw2Option extends React.Component<Seesaw1OptionProps>  {
    render () {
      return (
        <div className="options2Set">
            <div className="optionBlock">
                <span className="blockText block2Text">{this.props.value}</span>
            </div>
        </div>
      )
    }
  }
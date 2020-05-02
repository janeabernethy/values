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

    render() {

        const items = this.props.items;
        return (
        <div className="seesawContent">
            <div className="seesawWrapper">
                <div id="seesawSectionA">
                <div className="addedOptionsAContainer">
                    <div id="addedOptionA3">
                        <div id="addedOptionBlockA3" className="optionBlockTextContainer whiteBlock">
                            <div id="addedOptionA3Text"  className="blockTextAdded optionBlock">Added</div>
                        </div>
                    </div>
                    <div id="addedOptionA2">
                        <div id="addedOptionBlockA2" className="optionBlockTextContainer whiteBlock">
                            <div id="addedOptionA2Text" className="blockTextAdded optionBlock">Added</div>
                        </div>
                    </div>
                    <div id="addedOptionA1">
                        <div id="addedOptionBlockA1" className="optionBlockTextContainer whiteBlock">
                            <div id="addedOptionA1Text" className="blockTextAdded optionBlock">Added</div>
                        </div>
                    </div>
                </div>
                <div className="seesawOptionsA" id="seesawOptionsA">
                {
                    items.map((object, i) => 
                        i % 3 == 0 ? <SeesawOption value={object}/> : <Seesaw2Option items={items} index={i}/>             
                    )
                }
                </div>
                </div>
                <div id="seesawSectionB">
                    <div className="addedOptionsBContainer">
                        <div id="addedOptionB3">           
                            <div  id="addedOptionBlockB3" className="optionBlockTextContainer whiteBlock">
                                <div id="addedOptionB3Text" className="blockTextAdded optionBlock">Added</div>
                            </div>
                        </div>
                        <div id="addedOptionB2">    
                            <div id="addedOptionBlockB2" className="optionBlockTextContainer whiteBlock">
                                <div id="addedOptionB2Text" className="blockTextAdded optionBlock">Added</div>
                            </div>
                        </div>
                        <div id="addedOptionB1">
                            <div  id="addedOptionBlockB1" className="optionBlockTextContainer whiteBlock">
                                <div id="addedOptionB1Text" className="blockTextAdded optionBlock">Added</div>
                            </div>
                        </div>
                    </div>
                    <div id="seesawOptionsB" className="seesawOptionsB">
                        {
                            items.map((object, i) => 
                            i % 3 == 0 ? <SeesawOption value={object}/> : <Seesaw2Option items={items} index={i}/>             
                            )
                        }
                    </div>
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
        
        //timings
        const addedATime = 0.5
        const addedADelay = 0.2
        const offsetTime = 0.6
        const offsetDelay = addedATime + addedADelay
        const addedBTime = 0.5
        const addedBDelay = offsetDelay + offsetTime + 1.0
        const resetDelay = addedBTime + addedBDelay
        const resetTime = 1.0

        //put correct text in correct box 
        var aTextID: string
        var bTextID: string

        if(count === 0) {
            aTextID = "addedOptionA1Text"
            bTextID = "addedOptionB1Text"
        }
        else if(count === 1) {
  
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


        
        const firstValueA = document.getElementById("addedOptionA1")
        const secondValueA = document.getElementById("addedOptionA2") 
        const thirdValueA = document.getElementById("addedOptionA3") 

        const firstValueB = document.getElementById("addedOptionB1")
        const secondValueB = document.getElementById("addedOptionB2") 
        const thirdValueB = document.getElementById("addedOptionB3") 

        const firstBlockA = document.getElementById("addedOptionBlockA1")
        const secondBlockA = document.getElementById("addedOptionBlockA2") 

        const firstBlockB = document.getElementById("addedOptionBlockB1")
        const secondBlockB = document.getElementById("addedOptionBlockB2") 

        if(count < 2) {

            //fade in and move see saw
            const fadeInA = count === 0 ? firstValueA : secondValueA
            const fadeInB = count === 0 ? firstValueB : secondValueB
            const recolorA = count === 0 ? firstBlockA : secondBlockA
            const recolorB = count === 0 ? firstBlockB : secondBlockB

            GSAP.TweenMax.to(fadeInA, addedATime, {opacity: 1, delay: addedADelay})

            const swingyPart = document.getElementById("seesawSwingyPart")
            GSAP.TweenMax.to(swingyPart, offsetTime, {rotation: -15, delay: offsetDelay})
            
            const sideA = document.getElementById("seesawSectionA")
            GSAP.TweenMax.to(sideA, offsetTime, {bottom: 70, delay: offsetDelay})

            const sideB = document.getElementById("seesawSectionB")
            GSAP.TweenMax.to(sideB, offsetTime, {bottom: 147, delay: offsetDelay})

            const optionsA = document.getElementById("seesawOptionsA")
    
            GSAP.TweenMax.to(fadeInB, addedBTime, {opacity: 1, delay:addedBDelay})

            GSAP.TweenMax.to(swingyPart, resetTime, {rotation: 0, delay: resetDelay, onComplete: callback})
            GSAP.TweenMax.to(sideA, resetTime, {bottom: 100, delay: resetDelay})
            GSAP.TweenMax.to(sideB, resetTime, {bottom: 100, delay: resetDelay})


            GSAP.TweenMax.to(recolorA, resetTime, {backgroundColor: "rgba(255, 255, 255, 0.6)", delay: resetDelay})
            GSAP.TweenMax.to(recolorB, resetTime, {backgroundColor: "rgba(255, 255, 255, 0.6)", delay: resetDelay})

        }
        else {
            //just fade in last 2
            GSAP.TweenMax.to(thirdValueA, addedATime, {opacity: 1, delay: addedADelay})
            GSAP.TweenMax.to(thirdValueB, addedATime, {opacity: 1, delay: addedADelay})
            GSAP.TweenMax.to(thirdValueA, 1, {opacity: 1, delay: addedADelay + addedATime, onComplete: callback})
        }
    }
}

interface Seesaw1OptionProps {
    value: string;
  }
  
  class SeesawOption extends React.Component<Seesaw1OptionProps>  {
    render () {
      return (
        <div className="optionBlockTextContainer white60Block">
            <div className="blockText optionBlock">{this.props.value}</div>
        </div>
      )
    }
  }

  interface Seesaw2OptionsProps {
    items: Array<string>
    index: number

  }
  
  class Seesaw2Option extends React.Component<Seesaw2OptionsProps>  {
    render () {
        var shouldRender = this.props.index % 3 < 2
        var hasNext = (this.props.index + 1) < this.props.items.length
        if(shouldRender && hasNext) {
            return (
                <div className="option2Blocks">
                <div className="optionBlockTextContainer">
                    <div className="blockText optionBlock">{this.props.items[this.props.index]}</div>
                </div>
                <div className="optionBlockTextContainer white80Block">
                    <div className="blockText optionBlock">{this.props.items[this.props.index + 1]}</div>
                </div>
                </div>
              )
        }
        return(<div></div>)
    }
  }

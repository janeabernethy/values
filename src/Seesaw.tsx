import React  from 'react';
import './Seesaw.css';
import seesawBase from './Images/Seesaw/SeesawBase.png'; 
import swingyPart from './Images/Seesaw/SwingyPart.png'; 
import sideA from './Images/Seesaw/SideA.png'; 
import sideB from './Images/Seesaw/SideB.png'; 
import blockFull from './Images/Seesaw/BlockFull.png'; 
import blockShaded from './Images/Seesaw/BlockShaded.png'; 
import blockAdded from './Images/Seesaw/BlockAdded.png'; 
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
        this.addOption("loyalty")
    }

    render() {
        return (
        <div className="seesawContent">
            <div className="seesawWrapper">
                <div className="seeesawSectionA">
                <div id="addedOptionA3" className="addedOptionA3">
                    <div className="options1Set">
                        <div className="optionBlock blockC">
                            <span className="blockText">Added</span>
                            <img id="addedImage1" src={blockAdded} />
                        </div>
                    </div>
                </div>
                <div id="addedOptionA2" className="addedOptionA2">
                    <div className="options1Set">
                        <div className="optionBlock blockC">
                            <span className="blockText">Added</span>
                            <img id="addedImage1" src={blockAdded} />
                        </div>
                    </div>
                </div>
                <div id="addedOptionA1" className="addedOptionA1">
                    <div className="options1Set">
                        <div className="optionBlock blockC">
                            <span id="addedOptionA1Text" className="blockText">Added</span>
                            <img id="addedImage1" src={blockAdded} />
                        </div>
                    </div>
                </div>
                <div className="seesawOptionsA" id="seesawOptionsA">
                    {
                        this.props.items.map((object, i) => 
                          i %3 == 0 ? <Seesaw1Option value={object}/> : <Seesaw2Option items={this.props.items} index={i} />            
                        )
                    }
                </div>
                </div>
                <div id="addedOptionB3" className="addedOptionB3">
                    <div className="options1Set">
                        <div className="optionBlock blockC">
                            <span className="blockText">Added</span>
                            <img src={blockAdded} />
                        </div>
                    </div>
                </div>
                <div id="addedOptionB2" className="addedOptionB2">
                    <div className="options1Set">
                        <div className="optionBlock blockC">
                            <span className="blockText">Added</span>
                            <img src={blockAdded} />
                        </div>
                    </div>
                </div>
                <div id="addedOptionB1" className="addedOptionB1">
                    <div className="options1Set">
                        <div className="optionBlock blockC">
                            <span id="addedOptionB1Text" className="blockText">Added</span>
                            <img src={blockAdded} />
                        </div>
                    </div>
                </div>
                <div id="seesawOptionsB" className="seesawOptionsB">
                    {
                        this.props.items.map((object, i) => 
                          i %3 == 0 ? <Seesaw1Option value={object}/> : <Seesaw2Option items={this.props.items} index={i} />            
                        )
                    }
                </div>
                <div className="seesawBottomSection">
                    <div id="seesawSideA" className="seesawSideA"><img className="seesawSideAImg" src={sideA} /></div>
                    <div id="seesawSideB" className="seesawSideB"><img className="seesawSideBImg" src={sideB} /></div>
                    <div id="seesawSwingyPart" className="seesawSwingyPart"><img className="seesawSwingyImg" src={swingyPart} /></div>
                    <div className="seesawBase"><img className="seesawBaseImg" src={seesawBase} /></div>
                </div>
            </div>
        </div>
        )
    }

    addOption(newValue: string) {
        
        const addedATime = 0.5
        const addedADelay = 0.2
        const offset = 22
        const offsetTime = 0.6
        const offsetDelay = addedATime + addedADelay
        const addedBTime = 0.5
        const addedBDelay = offsetDelay + offsetTime + 1.0
        const resetDelay = addedBTime + addedBDelay
        const resetTime = 1.0

        var aID = "addedOptionA1"
        var bID = "addedOptionB1"

        var a1Text = "addedOptionA1Text"
        var b1Text = "addedOptionB1Text"

        const aText = document.getElementById(a1Text)
        aText.innerText = newValue

        const bText = document.getElementById(b1Text)
        bText.innerText = newValue
        // if(count === 1) {
        //     aID = "addedOptionA2"
        //     bID = "addedOptionB2"
        // }
        // else if(count === 2) {
        //     aID = "addedOptionA3"
        //     bID = "addedOptionB3"
        // }
        const addedA = document.getElementById(aID)
        GSAP.TweenMax.to(addedA, addedATime, {opacity: 1, delay: addedADelay})

        const swingyPart = document.getElementById("seesawSwingyPart")
        GSAP.TweenMax.to(swingyPart, offsetTime, {rotation: -15, delay: offsetDelay})

        const sideA = document.getElementById("seesawSideA")
        GSAP.TweenMax.to(sideA, offsetTime, {bottom: -offset, delay: offsetDelay})

        const sideB = document.getElementById("seesawSideB")
        GSAP.TweenMax.to(sideB, offsetTime, {bottom: offset, delay: offsetDelay})

        const optionsA = document.getElementById("seesawOptionsA")
        GSAP.TweenMax.to(optionsA, offsetTime, {bottom: 82-offset, delay: offsetDelay})

        GSAP.TweenMax.to(addedA, offsetTime, {bottom: 403-offset, delay: offsetDelay})

        const optionsB = document.getElementById("seesawOptionsB")
        GSAP.TweenMax.to(optionsB, offsetTime, {bottom: 82+offset, delay: offsetDelay})

        const addedB = document.getElementById(bID) 
         GSAP.TweenMax.to(addedB, addedBTime, {opacity: 1, delay:addedBDelay})


        GSAP.TweenMax.to(swingyPart, resetTime, {rotation: 0, delay: resetDelay})
        GSAP.TweenMax.to(sideA, resetTime, {bottom: 0, delay: resetDelay})
        GSAP.TweenMax.to(sideB, resetTime, {bottom: 0, delay: resetDelay})
        GSAP.TweenMax.to(optionsA, resetTime, {bottom: 82, delay: resetDelay})
        GSAP.TweenMax.to(addedA, resetTime, {bottom: 403, delay: resetDelay})
        GSAP.TweenMax.to(optionsB, resetTime, {bottom: 82, delay: resetDelay})
        GSAP.TweenMax.to(addedB, resetTime, {bottom: 403, delay:resetDelay})
        // this.addOption()
    }
}

interface Seesaw1OptionProps {
    value: string;
  }
  
  class Seesaw1Option extends React.Component<Seesaw1OptionProps>  {
    render () {
      return (
        <div className="options1Set">
            <div className="optionBlock blockC">
                <span className="blockText">{this.props.value}</span>
                <img src={blockShaded} />
            </div>
        </div>
      )
    }
  }

  interface Seesaw2OptionProps {
    items: Array<string>
    index: number
  }
  
  class Seesaw2Option extends React.Component<Seesaw2OptionProps>  {
    render () {
        var shouldRender = this.props.index % 3 < 2
        var hasNext = (this.props.index + 1) < this.props.items.length
        if (shouldRender == true && hasNext) {
            return (
                <div className="options2Set">
                    <div className="optionBlock blockA">
                        <span className="blockText">{this.props.items[this.props.index]}</span>
                        <img src={blockFull} />
                    </div>
                    <div className="optionBlock blockB">
                        <span className="blockText">{this.props.items[this.props.index+1]}</span>
                        <img src={blockShaded} />
                    </div>
                </div>
            )
        }
        else if(shouldRender == true) {
            return (
            <div className="options1Set">
                <div className="optionBlock blockC">
                    <span className="blockText">{this.props.items[this.props.index]}</span>
                    <img src={blockShaded} />
                </div>
            </div>
            )
        }
        else {
            return <div></div>
        }
        
        }
  }
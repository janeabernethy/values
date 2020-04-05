import React  from 'react';
import './Seesaw.css';
import seesawBase from './Images/Seesaw/SeesawBase.png'; 
import swingyPart from './Images/Seesaw/SwingyPart.png'; 
import sideA from './Images/Seesaw/SideA.png'; 
import sideB from './Images/Seesaw/SideB.png'; 
import blockShadedA from './Images/Seesaw/BlockShadedHalfA.png'; 
import blockShadedB from './Images/Seesaw/BlockShadedHalfB.png'; 
import blockFullA from './Images/Seesaw/BlockFullHalfA.png'; 
import blockFullB from './Images/Seesaw/BlockFullHalfB.png'; 
import blockFull from './Images/Seesaw/BlockFull.png'; 
import blockShaded from './Images/Seesaw/BlockShaded.png'; 

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
 



        return (
        <div className="seesawContent">
            <div className="seesawWrapper">
                <div className="seesawOptionsA">
                    {
                        this.props.items.map((object, i) => 
                          i %3 == 0 ? <Seesaw1Option value={object}/> : <Seesaw2Option items={this.props.items} index={i} />            
                        )
                    }
                </div>
                <div className="seesawBottomSection">
                    <div className="seesawSideA"><img className="seesawSideAImg" src={sideA} /></div>
                    <div className="seesawSideB"><img className="seesawSideBImg" src={sideB} /></div>
                    <div className="seesawSwingyPart"><img className="seesawSwingyImg" src={swingyPart} /></div>
                    <div className="seesawBase"><img className="seesawBaseImg" src={seesawBase} /></div>
                </div>
            </div>
        </div>
        )
    }
}

interface Seesaw1OptionProps {
    value: string;
  }
  
  class Seesaw1Option extends React.Component<Seesaw1OptionProps>  {
    render () {
      return (
        <div className="options1Set">
            <div className="optionBlock blockC"><img src={blockShaded} /></div>
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
        console.log("IN 2")
        console.log(this.props.index % 3.0)
    var shouldRender = this.props.index % 3 < 2
    var hasNext = (this.props.index + 1) < this.props.items.length
    if (shouldRender == true && hasNext) {
        return (
            <div className="options2Set">
                <div className="optionBlock blockA"><img src={blockFull} /></div>
                <div className="optionBlock blockB"><img src={blockShaded} /></div>
            </div>
          )
    }
    else if(shouldRender == true) {
        return (
        <div className="options1Set">
            <div className="optionBlock blockC"><img src={blockShaded} /></div>
        </div>
        )
    }
    else {
        return <div></div>
    }
      
    }
  }
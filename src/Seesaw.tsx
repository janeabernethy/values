import React  from 'react';
import './Seesaw.css';
import seesawBase from './Images/Seesaw/SeesawBase.png'; 
import swingyPart from './Images/Seesaw/SwingyPart.png'; 
import sideA from './Images/Seesaw/SideA.png'; 
import sideB from './Images/Seesaw/SideB.png'; 

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
import React  from 'react';
import './Frames.css';
import frame from './Images/Motivational/Frame.png'; 
import * as GSAP from 'gsap';


export type FrameProps = { 
    items: Array<string>
 } ;
type FrameState = { 
    items: Array<string>,
}

export class Frame extends React.Component<FrameProps, FrameState> {
    constructor(props: FrameProps, state: FrameState) {
        super(props);
    }

    render() {
        return ( 
            <div className="frameContent">
                <img id="frame1" className="frameImage" src={frame} />
                <img id="frame2" className="frameImage" src={frame} />
                <img id="frame3" className="frameImage" src={frame} />
            </div>
        )
    }
}
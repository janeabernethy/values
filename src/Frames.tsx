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

    componentWillMount() {
        const motivation1 = document.getElementById("motivation1");
        motivation1.addEventListener('mouseenter', e => {
          console.log(e)
          });
    }
  
    addOption(newValue: string, count: number, callback: () => void) {
       
        var motivation: HTMLElement
        var callbackDelay: number

        if(count === 0) {
            motivation = document.getElementById("motivation1")
            callbackDelay = 0.3
        }
        else if(count === 1) {
            motivation = document.getElementById("motivation2")
            callbackDelay = 0.3
        }
        else {
            motivation = document.getElementById("motivation3")
            callbackDelay = 0.6
        }
        motivation.innerText = newValue
        GSAP.TweenMax.to(motivation, 0.3, {opacity: 1})

        GSAP.TweenMax.to(motivation, 0.3, {opacity: 1, delay: callbackDelay, onComplete: callback})
    
    }
    render() {
        return ( 
            <div className="frameContent">
                <div className="motivationFrame" id="motivationFrame1">
                    <img id="frame1" className="frameImage" src={frame} />
                    <div className="motivationTextContainer">
                        <div id="motivation1" className="motivationText"></div>
                    </div>
                </div>
                <div className="motivationFrame" id="motivationFrame2">
                    <img id="frame2" className="frameImage" src={frame} />
                    <div className="motivationTextContainer">
                        <div id="motivation2" className="motivationText"></div>
                    </div>
                </div>
                <div className="motivationFrame" id="motivationFrame3">
                    <img id="frame3" className="frameImage" src={frame} />
                    <div className="motivationTextContainer">
                        <div id="motivation3" className="motivationText"></div>
                    </div>
                </div>
            </div>
        )
    }
}
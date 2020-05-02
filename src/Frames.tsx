import React, {MouseEvent}  from 'react';
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
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
    }



    mouseEnter(event: MouseEvent<HTMLElement>) {
        const xPos = event.clientX
        const thing = event.target as HTMLElement;
        const frame = thing.parentNode as HTMLElement;
        const frameMinX = frame.getBoundingClientRect().x
        const frameWidth = frame.getBoundingClientRect().width
        const frameMaxX = frame.getBoundingClientRect().x + frameWidth
        const frameMidX = ((frameMaxX - frameMinX) / 2) + frameMinX

        if(xPos > frameMidX) {
            //right
            console.log("in from the right")
            
            GSAP.TweenMax.to(frame, 0.2, {rotation: 15, transformOrigin:"50% 0", delay: 0})
        
        }
        else {
            console.log("in from the left")
            GSAP.TweenMax.to(frame, 0.2, {rotation: -15, delay: 0})
        }
    }

    mouseLeave(event: MouseEvent<HTMLElement>) {
        const thing = event.target as HTMLElement;
        const frame = thing.parentNode as HTMLElement;
        GSAP.TweenMax.to(frame, 0.2, {rotation: 0, delay: 0.1})
        
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
                <div className="motivationFrame" id="motivationFrame1" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                    <img id="frame1" className="frameImage" src={frame} />
                    <div className="motivationTextContainer">
                        <div id="motivation1" className="motivationText"></div>
                    </div>
                </div>
                <div className="motivationFrame" id="motivationFrame2" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                    <img id="frame2" className="frameImage" src={frame} />
                    <div className="motivationTextContainer">
                        <div id="motivation2" className="motivationText"></div>
                    </div>
                </div>
                <div className="motivationFrame" id="motivationFrame3" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                    <img id="frame3" className="frameImage" src={frame} />
                    <div className="motivationTextContainer">
                        <div id="motivation3" className="motivationText"></div>
                    </div>
                </div>
            </div>
        )
    }
}
import React  from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { getValues } from './values';
import './Comparison.css';
import divide from './Images/Line.png'; 
import restart from './Images/Restart.png'

type ComparisonProps = { key: string } ;
type ComparisonState = { 
    optionA: string, 
    optionB: string,
    innerValue: string,
    innerStrings: Array<string>,
    innerPosition: number,
    innerCompletion: (arr: Array<string>) => void,

}
export class Comparison extends React.Component<RouteComponentProps<ComparisonProps>, ComparisonState> {
    constructor(props: RouteComponentProps<ComparisonProps>, state: ComparisonState) {
        super(props);

        var callback = (arr: Array<string>) : void => {
            const key = this.props.match.params.key
            const currentOption = getValues().filter(value => value.key === key)[0];
            currentOption.options = this.state.innerStrings
            this.props.history.push({pathname: `/results${this.props.match.params.key}`})
        }

        this.state = {
            optionA: "", 
            optionB: "",
            innerValue: "",
            innerStrings: [] as string[],
            innerPosition: 1,
            innerCompletion: callback,
        }

        this.selectOption1 = this.selectOption1.bind(this);
        this.selectOption2 = this.selectOption2.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentDidMount() {
        const key = this.props.match.params.key
        const currentOption = getValues().filter(value => value.key === key)[0];
        this.outerLoop(1, currentOption.options, this.state.innerCompletion)
    }

    reset() {
        this.setState({optionA:"", optionB:"", innerValue:"", innerStrings: [] as string[], innerPosition: 1})
        const key = this.props.match.params.key
        const currentOption = getValues().filter(value => value.key === key)[0];
        this.outerLoop(1, currentOption.options, this.state.innerCompletion)
    }

    render() {
        return(
            <div>
                <div className="comparisonTitle">Choose which value is more important for you</div>
                <div className="comparisonGrid">
                    <button className="inputOptionButton" onClick={this.selectOption1}>{this.state.optionA}</button>
                    <img className="divide" src={divide} alt=""/>
                    <button className="inputOptionButton" onClick={this.selectOption2}>{this.state.optionB}</button>
                </div>
                <button className="restartButton" onClick={this.reset}>
                    <div className="restartButtonDiv">
                    <img className="restartImg" src={restart} alt=""/>
                    <div className="restartText">Start again</div>
                    </div>
                </button>
            </div>
        )
    }


    outerLoop(index: number, vals: Array<string>, completion: (arr: Array<string>) => void) {
        const values = vals
        if(index >= values.length){
            completion(values)
        }
        else {
            var cb = (arr: Array<string>) : void => {
                this.outerLoop(index+1, arr, completion)
            }

            this.inner(index, vals,  cb)     
        }
    }

    inner(index: number, vals: Array<string>, completion: (arr: Array<string>) => void) {
        const position = index
        const value = vals[position]
        this.innerLoop(position, vals, value, completion)
    }

    innerLoop(pos: number, vals: Array<string>, value: string, completion: (arr: Array<string>) => void) {
        
        this.setState({innerStrings: vals})
        this.setState({innerPosition: pos})
        this.setState({innerCompletion: completion})
        this.setState({innerValue: value})

        if(pos == 0) {
            vals[pos] = value
            this.setState({innerStrings: vals})
            this.state.innerCompletion(vals)
        }
        else {
            const newOptionA = vals[pos-1]
            this.setState({optionB: value})
            this.setState({optionA: newOptionA})
        }
    }

    selectOption1() {

        var arr = this.state.innerStrings
        arr[this.state.innerPosition] = this.state.innerValue
        this.setState({innerStrings: arr})

        this.state.innerCompletion(arr)
    }

    selectOption2() {
        let innerPos = this.state.innerPosition
        let leftInnerPos = innerPos - 1
        var arr = this.state.innerStrings
        arr[innerPos] = arr[leftInnerPos]
        this.setState({innerStrings: arr})
        this.setState({innerPosition: leftInnerPos})
        this.innerLoop(leftInnerPos, arr, this.state.innerValue, this.state.innerCompletion)
    }
}
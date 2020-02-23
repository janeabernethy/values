import React  from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { getValues } from './values';
import { startComparison } from './sortOptions';

type ComparisonProps = { key: string } ;
export class Comparison extends React.Component<RouteComponentProps<ComparisonProps>> {
    constructor(props: RouteComponentProps<ComparisonProps>) {
        super(props);
        const key = this.props.match.params.key
        console.log("key " + this.props.match.params.key)
        const currentOption = getValues().filter(value => value.key === key)[0];
        console.log(currentOption.options)

        startComparison()
    
    }

    render() {

        return(
            <div>hi</div>
        )
    }



    
}
import React, {Component} from "react";
import {WorkHistoryItem} from "./WorkHistoryItem";
import {Button} from "shards-react";

export class WorkHistoryList extends Component {


    render() {
        const {values, handleChange, addHistory} = this.props;
        const edItems = values.myItems.map(item => (
            <div key={item.num.toString()}  className="col-xs-12">
                <WorkHistoryItem values={values} num={item.num} handleChange={handleChange} />
            </div>
        ));
        return (
            <div>
                {edItems}
                <Button size="lg" type="button" className="" onClick={addHistory}>New Employer Entry</Button>
            </div>
        )
    }

}
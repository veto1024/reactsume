import React, {Component} from "react";
import {Button} from "shards-react";
import {EducationListItem} from "./EducationListItem";

export class EducationHistoryList extends Component {


    render() {
        const {values, handleChange, addInstitute} = this.props;
        const workItems = values.myEducation.map(item => (
            <div key={item.num.toString()}  className="col-xs-12">
                <EducationListItem values={values} num={item.num} handleChange={handleChange} />
            </div>
        ));
        return (
            <div>
                {workItems}
                <Button size="lg" type="button" className="" onClick={addInstitute}>New Institute Entry</Button>
            </div>
        )
    }

}
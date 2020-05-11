import React, {Component} from "react";
import {SkillList} from "./SkillList";
import {Button} from "shards-react";


export class Complete extends Component {

    render() {
        const {values, success} = this.props;
        return (
            <div className="col-xs-12">
                <h2>Generate your PDF here!</h2>
                <Button onClick={success}>Generate PDF</Button>
            </div>
        )
    }
}
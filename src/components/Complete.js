import React, {Component} from "react";
import {SkillList} from "./SkillList";
import {Button} from "shards-react";


export class Complete extends Component {

    render() {
        const {success} = this.props;
        return (
            <div className="col-xs-12">
                <h2>Generate your PDF here!</h2>
                <Button size="lg" onClick={success}>Generate PDF</Button>
            </div>
        )
    }
}
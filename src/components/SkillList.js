import React, {Component} from "react";
import {Button} from "shards-react";
import {EducationListItem} from "./EducationListItem";
import {SkillItem} from "./SkillItem";

export class SkillList extends Component {


    render() {
        const {values, handleChange, addSkill} = this.props;
        const workItems = values.mySkills.map(item => (
            <div key={item.num.toString()}  className="col-xs-12 ">
                <SkillItem values={values} num={item.num} handleChange={handleChange} />
            </div>
        ));
        return (
            <div>
                {workItems}
                <Button size="lg" type="button" className="" onClick={addSkill}>New Skill Entry</Button>
            </div>
        )
    }

}
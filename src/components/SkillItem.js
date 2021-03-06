import React, {Component} from "react";
import {FormGroup, FormInput} from "shards-react";

export class SkillItem extends Component {
    render() {
        const {num, handleChange, values} = this.props;
        var skill = "skill";
        return(
            <div className="question-container col-xs-12">
                <div className='col-xs-12 col-xl-8 col-xl-offset-2 inner-addon left-addon'>
                <FormGroup inline>
                    <FormInput placeholder="Skill" value={values.mySkills[num].skill} size="lg" data-key={num} type="text" name={skill} className="form-control" onChange={handleChange} />
                    <i className="glyphicon glyphicon-chevron-up"></i>
                </FormGroup>
                </div>
            </div>
        )
    }
}
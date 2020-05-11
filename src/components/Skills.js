import React, {Component} from "react";
import {SkillList} from "./SkillList";


export class Skills extends Component {

    render() {
        const {values, nextStep, prevStep, handleChange, addSkill} = this.props;
        return (
            <div className="col-xs-12">
                <form onSubmit={this.props.nextStep}>
                    <div className="col-xs-12">
                        <p className="section-header">Jot down your skills!</p>
                    </div>
                    <SkillList values={values} handleChange={handleChange} addSkill={addSkill}/>
                    <div className="action-container col-xs-12">
                        <button type="button" className="btn btn-success" onClick={prevStep}>Previous</button>
                        <button type="submit" className="btn btn-success" onSubmit={nextStep}>Next</button>
                    </div>
                </form>
            </div>
        )
    }
}
import React, {Component} from "react";
import {SkillList} from "./SkillList";
import {Button} from "shards-react";


export class Skills extends Component {

    render() {
        const {values, nextStep, prevStep, handleChange, addSkill} = this.props;
        return (
            <div className="col-xs-12">
                <form onSubmit={this.props.nextStep}>
                    <div className="col-xs-12">
                        <p className="section-header">Jot down your skills! A pro at Adobe Premiere? Excel at Microsoft Excel? Let employers know!</p>
                    </div>
                    <SkillList values={values} handleChange={handleChange} addSkill={addSkill}/>
                    <div className="action-container col-xs-12">
                        <Button size="lg" theme={"warning"} type="button" onClick={prevStep}>Previous</Button>
                        <Button size="lg" theme={"success"}  type="submit"  onSubmit={nextStep}>Next</Button>
                    </div>
                </form>
            </div>
        )
    }
}
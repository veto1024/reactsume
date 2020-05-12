import React, {Component} from "react";
import {SkillList} from "./SkillList";
import {AwardList} from "./AwardList";
import {Button} from "shards-react";


export class Awards extends Component {

    render() {
        const {values, nextStep, prevStep, handleChange, addAward} = this.props;
        return (
            <div className="col-xs-12">
                <form onSubmit={this.props.nextStep}>
                    <div className="col-xs-12">
                        <p className="section-header">Tell employers about important awards that you've received and special achievements that you're proud of!</p>
                    </div>
                    <AwardList values={values} handleChange={handleChange} addAward={addAward}/>
                    <div className="action-container col-xs-12">
                        <Button size="lg" theme={"warning"}  type="button"  onClick={prevStep}>Previous</Button>
                        <Button size="lg" theme={"success"}  type="submit"  onSubmit={nextStep}>Next</Button>
                    </div>
                </form>
            </div>
        )
    }
}
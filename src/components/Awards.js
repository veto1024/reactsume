import React, {Component} from "react";
import {SkillList} from "./SkillList";
import {AwardList} from "./AwardList";


export class Awards extends Component {

    render() {
        const {values, nextStep, prevStep, handleChange, addAward} = this.props;
        return (
            <div className="col-xs-12">
                <form onSubmit={this.props.nextStep}>
                    <div className="col-xs-12">
                        <p className="section-header">Tell employers about important awards that you've received!</p>
                    </div>
                    <AwardList values={values} handleChange={handleChange} addAward={addAward}/>
                    <div className="action-container col-xs-12">
                        <button type="button" className="btn btn-success" onClick={prevStep}>Previous</button>
                        <button type="submit" className="btn btn-success" onSubmit={nextStep}>Next</button>
                    </div>
                </form>
            </div>
        )
    }
}
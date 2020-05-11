import React, {Component} from "react";
import {EducationHistoryList} from "./EducationHistoryList";
import {Button} from "shards-react";

export class EducationalHistory extends Component {

    render() {
        const {values, nextStep, prevStep, handleChange, addInstitute} = this.props;
        return (
            <div className="col-xs-12">
                <form onSubmit={this.props.nextStep}>
                    <div className="col-xs-12">
                        <p className="section-header">Let's talk educational history!</p>
                    </div>
                    <EducationHistoryList values={values} handleChange={handleChange} addInstitute={addInstitute}/>
                    <div className="action-container col-xs-12">
                        <Button size="lg" type="button" className="btn btn-success" onClick={prevStep}>Previous</Button>
                        <Button size="lg" type="submit" className="btn btn-success" onSubmit={nextStep}>Next</Button>
                    </div>
                </form>
            </div>
        )
    }
}
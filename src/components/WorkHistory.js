import React, {Component} from "react";
import {WorkHistoryList} from "./WorkHistoryList";
import {Button} from "shards-react";

export class WorkHistory extends Component {

    render() {
        const {values, nextStep, prevStep, handleChange, addHistory} = this.props;
        return (
            <div className="col-xs-12">
                <form className="col-xs-12" onSubmit={this.props.nextStep}>
                    <div className="col-xs-12">
                        <div className="col-xs-12">
                            <p className="section-header">Let's talk work history! Provide the employer name, position, date of employment,
                                and, optionally, the location of the employer. Feel free to use a Month Year format (e.g., June 2020)
                                or simply provide the year (e.g., 2020).</p><p className="md-hide"> Additionally, include up to 4 bullet points describing your work.</p>
                        <WorkHistoryList values={values} handleChange={handleChange} addHistory={addHistory}/>
                        </div>
                    </div>
                    <div className="action-container col-xs-12">
                        <Button size="lg" type="button" theme={"warning"}  onClick={prevStep}>Previous</Button>
                        <Button size="lg" type="submit" theme={"success"} onSubmit={nextStep}>Next</Button>
                    </div>
                </form>
            </div>
        )
    }
}
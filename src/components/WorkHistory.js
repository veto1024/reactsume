import React, {Component} from "react";
import {WorkHistoryList} from "./WorkHistoryList";

export class WorkHistory extends Component {

    render() {
        const {values, nextStep, prevStep, handleChange, addHistory} = this.props;
        return (
            <div className="col-xs-12">
                <form className="col-xs-12" onSubmit={this.props.nextStep}>
                    <div className="col-xs-12">
                        <div className="col-xs-12">
                            <p className="section-header">Let's talk work history!</p>
                        <WorkHistoryList values={values} handleChange={handleChange} addHistory={addHistory}/>
                        </div>
                    </div>
                    <div className="action-container col-xs-12">
                        <button type="button" className="btn btn-success" onClick={prevStep}>Previous</button>
                        <button type="submit" className="btn btn-success" onSubmit={nextStep}>Next</button>
                    </div>
                </form>
            </div>
        )
    }
}
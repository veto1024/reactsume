import React, {Component} from "react";
import {SkillList} from "./SkillList";
import {Button, NavLink} from "shards-react";


export class Complete extends Component {

    render() {
        const {success} = this.props;
        return (
            <div>
            <div className="col-xs-12">
                <h2>Generate your PDF here!</h2>
                <Button size="lg" onClick={success}>Generate PDF</Button>
            </div>
            <div id="resume-service" className="col-xs-12 col-md-8">
                <p>Like your resume but want to kick it up a notch? Check out On My Desk Editing's Resume Editing service!</p>
                <ul>
                    <li>Polished by professional editors!</li>
                    <li>48-hour turnaround available</li>
                    <li>Cover letter editing available</li>
                    <li>Starting at $49.99!</li>
                </ul>
            </div>
            <div id="linkedin-ad-well" className="col-xs-12 col-xl-4 well">
                <h2>Check out our LinkedIn Profile Editing Service</h2>
                <p>How long has it been since you updated your LinkedIn profile? Did you know that research has shown that LinkedIn
                    is 40% more effective than online job boards? OMD Editing offers affordable LinkedIn Profile
                Editing services.</p>
                <span> <NavLink className="btn btn-info" href="/career-services#linkedin-editing" >Learn More</NavLink></span>
            </div>
        </div>
    )
    }
}
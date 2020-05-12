import React, {Component} from "react";
import {FormGroup, FormInput} from "shards-react";

export class AwardItem extends Component {
    render() {
        const {num, handleChange, values} = this.props;
        var award = "award";
        return(
            <div className="question-container col-xs-12">
                <div className='col-xs-12 inner-addon left-addon'>
                <FormGroup inline>
                    <FormInput placeholder="Award/Achievement" size="lg" data-key={num} type="text" name={award} className="form-control" onChange={handleChange} />
                    <i className="glyphicon glyphicon-star"></i>
                </FormGroup>
                </div>
            </div>
        )
    }
}
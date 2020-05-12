import React, {Component} from "react";
import {FormInput} from "shards-react";

export class EducationListItem extends Component {
    render() {
        const {num, handleChange, values} = this.props;
        var institute = "institution";
        var gradDate = "gradDate";
        var gpa = "gpa";
        var degree = "degree";
        return(
            <div className="question-container col-xs-12">
                <div className='col-xs-12 col-xl-offset-2 col-xl-8 inner-addon left-addon'>
                    <FormInput size="lg" placeholder="Educational institution" value={values.myEducation[num].institution} data-key={num} type="text" name={institute} className="form-control" onChange={handleChange} />
                    <i className="glyphicon glyphicon-education"></i>
                </div>
                <div className='col-xs-12 col-xl-offset-2 col-xl-8 inner-addon left-addon'>
                    <FormInput size="lg" placeholder="Graduation date (or expected)" value={values.myEducation[num].gradDate} data-key={num} type="text" name={gradDate} className="form-control" onChange={handleChange}/>
                    <i className="glyphicon glyphicon-calendar"></i>
                </div>
                <div className='col-xs-12 col-xl-offset-2 col-xl-8 inner-addon left-addon'>
                    <FormInput size="lg" placeholder="GPA (optional)" value={values.myEducation[num].gpa} data-key={num} type="text" name={gpa} className="form-control" onChange={handleChange}/>
                    <i className="glyphicon glyphicon-bookmark"></i>
                </div>
                <div className='col-xs-12 col-xl-offset-2 col-xl-8 inner-addon left-addon'>
                    <FormInput type="tel" placeholder="Degree achieved" value={values.myEducation[num].degree} data-key={num} size="lg"  name={degree} className="form-control" onChange={handleChange}/>
                    <i className="glyphicon glyphicon-thumbs-up"></i>
                </div>
            </div>
        )
    }
}
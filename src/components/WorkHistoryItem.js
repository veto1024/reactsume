import React, {Component} from "react";
import {FormInput} from "shards-react";

export class WorkHistoryItem extends Component {
    render() {
        const {num, handleChange, values} = this.props;
        var company = "companyName";
        var location = "companyLocation";
        var position = "companyPosition";
        var bullets = "bulletPoints";
        var dates = "dates";
        return(
            <div className="question-container col-xs-12">
                <div className='col-xs-12 col-xl-8 col-xl-offset-2 inner-addon left-addon'>
                    <FormInput size="lg" placeholder="Organization Name" value={values.myItems[num].companyName} data-key={num} type="text" name={company} className="form-control" onChange={handleChange} />
                    <i className="glyphicon glyphicon-user"></i>
                </div>
                <div className='col-xs-12 col-xl-8 col-xl-offset-2  inner-addon left-addon'>
                    <FormInput placeholder="Location" size="lg" value={values.myItems[num].companyLocation} data-key={num} type="text" name={location} className="form-control" onChange={handleChange}/>
                    <i className="glyphicon glyphicon-map-marker"></i>
                </div>
                <div className='col-xs-12 col-xl-8 col-xl-offset-2  inner-addon left-addon'>
                    <FormInput size="lg" placeholder="Position" value={values.myItems[num].companyPosition} data-key={num} type="text" name={position} className="form-control" onChange={handleChange}/>
                    <i className="glyphicon glyphicon-briefcase"></i>
                </div>
                <div className='col-xs-12 col-xl-8 col-xl-offset-2  inner-addon left-addon'>
                    <FormInput type="tel" placeholder="Dates of employment" value={values.myItems[num].dates} data-key={num} size="lg"  name={dates} className="form-control" onChange={handleChange}/>
                    <i className="glyphicon glyphicon-calendar"></i>
                </div>
                <div className='col-xs-12 col-xl-8 col-xl-offset-2  inner-addon left-addon'>
                    <FormInput size="lg" value={values.myItems[num].bulletPoints1 ? values.myItems[num].bulletPoints1 : ''} placeholder="Provide 3-4 short sentences describing your position." data-key={num} type="text" name={bullets.concat("1")} className="form-control" onChange={handleChange}/>
                    <i className="glyphicon glyphicon-check"></i>
                </div>
                <div className='col-xs-12 col-xl-8 col-xl-offset-2  inner-addon left-addon'>
                    <FormInput size="lg"  value={values.myItems[num].bulletPoints2 ? values.myItems[num].bulletPoints2 : ''} placeholder="If possible, be quantitative about what you accomplished." data-key={num} type="text" name={bullets.concat("2")} className="form-control" onChange={handleChange}/>
                    <i className="glyphicon glyphicon-check"></i>
                </div>
                <div className='col-xs-12 col-xl-8 col-xl-offset-2  inner-addon left-addon'>
                    <FormInput size="lg"  value={values.myItems[num].bulletPoints3 ? values.myItems[num].bulletPoints3 : ''} placeholder="For example, trained 30 staff members monthly sounds a lot" data-key={num} type="text" name={bullets.concat("3")} className="form-control" onChange={handleChange}/>
                    <i className="glyphicon glyphicon-check"></i>
                </div>
                <div className='col-xs-12 col-xl-8 col-xl-offset-2 inner-addon left-addon'>
                    <FormInput size="lg"  value={values.myItems[num].bulletPoints4 ? values.myItems[num].bulletPoints4 : ''} placeholder='better than "trained staff members".' data-key={num} type="text" name={bullets.concat("4")} className="form-control" onChange={handleChange}/>
                    <i className="glyphicon glyphicon-check"></i>
                </div>
            </div>
        )
    }
}
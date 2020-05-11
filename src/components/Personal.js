import React, {Component} from "react";
import {Button, FormInput} from "shards-react";

export class Personal extends Component {

    continue = e => {
        this.props.nextStep();
    }

    render() {
        const {handleChange, values} = this.props;

        return(
            <div className="col-xs-12">
                <form onSubmit={this.continue}>
                <div className="col-xs-12">
                    <p className="section-header">Let's get some basic information first!</p>
                </div>
                <div className="question-container col-xs-12">

                    <div className='col-xs-12 col-md-offset-2 col-md-8 inner-addon left-addon'>
                        <FormInput  placeholder="Full Name" size="lg"  value={values.fullName} type="text" name="fullName"  onChange={handleChange}/>
                        <i className="glyphicon glyphicon-user"></i>
                    </div>
                    <div className='col-xs-12 col-md-offset-2 col-md-8 inner-addon left-addon'>
                        <FormInput size="lg" placeholder="Email Address" type="email" value={values.email} name="email" className="" onChange={handleChange}/>
                        <i className="glyphicon glyphicon-envelope"></i>
                    </div>
                    <div className='col-xs-12 col-md-offset-2 col-md-8 inner-addon left-addon'>
                        <FormInput type="tel" placeholder="Contact #" size="lg" value={values.phone} name="phone" className="form-control" onChange={handleChange}/>
                        <i className="glyphicon glyphicon-phone"></i>
                    </div>
                    <div className='col-xs-12 col-md-offset-2 col-md-8 inner-addon left-addon'>
                        <FormInput size="lg" placeholder="LinkedIn Profile" type="url" value={values.linkedin}  name="linkedin" className="form-control" onChange={handleChange}/>
                        <i className="glyphicon glyphicon-list-alt"></i>
                    </div>
                </div>
                <div className="action-container col-xs-12">
                    <Button size="lg" theme={"success"}  type="submit">Next</Button>
                </div>
                </form>
            </div>
        )
    }
}
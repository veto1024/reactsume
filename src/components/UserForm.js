import React, { Component } from 'react';
import {Personal} from "./Personal";
import {WorkHistory} from "./WorkHistory";
import "shards-ui/dist/css/shards.min.css";
import {Button} from "shards-react";
import {EducationalHistory} from "./EducationalHistory";
import {Skills} from "./Skills";
import {Awards} from "./Awards";
import axios from "axios";
import { saveAs } from 'file-saver';
import {Complete} from "./Complete";


export class UserForm extends Component {
    constructor() {
        super();
        this.state = {
            step: 1,
            fullName: '',
            email: '',
            phone: '',
            linkedin: '',

            myItems: [{
                num: 0,
                companyName: '',
                companyLocation: '',
                companyPosition: '',
                dates:'',
                bulletPoints1: '',
                bulletPoints2: '',
                bulletPoints3: '',
                bulletPoints4: ''
            }],
            myEducation: [{
                num: 0,
                institution: '',
                gradDate: '',
                gpa: '',
                degree: '',
            }],

            mySkills: [{
                num: 0,
                skill: '',
            }],

            myAwards: [{
                num: 0,
                award:'',
            }],
        }
    }

    addHistory = e => {
        const defaultItem = {
            num: this.state.myItems.length,
            companyEmail: '',
            companyPosition: '',
            bulletPoints1: '',
            bulletPoints2: '',
            bulletPoints3: '',
            bulletPoints4: '',
        }
        this.setState(state =>{
            const myItems = state.myItems.concat(defaultItem);
            return {
                myItems
            }
        });
        e.preventDefault();
    }

    addInstitute = e => {

        const defaultItem = {
            num: this.state.myEducation.length,
            institution: '',
            gradDate: '',
            gpa: '',
            degree: '',
        }
        this.setState(state => {
            const myEducation = state.myEducation.concat(defaultItem);
            return {
                myEducation
            }
        });
        e.preventDefault();
    }

    addAward = e => {
        const defaultItem = {
            num: this.state.myAwards.length,
            award: '',
        }
        this.setState(state => {
            const myAwards = state.myAwards.concat(defaultItem);
            return {
                myAwards
            }
        });
        e.preventDefault();
    }

    addSkill = e => {
        const defaultItem = {
            num: this.state.mySkills.length,
            skill: '',
        }
        this.setState(state => {
            const mySkills = state.mySkills.concat(defaultItem);
            return {
                mySkills
            }
        });
        e.preventDefault();
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    submitted = () => {
        const { status } = this.state;
        this.setState({
            status: status + 1
        });
    }

    createAndDownloadPdf = () => {
        axios.post('/create-pdf', this.state)
       .then(() => axios.get('/fetch-pdf', { responseType: 'blob' }))
       .then((res) => {
          const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

          saveAs(pdfBlob, 'Resume.pdf');
       })
}

    handleChange = ({ target: { value, name } }) => this.setState({ [name]: value })

    handleEmployerChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const key = +event.target.dataset.key;
        let newArray = [...this.state.myItems];
        newArray[key] = {...newArray[key], [name]: value}
        this.setState({
            myItems: newArray,
        });
    }
    handleEducationChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const key = +event.target.dataset.key;
        let newArray = [...this.state.myEducation];
        newArray[key] = {...newArray[key], [name]: value}
        this.setState({
            myEducation: newArray,
        });
    }
    handleSkillChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const key = +event.target.dataset.key;
        let newArray = [...this.state.mySkills];
        newArray[key] = {...newArray[key], [name]: value}
        this.setState({
            mySkills: newArray,
        });
    }

    handleAwardChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const key = +event.target.dataset.key;
        let newArray = [...this.state.myAwards];
        newArray[key] = {...newArray[key], [name]: value}
        this.setState({
            myAwards: newArray,
        });
    }


    render() {
        const { step } = this.state;
        switch (step) {
            case 1:
                var stepForm =  <Personal values={this.state}
                                           nextStep={this.nextStep}
                                           handleChange={this.handleChange} />;
                break;

            case 2:
                var stepForm = <WorkHistory values={this.state}
                                 prevStep={this.prevStep}
                                 nextStep={this.nextStep}
                                 handleChange={this.handleEmployerChange}
                                 addHistory={this.addHistory} />;
                break;
            case 3:
                var stepForm = <EducationalHistory values={this.state}
                                            prevStep={this.prevStep}
                                            nextStep={this.nextStep}
                                            handleChange={this.handleEducationChange}
                                            addInstitute={this.addInstitute} />;
                break;
            case 4:
                var stepForm = <Skills values={this.state}
                                                   prevStep={this.prevStep}
                                                   nextStep={this.nextStep}
                                                   handleChange={this.handleSkillChange}
                                                   addSkill={this.addSkill} />;
                break;
            case 5:
                var stepForm = <Awards values={this.state}
                                       prevStep={this.prevStep}
                                       nextStep={this.nextStep}
                                       handleChange={this.handleAwardChange}
                                       addAward={this.addAward} />;
                break;
            case 6:
                var stepForm = <Complete values={this.state}
                                       success={this.createAndDownloadPdf}/>;
                break;
        }
        return (
            <div>
                <div className="red-back col-xs-3 mobile-hide">
                    <Button block outline theme="light" className={'form-side-button ' + ((step === 1) ? "active" : "inactive")} >Personal</Button>
                    <Button block outline theme="light" className={'form-side-button ' + ((step === 2) ? "active" : "inactive")} >Work History</Button>
                    <Button block outline theme="light" className={'form-side-button ' + ((step === 3) ? "active" : "inactive")} >Education</Button>
                    <Button block outline theme="light" className={'form-side-button ' + ((step === 4) ? "active" : "inactive")} >Skills</Button>
                    <Button block outline theme="light" className={'form-side-button ' + ((step === 5) ? "active" : "inactive")} >Awards</Button>
                </div>
                <div className="col-xs-12 col-sm-8">
                    {stepForm}
                </div>
            </div>
        )
    }



}

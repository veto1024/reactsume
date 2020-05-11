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
            pdfEnabled: false,
            step: 1,
            full_name: '',
            email: '',
            phone: '',
            linkedin: '',

            num_history: 1,
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
            num_institute: 1,
            myEducation: [{
                num: 0,
                institution: '',
                gradDate: '',
                gpa: '',
                degree: '',
            }],

            num_skills: 1,
            mySkills: [{
                num: 0,
                skill: '',
            }],

            num_awards: 1,
            myAwards: [{
                num: 0,
                award:'',
            }],
        }
    }

    addHistory = e => {
        const { num_history } = this.state;
        this.setState({
            num_history: num_history + 1
        });
        const defaultItem = {
            num: num_history,
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
        const { num_institute } = this.state;
        this.setState({
            num_institute: num_institute + 1
        });
        const defaultItem = {
            num: num_institute,
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
        const { num_awards } = this.state;
        this.setState({
            num_awards: num_awards + 1
        });
        const defaultItem = {
            num: num_awards,
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
        const { num_skills } = this.state;
        this.setState({
            num_skills: num_skills + 1
        });
        const defaultItem = {
            num: num_skills,
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
        console.log("CLICK");
        axios.post('http://localhost:5000/create-pdf', this.state)
       .then(() => axios.get('http://localhost:5000/fetch-pdf', { responseType: 'blob' }))
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
        const { step, pdfEnabled } = this.state;
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
                <div className="red-back col-xs-2">
                    <Button block outline theme="light" className={'form-side-button ' + ((step === 1) ? "active" : "inactive")} >Personal</Button>
                    <Button block outline theme="light" className={'form-side-button ' + ((step === 2) ? "active" : "inactive")} >Work History</Button>
                    <Button block outline theme="light" className={'form-side-button ' + ((step === 3) ? "active" : "inactive")} >Education</Button>
                    <Button block outline theme="light" className={'form-side-button ' + ((step === 4) ? "active" : "inactive")} >Skills</Button>
                    <Button block outline theme="light" className={'form-side-button ' + ((step === 5) ? "active" : "inactive")} >Awards</Button>
                </div>
                <div className="col-xs-10">
                    {stepForm}
                </div>
            </div>
        )
    }



}
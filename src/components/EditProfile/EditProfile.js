import React, {Component} from 'react';
import Label from '../Form/Label/Label';
import Input from '../Form/Input/Input';
import ServiceImages from '../Image/ServiceImages/ServiceImages';
import './EditProfile.css';
import afro from '../../assets/images/afro.png';
import afro1 from '../../assets/images/afro2.png';
import braid from '../../assets/images/braid.png';

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {
                about: {
                    elementType: 'textarea',
                    elementConfig: {
                        value: "",
                        placeholder: "Write something about yourself and services offered",
                        controlLabel: "About",
                    }
                },
                areasOfOperation: {
                    // Multi-select
                },
                cancellationPolicy: {
                    elementType: 'textarea',
                    elementConfig: {
                        value: "",
                        placeholder: "Insert your cancellation policy here",
                        controlLabel: "Cancellation Policy",
                    }
                },
                serviceRules: {
                    elementType: 'textarea',
                    elementConfig: {
                        value: "",
                        placeholder: "Insert your service rules here",
                        controlLabel: "Service rules",

                    }
                },
                faq: {
                    elementType: 'faq',
                    elementConfig: {
                        questions: [
                            {heading: 'Heading 1', question: 'Question 1'},
                            {heading: 'Heading 2', question: 'Question 2'},
                            {heading: 'Heading 3', question: 'Question 3'},
                            {heading: 'Heading 4', question: 'Question 4'},
                        ]
                    }
                }
            },
            loading: false
        };
    }

    inputChangedHandler = (event, inputId) => {
        const updatedProfile = {
            ...this.state.profile
        };

        const updatedFormElement = {
            ...updatedProfile[inputId]
        };

        updatedFormElement.elementConfig.value = event.target.value;
        updatedProfile[inputId] = updatedFormElement;
        this.setState({
            profile: {...updatedProfile}
        });

        console.log(`Changed: ${event.target.value}`);
    };

    render() {

        const formElementsArray = [];

        for (let key in this.state.profile){
            formElementsArray.push({
                id: key,
                config: this.state.profile[key]
            });
        }

        let form = (
            <div
                style={{
                    display: 'block',
                    margin: '0 auto 18px',
                    width: '100%'
                }}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
            </div>
        );


        return (
            <div className={"profile-container"}>
                <Label
                    style={{marginBottom: '6px'}}
                    labelText={"Cover Images"}
                    showAsterisk/>
                <Label
                    style={{marginBottom: '20px'}}
                    labelText={"Please insert 3 cover images to promote your services "}/>
                <ServiceImages
                    style={{marginBottom: '36px'}}
                    className="row margin-bottom-36"
                    image1={afro}
                    image2={afro1}/>
                {form}
                <button
                    className="btn btn-airstyl"
                    type="button"
                    style={{display: 'block', margin: '36px 7px', float: 'right'}}>SUBMIT</button>
            </div>
        );
    }
}

export default EditProfile;
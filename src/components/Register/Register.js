import React, {Component} from 'react';
import Button from '../Button/Button';
import Avatar from '../Image/Avatar/Avatar';
import Input from '../Form/Input/Input';
import "./Register.css";
import axios from '../../axios-register';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registerForm: {
                name: {
                    elementType: 'text',
                    elementConfig: {
                        value: '',
                        placeholder: "Name",
                    }
                },
                surname: {
                    elementType: 'text',
                    elementConfig: {
                        value: '',
                        placeholder: "Surname",
                    }
                },
                mobile: {
                    elementType: "number",
                    elementConfig: {
                        value: '',
                        placeholder: "Mobile Number",
                    }
                },
                email: {
                    elementType: 'email',
                    elementConfig: {
                        value: '',
                        placeholder: "Email",
                    }
                },
                password: {
                    elementType: 'password',
                    elementConfig: {
                        value: '',
                        placeholder: "Create Password",
                    }
                },
                birthdate: {
                    elementType: 'date',
                    elementConfig: {
                        value: '',
                    }
                },
                gender: {
                    elementType: 'dropdown',
                    elementConfig: {
                        value: 'male',
                        placeholder: "Gender",
                        options: [
                            {value: "male", label: "Male"},
                            {value: "female", label: "Female"}
                        ]
                    }
                },
                hairtype: {
                    elementType: 'dropdown',
                    elementConfig: {
                        value: 1,
                        placeholder: "Hair Type",
                        options: [
                            {value: 1, label: "Braids"},
                            {value: 2, label: "Afro"},
                            {value: 3, label: "Weave"}
                        ]
                    }
                },
                city: {
                    elementType: 'dropdown',
                    elementConfig: {
                        value: 2,
                        placeholder: "City",
                        options: [
                            {value: 1, label: "Randburg"},
                            {value: 2, label: "Sandton"},
                            {value: 3, label: "Midrand"}
                        ]
                    }
                }
            },
            loading: false
        };
        this.inputChangedHandler = this.inputChangedHandler.bind(this);
        this.registerHandler = this.registerHandler.bind(this);
    }


    inputChangedHandler = (event, inputId) => {
        const updatedRegisterForm = {
            ...this.state.registerForm
        };

        const updatedFormElement = {
            ...updatedRegisterForm[inputId]
        };

        updatedFormElement.elementConfig.value = event.target.value;
        updatedRegisterForm[inputId] = updatedFormElement;
        this.setState({
            registerForm: {...updatedRegisterForm}
        });

        console.log(`Changed: ${event.target.value}`);
    };

    registerHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });

        const formData ={};
        for (let formElementId in this.state.registerForm) {
            formData[formElementId] = this.state.registerForm[formElementId].value;
        }

        const registerData = {
            user: {
                formData
            }
        };

        axios.post('/users.json', registerData)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    };

    render() {
        const formElementsArray = [];

        for (let key in this.state.registerForm){
            formElementsArray.push({
                id: key,
                config: this.state.registerForm[key]
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
                        key={formElement.key}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
            </div>
        );

        return (
            <div>
                <div className={"body"} >
                    <div className={"avatar-wrapper"}>
                        <Avatar />
                    </div>
                    <div className={"form-wrapper"}>
                        <form onSubmit={this.registerHandler}>
                            {form}
                        </form>
                        <Button
                            style={{marginBottom: '18px'}}
                            block
                            text={"JOIN NOW"}
                            onClick={this.registerHandler}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default Register;
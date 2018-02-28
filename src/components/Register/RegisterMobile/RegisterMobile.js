import React, {Component} from 'react';
import Avatar from '../../Image/Avatar/Avatar';
import MobileInput from '../../Form/Input/InputMobile';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import profilePic from '../../../assets/images/elliot.jpg';
import "./RegisterMobile.css";

class RegisterMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registerForm: props.form
        };
    }

    inputChangedHandler = (event, inputId) => {
        const updatedRegisterForm = {
            ...this.state.registerForm
        };

        const updatedFormElement = {
            ...updatedRegisterForm[inputId]
        };

        updatedFormElement.value = event.target.value;
        updatedRegisterForm[inputId] = updatedFormElement;
        this.setState({
            registerForm: {...updatedRegisterForm}
        });
        console.log(event);
    };

    backButtonHandler = () => {
        console.log(this.props);
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
            <div className={"register-form-mobile"}>
                {formElementsArray.map(formElement => (
                    <MobileInput
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        elementOptions={formElement.config.elementOptions}
                        value={formElement.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
            </div>
        );

        return (
            <div>
                <AppBar
                    iconElementLeft={
                        <IconButton
                            onClick={this.backButtonHandler}>
                            <ArrowBack />
                        </IconButton>
                    }
                    title="Create an Account"
                    titleStyle={{
                        fontSize: '18px'
                    }}
                />
                <div className={"container"} >
                    <div className={"avatar-wrapper-mobile"}>
                        <Avatar image={profilePic}/>
                    </div>

                    <div className={"register-body-mobile"}>
                        <div className={"register-form-mobile"}>
                            {form}
                        </div>
                        <RaisedButton
                            label="JOIN NOW"
                            primary={true}
                            fullWidth={true}
                            disabled
                            buttonStyle={{
                                margin: '36px auto 20px',
                                height: '48px'
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    };
}

export default RegisterMobile;
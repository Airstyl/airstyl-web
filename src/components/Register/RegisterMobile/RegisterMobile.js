import React, {Component} from 'react';
import Avatar from '../../Image/Avatar/Avatar';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import "./RegisterMobile.css";

class RegisterMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genders: [
                <MenuItem value={1} primaryText="Male" />,
                <MenuItem value={2} primaryText="Female" />
            ],
            chosenGenderValue: 1,
            hairtypes: [
                <MenuItem value={1} primaryText="Afro" />,
                <MenuItem value={2} primaryText="Braids" />,
                <MenuItem value={2} primaryText="Weave" />
            ],
            chosenHairTypeValue: 1,
            cities: [
                <MenuItem value={1} primaryText="Randburg" />,
                <MenuItem value={2} primaryText="Sandton" />,
                <MenuItem value={2} primaryText="Roodepoort" />
            ],
            chosenCityValue: 1
        };
    }

    render() {
        return (
            <div>
                <AppBar
                    iconElementLeft={<IconButton><ArrowBack /></IconButton>}
                    title="Create an Account"
                    titleStyle={{
                        fontSize: '18px'
                    }}
                />
                <div className={"container"} >
                    <div className={"avatar-wrapper-mobile"}>
                        <Avatar />
                    </div>
                    <div className={"register-body-mobile"}>
                        <div className={"register-form-mobile"}>
                            <TextField
                                floatingLabelText="Name"
                                floatingLabelFocusStyle={{color: "#2abcbb"}}
                                errorText="This field is required"
                                errorStyle={{color: '#eb0356'}}
                                fullWidth={true}
                            />
                            <TextField
                                floatingLabelText="Surname"
                                fullWidth={true}
                            />
                            <TextField
                                floatingLabelText="Mobile number"
                                fullWidth={true}
                                type={"number"}
                            />
                            <TextField
                                floatingLabelText="Email"
                                fullWidth={true}
                                type={"email"}
                            />
                            <TextField
                                floatingLabelText="Create Password"
                                fullWidth={true}
                                type={"password"}
                            />
                            <DatePicker
                                hintText="Date Of Birth"
                                fullWidth={true}
                                textFieldStyle={{
                                    fontSize: '14px',
                                    fontWeight: '300',
                                    fontStyle: 'normal',
                                    height: '72px'
                                }}
                            />
                            <SelectField
                                floatingLabelText="Gender"
                                fullWidth={true}
                            >
                                {this.state.genders}
                            </SelectField>
                            <SelectField
                                floatingLabelText="Hair Types"
                                fullWidth={true}
                            >
                                {this.state.hairtypes}
                            </SelectField>
                            <SelectField
                                floatingLabelText="City"
                                fullWidth={true}
                            >
                                {this.state.cities}
                            </SelectField>
                            <TextField
                                floatingLabelText="Hair Type"
                                fullWidth={true}
                            />
                            <TextField
                                floatingLabelText="City"
                                fullWidth={true}
                            />
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
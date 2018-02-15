import React, {Component} from 'react';
import Button from '../Button/Button';
import Avatar from '../Image/Avatar/Avatar';
import Input from '../Form/Input/Input';
import Calendar from 'react-calendar';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import "./Register.css";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genders: [{label: "Female", value: 0}, {label: "Male", value: 1}],
            chosenGenderValue: 0,
            hairtypes: [{label: "Braids", value: 0}, {label: "Afro", value: 1}, {label: "Weave", value: 2}, {label: "Wig", value: 3}],
            chosenHairTypeValue: 1,
            cities: [{label: "Johannesburg", value: 0}, {label: "Sandton", value: 1}, {label: "Randburg", value: 2}],
            chosenCityValue: 1
        };
    }

    render() {
        return (
            <div>
                <div className={"body"} >
                    <div className={"avatar-wrapper"}>
                        <Avatar />
                    </div>
                    <div className={"form-wrapper"}>
                        <form>
                            <Input
                                style={{marginBottom: '18px'}}
                                placeholder="Name"/>
                            <Input
                                style={{marginBottom: '18px'}}
                                placeholder="Surname"/>
                            <Input
                                style={{marginBottom: '18px'}}
                                placeholder="Mobile number"/>
                            <Input
                                style={{marginBottom: '18px'}}
                                placeholder="Email"/>
                            <Input
                                style={{marginBottom: '28px'}}
                                placeholder="Create password"/>
                            <h5 className={"date-of-birth"}>Date of birth</h5>
                            <Calendar/>
                            <Select
                                name="Gender"
                                placeholder={"Gender"}
                                options={this.state.genders}
                                style={{marginBottom: '18px', marginTop: '18px'}}
                            />
                            <Select
                                name="HairType"
                                placeholder={"Hair Type"}
                                options={this.state.hairtypes}
                                multi={true}
                                style={{marginBottom: '18px', marginTop: '18px'}}
                            />
                            <Select
                                name="Cities"
                                placeholder={"City"}
                                options={this.state.cities}
                                multi={true}
                                style={{marginBottom: '18px', marginTop: '18px'}}
                            />
                            {/*<div
                                style={{display: 'block', width: '100%', marginBottom: '18px', marginTop: '18px'}}>
                                <DropDown
                                    style={{display: 'block', width: '100%'}}
                                    title={"Gender"}
                                >
                                    {this.state.genders.map((e, key) => {
                                        return (<li><a href="#">{e.name}</a></li>)
                                    })}
                                </DropDown>
                            </div>
                            <div style={{display: 'block', width: '100%', marginBottom: '18px'}}>
                                <DropDown
                                    style={{display: 'block', width: '100%'}}
                                    title={"Hair Type"}
                                >
                                    {this.state.hairtypes.map((e, key) => {
                                        return (<li><a href="#">{e.name}</a></li>)
                                    })}
                                </DropDown>
                            </div>
                            <div style={{display: 'block', width: '100%', marginBottom: '18px'}}>
                                <DropDown
                                    style={{display: 'block', width: '100%'}}
                                    title={"City"}
                                >
                                    {this.state.cities.map((e, key) => {
                                        return (<li><a href="#">{e.name}</a></li>)
                                    })}
                                </DropDown>
                            </div>*/}
                            <Button
                                style={{marginBottom: '18px'}}
                                block
                                disabled
                                text={"JOIN NOW"}/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}

export default Register;
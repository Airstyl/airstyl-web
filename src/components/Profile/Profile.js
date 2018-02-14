import React from 'react';
import Label from '../Form/Label/Label';
import Input from '../Form/Input/Input';
import FAQ from '../FAQ/FAQ';
import ServiceImages from '../Image/ServiceImages/ServiceImages';
import './Profile.css';
import '../../common/common.css';
import afro from '../../assets/images/afro.png';
import afro1 from '../../assets/images/afro2.png';
import braid from '../../assets/images/braid.png';

const profile = (props) => {
    return (
        <div>
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
            <Label
                style={{marginBottom: '10px'}}
                labelText={"About"}
                showAsterisk />
            <Input
                style={{marginBottom: '18px'}}
                inputType="textarea"
                rows={3}
                placeholder="Write something about yourself and services offered"/>
            <Label
                style={{marginBottom: '6px'}}
                labelText={"Areas of operation"}
                showAsterisk/>
            <a href={"/"} style={{textDecoration: 'none'}}>
                <span className="area-of-operation">Click here to select area of operation</span>
            </a>
            <Label
                style={{marginTop: '36px', marginBottom: '10px'}}
                labelText={"Cancellation policy"}
                showAsterisk/>
            <Input
                style={{marginBottom: '18px'}}
                inputType="textarea"
                placeholder="Insert your cancellation policy here"/>
            <Label
                style={{marginBottom: '10px'}}
                labelText={"Service rules"} />
            <Input
                style={{marginBottom: '18px'}}
                inputType="textarea"
                rows={3}
                placeholder="Insert your service rules here"/>
            <Label
                style={{marginBottom: '10px'}}
                labelText={"FAQ"} />
            <FAQ mode={'input'}/>
            <button
                className="btn btn-airstyl"
                type="button"
                style={{display: 'block', margin: '36px 7px', float: 'right'}}>SUBMIT</button>
        </div>
    );
};

export default profile;
import React from 'react';
import './FAQ.css';
import Input from '../Form/Input/Input';

const faq = (props) => {
    let element = null;
    switch (props.mode)
    {
        case ('input'):
            element = (
                <div>
                    <Input inputType="input" placeholder="Insert question here"/>
                    <Input inputType="textarea" rows={3} placeholder="Insert answer here"/>
                </div>);
            break;
        case ('text'):
            element = (
                <div>
                    <p className="question">{props.question}</p>
                    <p className="answer">{props.answer}</p>
                </div>
            );
            break;
        default:
            element = (
                <div>
                    <Input inputType="input" placeholder="Insert question here"/>
                    <Input inputType="textarea" rows={3} placeholder="Insert answer here"/>
                </div>);
            break;
    }
    return (
        <div>
            {element}
        </div>
    );
};

export default faq;
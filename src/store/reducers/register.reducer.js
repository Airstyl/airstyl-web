import * as actionTypes from '../actions/actions';

const initialState = {
    registerForm: {
        fullname: {
            elementType: 'text',
            elementConfig: {
                value: '',
                placeholder: "Full Name"
            },
            elementValidation: {
                validationState: null,
                validationMessage: '',
                rules: {

                }
            }
        },
        mobileOrEmail: {
            elementType: "text",
            elementConfig: {
                value: '',
                placeholder: "Email or Mobile Number"
            },
            elementValidation: {
                validationState: null,
                validationMessage: '',
                rules: {

                }
            }
        },
        username: {
            elementType: 'text',
            elementConfig: {
                value: '',
                placeholder: "Username"
            },
            elementValidation: {
                validationState: null,
                validationMessage: '',
                rules: {

                }
            }
        },
        password: {
            elementType: 'password',
            elementConfig: {
                value: '',
                placeholder: "Create Password"
            },
            elementValidation: {
                validationState: null,
                validationMessage: '',
                rules: {

                }
            }
        },
        // birthdate: {
        //     elementType: 'date',
        //     elementConfig: {
        //         floatingLabelText: 'Birth Date',
        //     },
        //     elementValidation: {
        //         validationState: null,
        //         validationMessage: '',
        //         rules: {
        //
        //         }
        //     },
        //     value: null,
        // },
        // gender: {
        //     elementType: 'dropdown',
        //     elementConfig: {
        //         value: '',
        //         placeholder: "Gender",
        //         options: [
        //             {value: "male", label: "Male"},
        //             {value: "female", label: "Female"}
        //         ]
        //     },
        //     elementValidation: {
        //         validationState: null,
        //         validationMessage: '',
        //         rules: {
        //
        //         }
        //     }
        // },
        // hairtype: {
        //     elementType: 'dropdown',
        //     elementConfig: {
        //         value: '',
        //         placeholder: "Hair Type",
        //         options: [
        //             {value: 1, label: "Braids"},
        //             {value: 2, label: "Afro"},
        //             {value: 3, label: "Weave"}
        //         ],
        //         multi: true
        //     },
        //     elementValidation: {
        //         validationState: null,
        //         validationMessage: '',
        //         rules: {
        //
        //         }
        //     }
        // },
        // city: {
        //     elementType: 'location',
        //     elementConfig: {
        //         config: {
        //             placeholder: "City",
        //             className: 'location',
        //             style: {
        //                 color: '#444',
        //                 fontSize: '14px',
        //             }
        //         },
        //         value: ''
        //     },
        //     elementValidation: {
        //         validationState: null,
        //         validationMessage: '',
        //         rules: {
        //
        //         }
        //     }
        // }
    },
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.UPDATE_REGISTER_FORM):
            return {
                ...state,
                registerForm: {...action.payload}
            };

        default:
            return state;
    }
};

export default reducer;
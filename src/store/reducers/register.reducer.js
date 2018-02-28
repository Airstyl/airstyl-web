import * as actionTypes from '../actions/actions';

const initialState = {
    registerForm: {
        name: {
            elementType: 'text',
            elementConfig: {
                value: '',
                placeholder: "Name"
            },
            elementValidation: {
                validationState: null,
                validationMessage: '',
                rules: {

                }
            }
        },
        surname: {
            elementType: 'text',
            elementConfig: {
                value: '',
                placeholder: "Surname"
            },
            elementValidation: {
                validationState: null,
                validationMessage: '',
                rules: {

                }
            }
        },
        mobile: {
            elementType: "number",
            elementConfig: {
                value: '',
                placeholder: "Mobile Number"
            },
            elementValidation: {
                validationState: null,
                validationMessage: '',
                rules: {

                }
            }
        },
        email: {
            elementType: 'email',
            elementConfig: {
                value: '',
                placeholder: "Email"
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
        birthdate: {
            elementType: 'date',
            elementConfig: {
                value: '2018-01-01'
            },
            elementValidation: {
                validationState: null,
                validationMessage: '',
                rules: {

                }
            }
        },
        gender: {
            elementType: 'dropdown',
            elementConfig: {
                value: '',
                placeholder: "Gender",
                options: [
                    {value: "male", label: "Male"},
                    {value: "female", label: "Female"}
                ]
            },
            elementValidation: {
                validationState: null,
                validationMessage: '',
                rules: {

                }
            }
        },
        hairtype: {
            elementType: 'dropdown',
            elementConfig: {
                value: '',
                placeholder: "Hair Type",
                options: [
                    {value: 1, label: "Braids"},
                    {value: 2, label: "Afro"},
                    {value: 3, label: "Weave"}
                ],
                multi: true
            },
            elementValidation: {
                validationState: null,
                validationMessage: '',
                rules: {

                }
            }
        },
        city: {
            elementType: 'location',
            elementConfig: {
                value: '',
                placeholder: "City",
            },
            elementValidation: {
                validationState: null,
                validationMessage: '',
                rules: {

                }
            }
        }
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
import * as actionTypes from '../actions/actions';

const initialState = {
    registerForm: {
        fullname: {
            elementType: 'text',
            elementConfig: {
                value: '',
                placeholder: "Full Name"
            },
            elementConfigMobile: {
                value: '',
                floatingLabelText: 'Full Name',
                floatingLabelStyle: {
                    color: '#000000',
                    fontWeight: 'normal'
                },
                inputStyle: {
                    color: '#000000',
                    fontWeight: 'normal'
                },
                underlineStyle: {
                    borderColor: "#000000"
                },
                underlineFocusStyle: {
                    borderColor: "#000000"
                }
            },
            elementValidation: {
                validationState: null,
                validationMessage: '',
                rules: {
                    minWords: {
                        value: 2,
                        message: "Please enter your name and surname"
                    }
                }
            }
        },
        mobileOrEmail: {
            elementType: "text",
            elementConfig: {
                value: '',
                placeholder: "Email"
            },
            elementConfigMobile: {
                value: '',
                floatingLabelText: 'Email',
                floatingLabelStyle: {
                    color: '#000000',
                    fontWeight: 'normal'
                },
                inputStyle: {
                    color: '#000000',
                    fontWeight: 'normal'
                },
                underlineStyle: {
                    borderColor: "#000000"
                },
                underlineFocusStyle: {
                    borderColor: "#000000"
                }
            },
            elementValidation: {
                validationState: null,
                validationMessage: '',
                rules: {
                    email: {
                        message: "Please enter a valid email address"
                    }
                }
            }
        },
        // username: {
        //     elementType: 'text',
        //     elementConfig: {
        //         value: '',
        //         placeholder: "Username"
        //     },
        //     elementConfigMobile: {
        //         value: '',
        //         floatingLabelText: 'Username',
        //         floatingLabelStyle: {
        //             color: '#ffffff',
        //             fontWeight: 'normal'
        //         },
        //         inputStyle: {
        //             color: '#ffffff',
        //             fontWeight: 'normal'
        //         },
        //         underlineStyle: {
        //             borderColor: "#ffffff"
        //         },
        //         underlineFocusStyle: {
        //             borderColor: "#ffffff"
        //         }
        //     },
        //     elementValidation: {
        //         validationState: null,
        //         validationMessage: '',
        //         rules: {
        //             minLength: {
        //                 value: 5,
        //                 message: "Please enter at least 5 characters"
        //             },
        //             unique: {
        //                 value: true,
        //                 message: "Username already exists. Please choose a different one."
        //             }
        //         }
        //     }
        // },
        password: {
            elementType: 'password',
            elementConfig: {
                value: '',
                placeholder: "Create Password"
            },
            elementConfigMobile: {
                value: '',
                floatingLabelText: 'Create Password',
                floatingLabelStyle: {
                    color: '#000000',
                    fontWeight: 'normal'
                },
                inputStyle: {
                    color: '#000000',
                    fontWeight: 'normal'
                },
                underlineStyle: {
                    borderColor: "#000000"
                },
                underlineFocusStyle: {
                    borderColor: "#000000"
                }
            },
            elementValidation: {
                validationState: null,
                validationMessage: '',
                rules: {
                    minLength: {
                        value: 6,
                        message: `Please enter 6 or more characters`
                    }
                }
            }
        }
    },
    showFormModal: false,
    showEmailConfirmationModal: false,
    loading: false,
    error: {
        state: false,
        message: null
    },
    registerAs: "consumer"
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.UPDATE_REGISTER_FORM):
            return {
                ...state,
                registerForm: {...action.payload}
            };
        case (actionTypes.UPDATE_SHOW_FORM_MODAL):
            return {
                ...state,
                showFormModal: action.payload
            };
        case (actionTypes.UPDATE_SHOW_EMAIL_CONFIRMATION_MODAL):
            return {
                ...state,
                showEmailConfirmationModal: action.payload
            };
        case (actionTypes.UPDATE_LOADING):
            return {
                ...state,
                loading: action.payload
            };
        case (actionTypes.UPDATE_ERROR):
            return {
                ...state,
                error: {...action.payload}
            };
        case (actionTypes.AUTH_START):
            return {
                ...state,
                loading: true
            };
        case (actionTypes.AUTH_SUCCESS):
            return {
                ...state,
                registerForm: {
                    fullname: {
                        elementType: 'text',
                        elementConfig: {
                            value: '',
                            placeholder: "Full Name"
                        },
                        elementConfigMobile: {
                            value: '',
                            floatingLabelText: 'Full Name',
                            floatingLabelStyle: {
                                color: '#000000',
                                fontWeight: 'normal'
                            },
                            inputStyle: {
                                color: '#000000',
                                fontWeight: 'normal'
                            },
                            underlineStyle: {
                                borderColor: "#000000"
                            },
                            underlineFocusStyle: {
                                borderColor: "#000000"
                            }
                        },
                        elementValidation: {
                            validationState: null,
                            validationMessage: '',
                            rules: {
                                minWords: {
                                    value: 2,
                                    message: "Please enter your name and surname"
                                }
                            }
                        }
                    },
                    mobileOrEmail: {
                        elementType: "text",
                        elementConfig: {
                            value: '',
                            placeholder: "Email"
                        },
                        elementConfigMobile: {
                            value: '',
                            floatingLabelText: 'Email',
                            floatingLabelStyle: {
                                color: '#000000',
                                fontWeight: 'normal'
                            },
                            inputStyle: {
                                color: '#000000',
                                fontWeight: 'normal'
                            },
                            underlineStyle: {
                                borderColor: "#000000"
                            },
                            underlineFocusStyle: {
                                borderColor: "#000000"
                            }
                        },
                        elementValidation: {
                            validationState: null,
                            validationMessage: '',
                            rules: {
                                email: {
                                    message: "Please enter a valid email address"
                                }
                            }
                        }
                    },
                    // username: {
                    //     elementType: 'text',
                    //     elementConfig: {
                    //         value: '',
                    //         placeholder: "Username"
                    //     },
                    //     elementConfigMobile: {
                    //         value: '',
                    //         floatingLabelText: 'Username',
                    //         floatingLabelStyle: {
                    //             color: '#ffffff',
                    //             fontWeight: 'normal'
                    //         },
                    //         inputStyle: {
                    //             color: '#ffffff',
                    //             fontWeight: 'normal'
                    //         },
                    //         underlineStyle: {
                    //             borderColor: "#ffffff"
                    //         },
                    //         underlineFocusStyle: {
                    //             borderColor: "#ffffff"
                    //         }
                    //     },
                    //     elementValidation: {
                    //         validationState: null,
                    //         validationMessage: '',
                    //         rules: {
                    //             minLength: {
                    //                 value: 5,
                    //                 message: "Please enter at least 5 characters"
                    //             },
                    //             unique: {
                    //                 value: true,
                    //                 message: "Username already exists. Please choose a different one."
                    //             }
                    //         }
                    //     }
                    // },
                    password: {
                        elementType: 'password',
                        elementConfig: {
                            value: '',
                            placeholder: "Create Password"
                        },
                        elementConfigMobile: {
                            value: '',
                            floatingLabelText: 'Create Password',
                            floatingLabelStyle: {
                                color: '#000000',
                                fontWeight: 'normal'
                            },
                            inputStyle: {
                                color: '#000000',
                                fontWeight: 'normal'
                            },
                            underlineStyle: {
                                borderColor: "#000000"
                            },
                            underlineFocusStyle: {
                                borderColor: "#000000"
                            }
                        },
                        elementValidation: {
                            validationState: null,
                            validationMessage: '',
                            rules: {
                                minLength: {
                                    value: 6,
                                    message: `Please enter 6 or more characters`
                                }
                            }
                        }
                    },
                },
                showFormModal: false,
                showEmailConfirmationModal: true,
                loading: false,
                error: {
                    state: false,
                    message: null
                },
            };
        case (actionTypes.AUTH_FAIL):
            return {
                ...state,
                loading: false,
                error: {
                    state: true,
                    message: action.payload
                }
            };
        case (actionTypes.RESET_PAGE):
            return {
                registerForm: {
                    fullname: {
                        elementType: 'text',
                        elementConfig: {
                            value: '',
                            placeholder: "Full Name"
                        },
                        elementConfigMobile: {
                            value: '',
                            floatingLabelText: 'Full Name',
                            floatingLabelStyle: {
                                color: '#000000',
                                fontWeight: 'normal'
                            },
                            inputStyle: {
                                color: '#000000',
                                fontWeight: 'normal'
                            },
                            underlineStyle: {
                                borderColor: "#000000"
                            },
                            underlineFocusStyle: {
                                borderColor: "#000000"
                            }
                        },
                        elementValidation: {
                            validationState: null,
                            validationMessage: '',
                            rules: {
                                minWords: {
                                    value: 2,
                                    message: "Please enter your name and surname"
                                }
                            }
                        }
                    },
                    mobileOrEmail: {
                        elementType: "text",
                        elementConfig: {
                            value: '',
                            placeholder: "Email"
                        },
                        elementConfigMobile: {
                            value: '',
                            floatingLabelText: 'Email',
                            floatingLabelStyle: {
                                color: '#000000',
                                fontWeight: 'normal'
                            },
                            inputStyle: {
                                color: '#000000',
                                fontWeight: 'normal'
                            },
                            underlineStyle: {
                                borderColor: "#000000"
                            },
                            underlineFocusStyle: {
                                borderColor: "#000000"
                            }
                        },
                        elementValidation: {
                            validationState: null,
                            validationMessage: '',
                            rules: {
                                email: {
                                    message: "Please enter a valid email address"
                                }
                            }
                        }
                    },
                    // username: {
                    //     elementType: 'text',
                    //     elementConfig: {
                    //         value: '',
                    //         placeholder: "Username"
                    //     },
                    //     elementConfigMobile: {
                    //         value: '',
                    //         floatingLabelText: 'Username',
                    //         floatingLabelStyle: {
                    //             color: '#ffffff',
                    //             fontWeight: 'normal'
                    //         },
                    //         inputStyle: {
                    //             color: '#ffffff',
                    //             fontWeight: 'normal'
                    //         },
                    //         underlineStyle: {
                    //             borderColor: "#ffffff"
                    //         },
                    //         underlineFocusStyle: {
                    //             borderColor: "#ffffff"
                    //         }
                    //     },
                    //     elementValidation: {
                    //         validationState: null,
                    //         validationMessage: '',
                    //         rules: {
                    //             minLength: {
                    //                 value: 5,
                    //                 message: "Please enter at least 5 characters"
                    //             },
                    //             unique: {
                    //                 value: true,
                    //                 message: "Username already exists. Please choose a different one."
                    //             }
                    //         }
                    //     }
                    // },
                    password: {
                        elementType: 'password',
                        elementConfig: {
                            value: '',
                            placeholder: "Create Password"
                        },
                        elementConfigMobile: {
                            value: '',
                            floatingLabelText: 'Create Password',
                            floatingLabelStyle: {
                                color: '#000000',
                                fontWeight: 'normal'
                            },
                            inputStyle: {
                                color: '#000000',
                                fontWeight: 'normal'
                            },
                            underlineStyle: {
                                borderColor: "#000000"
                            },
                            underlineFocusStyle: {
                                borderColor: "#000000"
                            }
                        },
                        elementValidation: {
                            validationState: null,
                            validationMessage: '',
                            rules: {
                                minLength: {
                                    value: 6,
                                    message: `Please enter 6 or more characters`
                                }
                            }
                        }
                    },
                },
                showFormModal: false,
                showEmailConfirmationModal: false,
                loading: false,
                error: {
                    state: false,
                    message: null
                }
            };
        case (actionTypes.REGISTER_AS_CONSUMER): {
            return {
                ...state,
                registerAs: "consumer"
            }
        }
        case (actionTypes.REGISTER_AS_STYLIST): {
            return {
                ...state,
                registerAs: "stylist"
            }
        }

        default:
            return state;
    }
};

export default reducer;
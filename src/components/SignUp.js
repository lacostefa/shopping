import React, {useReducer, useState} from "react";
import {Link} from "react-router-dom";


const initialForm = {
    fullName: "",
    password: "",
    confirmPassword: "",
    massage: "",
    validWhen: false
}

const reducer = (action, state) => {
    switch (action.type) {

    }
}


const SignUp = () => {

    const [form, dispatch] = useReducer(reducer, initialForm);

    const changeHandler = (event) => {
        dispatch(event.target.name)
    }
    return (
        <div>
            <div>
                <lable>Full Name</lable>
                <input type="text" name="name" onChange={changeHandler}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password"/>
            </div>
            <div>
                <label>Confirm password</label>
                <input type="password" name="confirmPassword"/>
            </div>
            <div>
                <input type="radio" name="radio"/>
            </div>
            <div>
                <Link to="/login">Login</Link>
                <button>Submit</button>
            </div>

        </div>
    )
}

export default SignUp;
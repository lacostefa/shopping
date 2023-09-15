import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

//functions
import {validate} from "../functions/Validat";


const SignUp = () => {

    const [form, setForm] = useState({
        fullName: "",
        password: "",
        confirmPassword: "",
        isTicked: "",
    });

    const [errors, setErrors] = useState({});
    const [focused, setFocused] = useState({});

    const changeHandler = (event) => {
        if (event.target.name === "isTicked") {
            setForm({...form, [event.target.name]: event.target.checked})
        } else {
            setForm({...form, [event.target.name]: event.target.value})
        }
        setForm(event.target.name)
    }

    const focusHandler = (event) => {
        setFocused({...focused, [event.target.name]: true})
    }

    useEffect(() => {
        setErrors(validate(form))
    }, [form.focused])

    const submitHandler = () => {

    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <lable>Full Name</lable>
                    <input type="text" name="fullName" value={form.fullName} onChange={changeHandler}
                           onFocus={focusHandler}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={form.password} onChange={changeHandler}
                           onFocus={focusHandler}/>
                </div>
                <div>
                    <label>Confirm password</label>
                    <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={changeHandler}
                           onFocus={focusHandler}/>
                </div>
                <div>
                    <input type="radio" name="radio" value={form.isTicked} onChange={changeHandler}
                           onFocus={focusHandler}/>
                </div>
                <div>
                    <Link to="/login">Login</Link>
                    <button type="submit">Submit</button>
                </div>
                <ToastContainer/>
            </form>
        </div>
    )
}

export default SignUp;
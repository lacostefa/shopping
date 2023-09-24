import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

//functions
import {validate} from "../functions/Validat";
import {notify} from "../functions/notify";


//// isChecked zero:male one:female

const SignUp = () => {

    const [form, setForm] = useState({
        fullName: "",
        password: "",
        confirmPassword: "",
        isChecked: true
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const changeHandler = (event) => {
        console.log(event.target.checked)
        if (event.target.name ? "female" : "male")
            setForm({...form, [event.target.name]: event.target.checked})
        else {
            setForm({...form, [event.target.name]: event.target.value})
        }
    }

    const focusHandler = (event) => {
        setTouched({...touched, [event.target.name]: true})
    }

    useEffect(() => {
        setErrors(validate(form))
    }, [form.touched])

    const submitHandler = (event) => {
        event.preventDefault();

        if (!Object.keys(errors).length) {
            notify("You signUp successfully", "success")
        } else {
            notify("Invalid data", "error")
            setTouched({
                fullName: true, password: true, confirmPassword: true,
            })
        }
    }

    return (<div>
        <form onSubmit={submitHandler}>
            <div>
                <h3>Sign Up</h3>
            </div>
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
                <label>Female</label>
                <input type="radio" name="female" checked={form.isChecked} onChange={changeHandler}
                       onFocus={focusHandler}/>

                <label>Male</label>
                <input type="radio" name="male" checked={form.isChecked} onChange={changeHandler}
                       onFocus={focusHandler}/>
            </div>
            <div>
                <Link to="/login">Login</Link>
                <button type="submit">Submit</button>
            </div>
            <ToastContainer/>
        </form>
    </div>)
}

export default SignUp;
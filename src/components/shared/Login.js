import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


///Functions
import {notify} from "../functions/notify";
import {validate} from "../functions/Validat";

const Login = () => {

    const [data, setData] = useState({
        fullName: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const changeHandler = event => {
        setData({...data, [event.target.name]: event.target.value})
    }

    const focusHandler = (event) => {
        setTouched({...touched, [event.target.touched]: true})
    }
    const submitHandler = (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify("You Login successfully", "success")
        } else {
            notify("Invalid data", "error")
            setTouched({
                    fullName: true,
                    password: true
                }
            )
        }
    }

    useEffect(() => {
        setErrors(validate(data))
    }, [data, touched])

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <h3>Login</h3>
                </div>
                <div>
                    <label>Full Name</label>
                    <input type="text" name="fullName" onChange={changeHandler}
                           onFocus={focusHandler}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" onChange={changeHandler}
                           onFocus={focusHandler}/>
                </div>
                <div>
                    <Link to="login">Sign Up</Link>
                    <button type="submit">Login</button>
                </div>
                <ToastContainer/>
            </form>
        </div>
    )
}

export default Login;
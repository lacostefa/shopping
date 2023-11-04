import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

////Css
import "../../css/Login.scss";

///Functions
import {notify} from "../../functions/notify";
import {validate} from "../../functions/Validat";

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
        <div className="cart-container">
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h2 className="s-up">Login</h2>
                </div>
                <div className="f-name">
                    <label>Full Name</label>
                    <input className={(errors.fullName && touched.fullName) ? " inputRed" : " inputBlue"}
                           type="text"
                           name="fullName"
                           onChange={changeHandler}
                           onFocus={focusHandler}/>
                    {errors.fullName && touched.fullName && <span>{errors.fullName}</span>}
                </div>
                <div className="f-name">
                    <label>Password</label>
                    <input className={(errors.password && touched.password) ? " inputRed" : " inputBlue"}
                           type="password"
                           onChange={changeHandler}
                           onFocus={focusHandler}/>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className="lo-sub">
                    <Link to="/signUp">Sign Up</Link>
                    <button className="submit btn btn-primary" type="submit">Login</button>
                </div>
                <ToastContainer/>
            </form>
        </div>
    )
}

export default Login;
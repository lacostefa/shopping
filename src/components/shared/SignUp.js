import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

//functions
import {validate} from "../../functions/Validat";
import {notify} from "../../functions/notify";

////Css
import "../../css/SignUp.scss";

//// isChecked false:male true:female

const SignUp = () => {

    const [input, setInput] = useState({
        fullName: "",
        password: "",
        confirmPassword: "",
        isChecked: true
    });

    const changeHandler = ((event) => {
            if (event.target.name === "isChecked") {
                setInput({...input, [event.target.name]: event.target.checked})
            } else {
                setInput({...input, [event.target.name]: event.target.value})
            }
        }
    )
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const focusHandler = event => {
        setTouched({...touched, [event.target.name]: true})
    }

    useEffect(() => {
        setErrors(validate(input, "signUp"))
    }, [input, touched])

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify("You signUp successfully", "success")
        } else {
            notify("Invalid data", "error")
            setTouched({
                    fullName: true,
                    password: true,
                    confirmPassword: true,
                }
            )
        }
    }
    return (
        <div className="cart-container">
            <form onSubmit={submitHandler} className="form">
                <div>
                    <h2 className="s-up">Sign Up</h2>
                </div>
                <div className="f-name">
                    <label>Full Name</label>
                    <input
                        className={(errors.fullName && touched.fullName) ? "inputRed" : "inputBlue"}
                        type="text"
                        name="fullName"
                        value={input.fullName}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                    />
                    {errors.fullName && touched.fullName && <span>{errors.fullName}</span>}
                </div>
                <div className="f-name">
                    <label>Password</label>
                    <input
                        className={(errors.password && touched.password) ? "inputRed" : "inputBlue"}
                        type="password"
                        name="password"
                        value={input.password}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                    />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className="f-name">
                    <label>Confirm password</label>
                    <input
                        className={(errors.confirmPassword && touched.confirmPassword) ? "inputRed" : "inputBlue"}
                        type="password"
                        name="confirmPassword"
                        value={input.confirmPassword}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                    />
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div className="label-radio">
                    <div>
                        <label>Female</label>
                        <input
                            type="radio"
                            name="gender"
                            checked={input.isChecked}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                        />
                    </div>
                    <div>
                        <label>Male</label>
                        <input
                            type="radio"
                            name="gender"
                            checked={input.isChecked}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                        />
                    </div>
                </div>
                <div className="lo-sub">
                    <Link to="/login">Login</Link>
                    <button
                        className="submit btn btn btn-outline-primary"
                        type="submit">Submit
                    </button>
                </div>
                <ToastContainer/>
            </form>
        </div>)
}

export default SignUp;
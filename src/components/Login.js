import React, {useState} from "react";
import {Link} from "react-router-dom";

const Login = () => {
    const [log, setLog] = useState([]);

    const changeHandler = (event) => {
        setLog(event.target.name)
    }
    return (<>
        <div>
            <label>FirstName</label>
            <input type="text" name="firstName" onChange={changeHandler}/>
        </div>
        <div>
            <label>LastName</label>
            <input type="text" onChange={changeHandler}/>
        </div>
        <div>
            <label>Password</label>
            <input type="password" onChange={changeHandler}/>
        </div>
        <div>
            <Link to="login">Sign Up</Link>
        </div>
    </>)
}

export default Login;
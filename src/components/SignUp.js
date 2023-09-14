import React, {useState} from "react";

const SignUp = () => {
    const [state, setState] = useState([]);

    return (
        <div>
            <div>
                <lable>Name</lable>
                <input type="text" name="name"/>
            </div>
            <div>
                <label>LastName</label>
                <input type="text" name="lastName"/>
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

        </div>
    )
}

export default SignUp;
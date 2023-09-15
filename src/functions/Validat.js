export const validate = (form) => {
    const errors = {};

    if (!form.fullName.trim()) {
        errors.fullName = "FullName is required"
    } else {
        delete errors.fullName
    }

    if (!form.password) {
        errors.password = "password is required";
    } else if (form.password.length < 8) {
        errors.password = "Password must have a minimum 8 characters"
    } else {
        delete errors.password
    }

    if (!form.confirmPassword) {
        return "ConfirmPassword is required";
    } else if (form.confirmPassword !== form.password) {
        return "Passwords do not match"
    } else {
        delete errors.confirmPassword
    }
    return errors;
}
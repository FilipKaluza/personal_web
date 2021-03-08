export const checkValidity = (value, rules) => {
    let formIsValid = true;

    if (rules.required) {
        formIsValid = value.trim() /* remove whitespaces */ !== "" && formIsValid;
    }

    if (rules.minLength) {
        formIsValid = value.length >= rules.minLength && formIsValid;
    }

    if (rules.maxLength) {
        formIsValid = value.length <= rules.maxLength && formIsValid;
    }

    if (rules.email) {
        formIsValid = value.includes("@") && value.includes(".") && formIsValid;
    }

    return formIsValid;
}
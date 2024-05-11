export const Validate = (email, password) => {
    const emailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!emailValidate){
        return 'Enter Valid Email';
    }
    if(!passwordValidate){
        return 'Enter Valid Password';
    }

    return null;
};
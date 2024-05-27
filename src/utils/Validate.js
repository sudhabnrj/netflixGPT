export const Validate = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    let messages = [];

    if(!emailRegex.test(email)){
        messages.push("Invalid email format");
    }

    if (password.length < minLength) {
        messages.push(`Password must be at least ${minLength} characters long.`);
    }
    if (!hasUpperCase) {
        messages.push("Password must contain at least one uppercase letter.");
    }
    if (!hasLowerCase) {
        messages.push("Password must contain at least one lowercase letter.");
    }
    if (!hasNumbers) {
        messages.push("Password must contain at least one number.");
    }
    if (!hasSpecialChar) {
        messages.push("Password must contain at least one special character.");
    }

    return messages;
};
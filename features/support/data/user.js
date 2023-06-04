class User {
    constructor(emailArg = "jane12doee@gmail.com", passwordArg = "parole", newPasswordArg = "parole1", securityAnswerArg = "John") {
        this.email = emailArg;
        this.password = passwordArg;
        this.newPassword = newPasswordArg;
        this.securityAnswer = securityAnswerArg;
    }
}

module.exports = User;
class User {
    constructor(emailArg = "jane12doee@gmail.com", passwordArg = "Parole123", newPasswordArg, securityAnswerArg = "John") {
        this.email = emailArg;
        this.password = passwordArg;
        this.newPassword = newPasswordArg;
        this.securityAnswer = securityAnswerArg;
    }
}

module.exports = User;
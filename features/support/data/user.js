class User {
    constructor(emailArg = "jane12doee@gmail.com", passwordArg = "Parole123", securityAnswerArg = "John") {
        this.email = emailArg;
        this.password = passwordArg;
        this.newPassword;
        this.securityAnswer = securityAnswerArg;
    }
}

module.exports = User;
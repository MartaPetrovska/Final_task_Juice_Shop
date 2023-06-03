class User {
    constructor(emailArg = "jane12doee@gmail.com", passwordArg = "Parole123", newPasswordArg) {
        this.email = emailArg;
        this.password = passwordArg;
        this.newPassword = newPasswordArg;
    }
}

module.exports = User;
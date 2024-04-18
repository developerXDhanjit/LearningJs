function setUserName(username) {
    this.username = username;
}

function createUser(username, email, password) {
    // setUserName(username) // is not called in the sense that its execution context is also getting removed !!
    setUserName.call(this, username) // to hold the reference !!

    this.password = password
    this.email = email
}

const UserOne = new createUser('developer', 'developer@fb.com', 'password123')


console.log(UserOne); //username is not shown
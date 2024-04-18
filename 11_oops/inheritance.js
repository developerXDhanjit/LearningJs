class User {
    constructor(name) {
        this.name = name
    }

    logName() {
        console.log(`USERNAME : ${this.name}`);
    }
}

class Teacher extends User {
    constructor(name, id, password) {
        super(name)
        this.id = id
        this.password = password
    }
}
const User1 = new User("Dhanjit")
const HiteshSir = new Teacher("Hitesh", "hitesh@chaicode.com", "passwrd")

console.log(User1);
console.log(HiteshSir);

//instanceOf    
class User {
  constructor(username) {
    this.username = username;
  }

  static createId() {
    return `${this.username}abcI124`;
  } // i DONT WANT this to always have access to each of its object
}

const chessBot = new User("Gen Martin");
// console.log(chessBot.createId()); cant be accessed due to static

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const chessTeacher = new Teacher("levy", "levy@yt.com");
console.log(chessTeacher);
// console.log(chessTeacher.createId()); //throws the same error as above
 

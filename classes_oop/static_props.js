class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const aditya= new User("aditya")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const xMen = new Teacher("xMen", "x@Men.com")
console.log(xMen.logMe());
// console.log(xMen.createId());
class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    // add super keyword before introducing "this"
    }

    addCourse(){
        console.log(`A new course was addded by ${this.username}`);
    }
}

const wolverine = new Teacher("MCU", "stanlee.com", "deadpool")

wolverine.addCourse()

const batman = new User("Batman")
// batman.addCourse() 
// does not hav access 

batman.logMe()
wolverine.logMe()

console.log(wolverine instanceof Teacher);
console.log(wolverine instanceof User);
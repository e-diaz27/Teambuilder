class intern extends Employee {
    constructor (name, id, email, school) {
    super (name, id, email);
    this.school = school;
}

getName(){
    console.log(this.name)
}

getId(){
    console.log(this.id)
}

getEmail(){
    console.log(this.email)
}

getRole(){
    console.log("Intern")
}

getSchool(){
    console.log(this.school)
}
}
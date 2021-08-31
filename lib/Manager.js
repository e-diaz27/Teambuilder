class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
    super (name, id, email);
    this.officeNumber = officeNumber;
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
    console.log("Manager")
}
}
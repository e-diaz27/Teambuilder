class Engineer extends Employee {
    constructor (name, id, email, github) {
    super (name, id, email);
    this.github = github;
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
    console.log("Engineer")
}

getGithub(){
    console.log(this.github)
}

}
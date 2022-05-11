function makePerson(firstName, lastName){
    return {
        first: firstName,
        last: lastName,
        fullName: function(){
            return `${this.first} ${this.last}`
        },
        fullNameReversed: function(){
            return `${this.last} ${this.first}`
        }
    }
}

let showMe = makePerson("John", "Doe")

console.log(
    showMe.fullNameReversed()
)
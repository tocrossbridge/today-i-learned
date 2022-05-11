function Person(first, last){
    this.first = first;
    this.last = last;
}

Person.prototype.fullName = function (){
    return `${this.first} ${this.last}`
}

Person.prototype.fullNameReversed = function(){
    return `${this.last} ${this.first}`
}

// prototype é um objeto compartilhado por todas as instâncias de Person

let showMe = new Person("John", "Doe")

console.log(
    showMe.fullName()
)
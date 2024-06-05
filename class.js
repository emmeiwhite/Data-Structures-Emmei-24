class Doctor {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  getDetails() {
    console.log(`My name is :${this.name} & I am ${this.age} years old`)
  }
}

// Surgeon is a Doctor --- is-a relationship (a good candidate for inheritance)
class Surgeon extends Doctor {
  constructor(name, age, profession) {
    super(name, age)
    this.profession = profession
  }

  specialization() {
    console.log(`I am a ${this.profession}`)
  }
}

const emmei = new Surgeon('emmei', 32, 'heart specialist')

module.exports = emmei

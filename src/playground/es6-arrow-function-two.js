// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments)
  return a + b
}
console.log(add(55, 1, 1001))

// this keyword - no longer bound

const user = {
  name: 'Nick',
  cities: ['Corinth', 'Rienzi', 'Columbus'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city)
  }
}
console.log(user.printPlacesLived())

const multiplier = {
  numbers: [2, 3, 4, 5],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy)
  }
}

console.log(multiplier.multiply())
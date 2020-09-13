import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './Components/IndecisionApp'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

class OldSyntax {
  constructor() {
    this.name = 'Mike'
    this.getGreeting = this.getGreeting.bind(this)
  }
  getGreeting() {
    return `Hi, my name is ${this.name}`
  }
}

const oldSyntax = new OldSyntax()
const getGreeting = oldSyntax.getGreeting
console.log(getGreeting())


class NewSyntax {
  name = 'Jen'
  getGreeting = () => {
    return `Hi, my name is ${this.name}`
  }
}
const newSyntax = new NewSyntax()
const newGetGretting = newSyntax.getGreeting
console.log(newGetGretting())
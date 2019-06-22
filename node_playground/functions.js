// function statement
function greet() {
  console.log('Function Statement')
}
greet()

// Functions are first-class objects
function logGreeting(fn) {
  fn()
}

logGreeting(greet)

// function expression
var greetMe = function() {
  console.log('Function Expression!')
}

greetMe()
logGreeting(greetMe)

logGreeting(function() {
  console.log('Function expression on the fly')
})

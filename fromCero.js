// Say we want to get this person to introduce himself

const juan = {
    firstName: 'Juan',
    lastName: 'Perez',
}

// There is a simple way to do this

const sayHi = person => `Hi friend, my name is ${person.firstName} ${person.lastName}`
console.log(sayHi(juan))

// But what if we want him to be spanish

const saludar = person => `Hola amigo, mi nombre es ${person.firstName} ${person.lastName}`
console.log(saludar(juan))

// This looks like it can be refactored

// First we make some helpful functions
const sayFullName = person => `${person.firstName} ${person.lastName}`
const addPre = prefix => string => `${prefix} ${string}`

// Now we can make our introductions!

const newSayHi = person => addPre('Hi')(addPre('friend,')(addPre('my name is')(sayFullName(person))))
console.log(newSayHi(juan))

const newSaludar = person => addPre('Hola')(addPre('amigo,')(addPre('mi nombre es')(sayFullName(person))))
console.log(newSaludar(juan))

// Now that looks awfully bad! That's where piping comes in handy
// The pipe function will apply arguments from right to left
const pipe = (...args) => args.reduce((f1, f2) => value => f1(f2(value)))

const pipedSayHi = pipe(addPre('Hi,'), addPre('friend'), addPre('my name is'), sayFullName)
console.log(pipedSayHi(juan))


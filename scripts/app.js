// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do?
// Response - Contains information on what was actually done

// Primitive value: string, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray  --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let gameOne

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    gameOne.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = gameOne.statusMessage

    gameOne.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    gameOne = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((e) => {
//     console.log(e)
// })

// getCountry('US').then((country) => {
//     console.log(country.name)
// }).catch((e) => {
//     console.log(e)
// })

// getLocation().then((location) => {
//     console.log(`You are currently in ${location.city}, ${location.region}, ${location.country}`)
// }).catch((e) => {
//     console.log(e)
// })

getCurrentCountry().then((country) => {
    console.log(country.name)
}).catch((error) => {
    console.log(error)
})

// getLocation().then((location) => {
//     return getCountry(location.country)
// }).then((country) => {
//     console.log(country.name)
// }).catch((e) => {
//     console.log(e)
// })
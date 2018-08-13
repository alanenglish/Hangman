class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split(''),
        this.remainingGuesses = remainingGuesses,
        this.guessedLetters = [],
        this.status = 'PLAYING'
    }

    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
        return puzzle
    }

    get statusMessage() {
        if (this.status === 'PLAYING') {
            return `Guesses Left: ${this.remainingGuesses}`
        } else if (this.status === 'FAILED') {
            return `Nice Try! The word was "${this.word.join('').toUpperCase()}".`
        } else {
            return `Great work! You guessed the word!`
        }
    }

    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)

        if (this.status !== 'PLAYING') {
            return
        }
        
        if (isUnique) {
            this.guessedLetters.push(guess)
        }

        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }
        this.updateStatus()
    }

    updateStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if (this.remainingGuesses === 0) {
            this.status = 'FAILED'
        } else if (finished) {
            this.status = 'FINISHED'
        } else {
            this.status = 'PLAYING'
        }
    }
}

export { Hangman as default };
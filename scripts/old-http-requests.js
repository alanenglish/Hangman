// PUZZLE PROMISE CHAINING

const getPuzzleOld = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle.')
        }
    }).then((data) => {
        return data.puzzle
    })
}

// FETCH API

fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
    if (response.status === 200) {
        return response.json()
    } else  {
        throw new Error('Unable to fetch the puzzle.')
    }
}).then((data) => {
    console.log(data.puzzle)
}).catch((e) => {
    console.log(e)
})

// PUZZLE XML HTTP

const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            resolve(data.puzzle)
        } else if (e.target.readyState === 4) {
            reject('An error has occurred.')
        }
    })

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
}) 

// COUNTRY PROMISE CHAINING

const getCountryOld = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch country.')
        }
    }).then((data) => {
        return data.find(country => country.alpha2Code === countryCode)
    })
}

// COUNTRY XML HTTP

const countryCode = 'US'
const countryRequest = new XMLHttpRequest()

countryRequest.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        let myCountry = data.find(country => country.alpha2Code === countryCode)
        console.log(myCountry.name)
    } else if (e.target.readyState === 4) {
        console.log('An error has taken place.')
    }
})

countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
countryRequest.send()

// LOCATION FETCH NON ASYCN/AWAIT

const getLocationOld = () => {
    return fetch('http://ipinfo.io/json?token=954b366f27d159').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Could not find your locaiton information')
        }
    })
}
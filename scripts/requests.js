// ASYN/AWAIT PUZZLE

const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch puzzle.')
    }
}

// ASYNC/AWAIT COUNTRY

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')

    if (response.status === 200) {
        const data = await response.json()
        return data.find(country => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch country.')
    }
}

// ASYNC/AWAIT LOCATION (VIA IP)

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=954b366f27d159')
    
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Could not find your locaiton information')
    }
}

// ASYNC/AWAIT USE IP TO THEN CALL GET COUNTRY

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)
}
const allCategories = document.querySelector('#allCat')
const category1 = document.querySelector('#cat1')
const category2 = document.querySelector('#cat2')
const category3 = document.querySelector('#cat3')
const category4 = document.querySelector('#cat4')
const enter = document.querySelector(`#enter`)
const addButton = document.querySelector(`#addGame`)
let MyGameList = []

async function getGames() {
    const response = await axios.get(`http://localhost:3001/games`)
    return response.data
}

async function yes() {
    allGames = await getGames()
    console.log(allGames)
    displayAll(allGames)
}
yes()

let lastLength = 0
isDisplayed = false

const displayAll = (currentGames) => {
    if (isDisplayed == true) {
        for (i = 0; i < lastLength; i++) {
            let game = document.querySelector('.game')
            if (game) {
                game.remove()
            } else {
                console.log("DNE")
            }
        } 
    }
    for (let i = 0; i < currentGames.length; i++) {
        const container = document.getElementById('game-container')
        const game = document.createElement('div')
        console.log(`createelement`)
        game.className = 'game'
        game.id = `game${i+1}`
        game.innerHTML = 
            `<h3 id="gameTitle">${currentGames[i].name}</h3>
            <p id="gameDescription">${currentGames[i].description}</p>
            <h5 id="gameTags">${currentGames[i].tags}</h5>
            <p id="publisherDetails">${currentGames[i].publisher}</p>
            <h5 id="achievements">${currentGames[i].achievements}</h5>
            <img id="gameImage" src="${currentGames[i].image}">`
        container.appendChild(game)
    isDisplayed = true
    lastLength = currentGames.length
    }
}

let lastLengthS = 0
isDisplayedS = false

const displaySearched = (currentGames) => {
    if (isDisplayedS == true) {
        for (i = 0; i < lastLengthS; i++) {
            let game = document.querySelector('.gameS')
            if (game) {
                game.remove()
            } else {
                console.log("DNE")
            }
        } 
    }
    for (let i = 0; i < currentGames.length; i++) {
        const container = document.getElementById('searchedGames')
        const game = document.createElement('div')
        console.log(`createelement`)
        game.className = 'gameS'
        game.id = `gameS${i+1}`
        game.innerHTML = 
            `<h3 id="gameTitleS">${currentGames[i].name}</h3>
            <button id="addGame">add</button>`
        container.appendChild(game)
    isDisplayedS = true
    lastLengthS = currentGames.length
    }
}

enter.onclick = async() => {
    let textInput = document.querySelector("#inputText").value.trim().toLowerCase();
    console.log(textInput);
    allProducts = await getGames();
    const matchedProducts = allProducts.filter(product => product.name.toLowerCase().includes(textInput));
    if (matchedProducts.length > 0) {
        displaySearched(matchedProducts);
    } else {
        // Handle the case where no products match the search
        console.log("No products matched the search.");
    }
    
}

addButton.onclick = async() => {
    MyGameList.push()
}
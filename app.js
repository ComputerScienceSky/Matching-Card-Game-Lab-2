document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'alice',
            img: 'images/alice.png'
        },
        {
            name: 'alice',
            img: 'images/alice.png'
        },
        {
            name: 'christine',
            img: 'images/christine.png'
        },
        {
            name: 'christine',
            img: 'images/christine.png'
        },
        {
            name: 'joce',
            img: 'images/joce.png'
        },
        {
            name: 'joce',
            img: 'images/joce.png'
        },
        {
            name: 'maria',
            img: 'images/maria.png'
        },
        {
            name: 'maria',
            img: 'images/maria.png'
        },
        {
            name: 'mel',
            img: 'images/mel.png'
        },
        {
            name: 'mel',
            img: 'images/mel.png'
        },
        {
            name: 'respass',
            img: 'images/respass.png'
        },
        {
            name: 'respass',
            img: 'images/respass.png'
        }
    ]

    //randomize
    cardArray.sort(() => 0.5 - Math.random())

    //create board
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/card.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //match
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('Match Found!')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/card.png')
            cards[optionTwoId].setAttribute('src', 'images/card.png')
            alert('No Match :(')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length

        if (cardsWon.length === cardArray.length/2) {
            alert('You Won :). Congratulations!')
        }
    }
    //flip
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})
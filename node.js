 	
            const messageEl = document.getElementById("message-el")
            const cardsEl = document.getElementById("cards-el")
            const sumEl = document.getElementById("sum-el")
            
            const startBtn = document.getElementById("start-btn")
            const newCardBtn = document.getElementById("newCard-btn")
            
            const playerName = document.getElementById("name")
            const cashEl = document.getElementById("cash")
            const msgBottom = document.getElementById("msg-bottom")
            
            let index = 0
            let cards = []
            let sumNum = 0
            let players = ["Marinda","John","Sarah","Andy","Michael"]
            let cash = 0
            startEnabled()
            
            function startEnabled() {
            	startBtn.disabled = false
            	newCardBtn.disabled = true
            }
            function startDisabled() {
            	startBtn.disabled = true
            	newCardBtn.disabled = false
            }
            
            function randomPlayer() {
            	playerName.textContent = players [Math.floor(Math.random()*players.length)]
                cashEl.textContent = cash
            }
            
            function getCard() {
            	index = Math.floor(Math.random()*13) + 1
                if (index === 1) {
                    return index = 11
                } else if (10 <= index) {
                    return index = 10
                } else {
                	return index
                }
            }
            
            function sumCards() {
            	for (let i=0 ; i<cards.length ; i++) {
                	sumNum += cards[i]}
                sumEl.textContent += sumNum
            }
            
            function emptyBoard() {
            	cash = 200
            	sumNum = 0
                cards = []
                index = 0
                cardsEl.textContent = ""
                sumEl.textContent = ""
                playerName.textContent = ""
                cashEl.textContent = ""
                msgBottom.textContent = ""
            }
            
            function calculate() {
            	if (sumNum === 21) {
                      startEnabled()
                      messageEl.textContent = "👑 Wohoo! You have got a Blackjack! 👑"
                      cash = 400
                      cashEl.textContent = cash
                      msgBottom.textContent = "Congrats. Press START GAME to be lucky again!"
             	 } else if (sumNum < 21) {
                      startDisabled()
                      messageEl.textContent = "Do you want to draw a new card?"
                      msgBottom.textContent = "You still have a chance to win the prize"
             	 } else {
                      startEnabled()
                      messageEl.textContent = "💩 You are out of the game! 💩"
                      cash = 0
                      cashEl.textContent = cash
                      msgBottom.textContent = "Want to play again? Press START GAME!"
              	 }
            }
            
            function start() {
            		emptyBoard()
                
                let card1 = getCard()
            	let card2 = getCard()
            		cards.push(card1)
            		cards.push(card2)
           		for (let i=0 ; i < cards.length ; i++) {
            		cardsEl.textContent += "| " + cards[i] + " |"
            		}
                    
                    sumCards()
                	randomPlayer()
            		startDisabled()
            		calculate()
            } 
            
            function newCard() {
            		cardsEl.textContent = ""
                	sumEl.textContent = ""
                    
            	let card3 = getCard()
            		cards.push(card3)
                for (let i=0 ; i < cards.length ; i++) {
            		cardsEl.textContent += "| " + cards[i] + " |"
            	}	
                	sumNum = 0
                	sumCards()
                    calculate()
            }
        
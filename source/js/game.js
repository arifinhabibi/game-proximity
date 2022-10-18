class Game {
    constructor(){  
        this.templatGame = document.querySelector('.game')
        this.honeys = []
        this.cells = []
        this.turnNumber = document.querySelector('.turn')
        this.canClick = true
    }
    render(){
        this.create()
        this.listen()

        // debug
       
    }

    listen(){

        // click cell
        let number = Math.ceil(Math.random() * 50)
        this.cells.forEach((cell) => {
            this.turnNumber.innerHTML = number


            // player choose
            cell.domCell.addEventListener('click', () => {

                if (this.canClick == true) {
                    this.canClick = false
                    cell.number = number
                    cell.turn = 'user'
                    this.playerChoose(cell.row, cell.col, cell.number)
                    number = Math.ceil(Math.random() * 50)
                    this.turnNumber.innerHTML = number
    
                    setTimeout(() => {
                        // bot choose
                        this.botChoose(number)

                        this.canClick = true
                    }, 2000)
                }

            })
        })

    }

    botChoose(number){

    }

    playerChoose(row, col, number){

    }

    create() {
        // honeys
        for (let row = 1; row <= 6; row++) {
            const honeys  = new Honeys(row)
            honeys.render()
            this.honeys.push(honeys)
        }

        const y = -25
        this.honeys.forEach((honeyRow) => {
            if (honeyRow.row == 1) {
                honeyRow.domHoneys.style.transform = `translate(0px, 0px)`
            }else if (honeyRow.row % 2 == 0) {
                honeyRow.domHoneys.style.transform = `translate(45px, ${(honeyRow.row - 1 ) * y}px)`
            } else {
                honeyRow.domHoneys.style.transform = `translate(0px, ${(honeyRow.row - 1 ) * y}px)`
            }
        })
    }
}


const game = new Game()
game.render()
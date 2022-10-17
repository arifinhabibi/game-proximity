class Game {
    constructor(){  
        this.templatGame = document.querySelector('.game')
        this.honeys = []
    }
    render(){
        this.create()
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
            console.log(honeyRow)
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
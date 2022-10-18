class Game {
    constructor(){  
        this.templatGame = document.querySelector('.game')
        this.honeys = []
        this.cells = []
        this.turnNumber = document.querySelector('.turn')
        this.canClick = true
        this.countNumberUser = 0
        this.countNumberBot = 0
    }
    render(){
        this.create()
        this.listen()

        
    }
    
    listen(){
        
        // click cell
        let number = Math.ceil(Math.random() * 25)
        this.cells.forEach((cell) => {
            this.turnNumber.innerHTML = number

            // debug
            // if (cell.row == 3 && cell.col == 1 || cell.row == 4 && cell.col == 1) {
            //     cell.domCell.src = './source/img/red.png'
            //     cell.number = 2
            //     cell.turn = 'bot'
            //     cell.domNumber.innerHTML = cell.number
            // }
            
            
            // player choose
            cell.domCell.addEventListener('click', () => {
                
                if (this.canClick == true) {
                    if (cell.turn == null) {
                        this.canClick = false
                        cell.number = number
                        cell.turn = 'user'
                        this.playerChoose(cell.row, cell.col, cell.number)
                        
                        number = Math.ceil(Math.random() * 25)
                        this.turnNumber.innerHTML = number
                        
                        setTimeout(() => {
                            // bot choose
                            this.botChoose(number)
                            number = Math.ceil(Math.random() * 25)
                            this.turnNumber.innerHTML = number
                            this.canClick = true
                        }, 1000)
                    }
                    
                }
                
            })
        })
        
    }
    
    botChoose(number){

        const cellNull = this.cells.filter((cell) => cell.turn == null)

        const index = Math.floor(Math.random() * cellNull.length)
        
        const findDom = cellNull[index]

        findDom.domNumber.innerHTML = number
        
        findDom.number = number
        
        findDom.turn = 'bot'
        
        findDom.domCell.src = './source/img/red.png'
        
        this.countNumberBot = this.countNumberBot + number
        
        if (findDom.row % 2 == 0) {
            // kiri atas
            const leftTop = this.cells.find((cell) => cell.row == findDom.row - 1 && cell.col == findDom.col)
            // kanan atas
            const rightTop = this.cells.find((cell) => cell.row == findDom.row - 1 && cell.col == findDom.col + 1)
            // kanan
            const right = this.cells.find((cell) =>  cell.row == findDom.row && cell.col == findDom.col + 1)
            // bawah kanan
            const bottomRight = this.cells.find((cell) => cell.row == findDom.row + 1 && cell.col == findDom.col)
            // bawah kiri
            const bottomLeft =  this.cells.find((cell) => cell.row == findDom.row + 1 && cell.col == findDom.col)
            // kiri
            const left = this.cells.find((cell) => cell.row == findDom.row && cell.col == findDom.col - 1)
            
            
            // hitung
            if (leftTop && findDom.number > leftTop.number && leftTop.turn == 'user') {
                leftTop.domCell.src = './source/img/blue.png'
            }
            
            if (rightTop && findDom.number > rightTop.number && rightTop.turn == 'user') {
                rightTop.domCell.src = './source/img/blue.png'
            }
            
            if (right && findDom.number > right.number && right.turn == 'user') {
                right.domCell.src = './source/img/blue.png'
            }
            
            if (bottomRight && findDom.number > bottomLeft.number && bottomLeft.turn == 'user') {
                bottomLeft.domCell.src = './source/img/blue.png'
            }
            
            if (bottomLeft && findDom.number > bottomRight.number && bottomRight.turn == 'user') {
                bottomRight.domCell.src = './source/img/blue.png'
            }
            
            if (left && findDom.number > left.number && left.turn == 'user') {
                left.domCell.src = './source/img/blue.png'
            }
            
            
            // nambah satu
            if (leftTop && findDom.number > leftTop.number && leftTop.turn == 'user') {
                leftTop.domCell.src = './source/img/red.png'
                leftTop.turn = 'bot'
            }
            
            if (rightTop && findDom.number > rightTop.number && rightTop.turn == 'user') {
                rightTop.domCell.src = './source/img/red.png'
                rightTop.turn = 'bot'
            }
            
            if (right && findDom.number > right.number && right.turn == 'user') {
                right.domCell.src = './source/img/red.png'
                right.turn = 'bot'
                
            }
            
            if (bottomLeft && findDom.number > bottomLeft.number && bottomLeft.turn == 'user') {
                bottomLeft.domCell.src = './source/img/red.png'
                bottomLeft.turn = 'bot'
            }
            
            if (bottomRight && findDom.number > bottomRight.number && bottomRight.turn == 'user') {
                bottomRight.domCell.src = './source/img/red.png'
                bottomRight.turn = 'bot'
            }
            
            if (left && findDom.number > left.number && left.turn == 'user') {
                left.domCell.src = './source/img/red.png'
                left.turn = 'bot'
            } 
            
            
        } else {
            // kiri atas
            const leftTop = this.cells.find((cell) => cell.row == findDom.row - 1 && cell.col == findDom.col - 1)
            // kanan atas 
            const rightTop = this.cells.find((cell) => cell.row == findDom.row - 1 && cell.col == findDom.col)
            // kanan
            const right = this.cells.find((cell) =>  cell.row == findDom.row && cell.col == findDom.col + 1)
            // bawah kanan
            const bottomRight = this.cells.find((cell) => cell.row == findDom.row + 1 && cell.col == findDom.col)
            // bawah kiri
            const bottomLeft =  this.cells.find((cell) => cell.row == findDom.row + 1 && cell.col == findDom.col - 1)
            // kiri
            const left = this.cells.find((cell) => cell.row == findDom.row && cell.col == findDom.col - 1)
            
            
            // hitung
            if (leftTop && findDom.number > leftTop.number && leftTop.turn == 'user') {
                leftTop.domCell.src = './source/img/red.png'
                leftTop.turn = 'bot'
            }
            
            if (rightTop && findDom.number > rightTop.number && rightTop.turn == 'user') {
                rightTop.domCell.src = './source/img/red.png'
                rightTop.turn = 'bot'
            }
            
            if (right && findDom.number > right.number && right.turn == 'user') {
                right.domCell.src = './source/img/red.png'
                right.turn = 'bot'
                
            }
            
            if (bottomLeft && findDom.number > bottomLeft.number && bottomLeft.turn == 'user') {
                bottomLeft.domCell.src = './source/img/red.png'
                bottomLeft.turn = 'bot'
            }
            
            if (bottomRight && findDom.number > bottomRight.number && bottomRight.turn == 'user') {
                bottomRight.domCell.src = './source/img/red.png'
                bottomRight.turn = 'bot'
            }
            
            if (left && findDom.number > left.number && left.turn == 'user') {
                left.domCell.src = './source/img/red.png'
                left.turn = 'bot'
            } 

            
            // nambah satu
            if (leftTop && leftTop.turn == 'bot') {
                leftTop.number += 1
                leftTop.domNumber.innerHTML = leftTop.number
            }
            
            if (rightTop &&  rightTop.turn == 'bot') {
                rightTop.number += 1
                rightTop.domNumber.innerHTML = rightTop.number
            }
            
            if (right && right.turn == 'bot') {
                right.number += 1
                right.domNumber.innerHTML = right.number
            }
            
            if (bottomLeft && bottomLeft.turn == 'bot') {
                bottomLeft.number += 1
                bottomLeft.domNumber.innerHTML = bottomLeft.number
                
            }
            
            if (bottomRight && bottomRight.turn == 'bot') {
                bottomRight.number += 1
                bottomRight.domNumber.innerHTML = bottomRight.number
                
            }
            
            if (left && left.turn == 'bot') {
                left.number += 1
                left.domNumber.innerHTML = left.number
            } 
            

        }

    }
    
    playerChoose(row, col, number){
        const findDom = this.cells.find((cell) => cell.row == row && cell.col == col)

        
        findDom.domNumber.innerHTML = number
        
        findDom.domCell.src = './source/img/blue.png'
        
        this.countNumberUser = this.countNumberUser + number
        
        if (row % 2 == 0) {
            // kiri atas
            const leftTop = this.cells.find((cell) => cell.row == row - 1 && cell.col == col)
            // kanan atas
            const rightTop = this.cells.find((cell) => cell.row == row - 1 && cell.col == col + 1)
            // kanan
            const right = this.cells.find((cell) =>  cell.row == row && cell.col == col + 1)
            // bawah kanan
            const bottomRight = this.cells.find((cell) => cell.row == row + 1 && cell.col == col)
            // bawah kiri
            const bottomLeft =  this.cells.find((cell) => cell.row == row + 1 && cell.col == col)
            // kiri
            const left = this.cells.find((cell) => cell.row == row && cell.col == col - 1)
            
            
            // hitung
            if (leftTop && findDom.number > leftTop.number && leftTop.turn == 'bot') {
                leftTop.domCell.src = './source/img/blue.png'
                leftTop.turn = 'user'
            }
            
            if (rightTop && findDom.number > rightTop.number && rightTop.turn == 'bot') {
                rightTop.domCell.src = './source/img/blue.png'
                rightTop.turn = 'user'
            }
            
            if (right && findDom.number > right.number && right.turn == 'bot') {
                right.domCell.src = './source/img/blue.png'
                right.turn = 'user'
                
            }
            
            if (bottomLeft && findDom.number > bottomLeft.number && bottomLeft.turn == 'bot') {
                bottomLeft.domCell.src = './source/img/blue.png'
                bottomLeft.turn = 'user'
            }
            
            if (bottomRight && findDom.number > bottomRight.number && bottomRight.turn == 'bot') {
                bottomRight.domCell.src = './source/img/blue.png'
                bottomRight.turn = 'user'
            }
            
            if (left && findDom.number > left.number && left.turn == 'bot') {
                left.domCell.src = './source/img/blue.png'
                left.turn = 'user'
            } 



            // nambah satu
            if (leftTop && leftTop.turn == 'user') {
                leftTop.number += 1
                leftTop.domNumber.innerHTML = leftTop.number
            }
            
            if (rightTop &&  rightTop.turn == 'user') {
                rightTop.number += 1
                rightTop.domNumber.innerHTML = rightTop.number
            }
            
            if (right && right.turn == 'user') {
                right.number += 1
                right.domNumber.innerHTML = right.number
            }
            
            if (bottomRight && bottomRight.turn == 'user') {
                bottomRight.number += 1
                bottomRight.domNumber.innerHTML = bottomRight.number
                
            }
            
            if (bottomLeft && bottomLeft.turn == 'user') {
                bottomLeft.number += 1
                bottomLeft.domNumber.innerHTML = bottomLeft.number
                
            }
            
            if (left && left.turn == 'user') {
                left.number += 1
                left.domNumber.innerHTML = left.number
            } 
            
            
            
        } else {
            // kiri atas
            const leftTop = this.cells.find((cell) => cell.row == row - 1 && cell.col == col - 1)
            // kanan atas 
            const rightTop = this.cells.find((cell) => cell.row == row - 1 && cell.col == col)
            // kanan
            const right = this.cells.find((cell) =>  cell.row == row && cell.col == col + 1)
            // bawah kanan
            const bottomRight = this.cells.find((cell) => cell.row == row + 1 && cell.col == col)
            // bawah kiri
            const bottomLeft =  this.cells.find((cell) => cell.row == row + 1 && cell.col == col - 1)
            // kiri
            const left = this.cells.find((cell) => cell.row == row && cell.col == col - 1)


            // hitung
            if (leftTop && findDom.number > leftTop.number && leftTop.turn == 'bot') {
                leftTop.domCell.src = './source/img/blue.png'
                leftTop.turn = 'user'
            }
            
            if (rightTop && findDom.number > rightTop.number && rightTop.turn == 'bot') {
                rightTop.domCell.src = './source/img/blue.png'
                rightTop.turn = 'user'
            }
            
            if (right && findDom.number > right.number && right.turn == 'bot') {
                right.domCell.src = './source/img/blue.png'
                right.turn = 'user'
                
            }
            
            if (bottomLeft && findDom.number > bottomLeft.number && bottomLeft.turn == 'bot') {
                bottomLeft.domCell.src = './source/img/blue.png'
                bottomLeft.turn = 'user'
            }
            
            if (bottomRight && findDom.number > bottomRight.number && bottomRight.turn == 'bot') {
                bottomRight.domCell.src = './source/img/blue.png'
                bottomRight.turn = 'user'
            }
            
            if (left && findDom.number > left.number && left.turn == 'bot') {
                left.domCell.src = './source/img/blue.png'
                left.turn = 'user'
            } 



            // nambah satu
            if (leftTop && leftTop.turn == 'user') {
                leftTop.number += 1
                leftTop.domNumber.innerHTML = leftTop.number
            }
            
            if (rightTop &&  rightTop.turn == 'user') {
                rightTop.number += 1
                rightTop.domNumber.innerHTML = rightTop.number
            }
            
            if (right && right.turn == 'user') {
                right.number += 1
                right.domNumber.innerHTML = right.number
            }
            
            if (bottomRight && bottomRight.turn == 'user') {
                bottomRight.number += 1
                bottomRight.domNumber.innerHTML = bottomRight.number
                
            }
            
            if (bottomLeft && bottomLeft.turn == 'user') {
                bottomLeft.number += 1
                bottomLeft.domNumber.innerHTML = bottomLeft.number
                
            }
            
            if (left && left.turn == 'user') {
                left.number += 1
                left.domNumber.innerHTML = left.number
            } 
            
        }

    
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
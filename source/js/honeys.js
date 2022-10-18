class Honeys {
    constructor(row){
        this.row = row
        this.domHoneys = null
        this.cell = null
        this.number = null
    }

    render(){
        this.create()
    }

    create(){
        this.domHoneys = document.createElement('div')
        this.domHoneys.classList.add('honeys')
        this.domHoneys.setAttribute('data-row', this.row)
        for (let col = 1; col <= ((this.row % 2 == 0) ? 5 : 6); col++) {

            const img = new Image()
            img.src = './source/img/polygon.png'
            img.classList.add('honey')

            this.cell = document.createElement('div')
            this.cell.classList.add('cell')
            this.cell.setAttribute('data-row', this.row)
            this.cell.setAttribute('data-col', col)
            this.cell.append(img)

            this.number = document.createElement('div')
            this.number.classList.add('number')
            this.cell.append(this.number)

            const cell = new Cell(this.row, col, img, this.number)
            cell.render()

            

            game.cells.push(cell)
            this.domHoneys.append(this.cell)
        } 
        game.templatGame.append(this.domHoneys)
    }
}
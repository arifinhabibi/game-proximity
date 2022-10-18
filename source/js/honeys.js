class Honeys {
    constructor(row){
        this.row = row
        this.domHoneys = null
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
            const cell = new Cell(this.row, col, img)
            cell.render()
            game.cells.push(cell)
            this.domHoneys.append(img)
        } 
        game.templatGame.append(this.domHoneys)
    }
}
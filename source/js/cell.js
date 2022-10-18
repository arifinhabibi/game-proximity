class Cell {
    constructor(row, col, domCell, domNumber){
        this.row = row
        this.col = col
        this.domCell = domCell
        this.number = null
        this.turn = null
        this.domNumber = domNumber
    }

    render(){
        this.create()
    }

    create(){
        this.domCell.setAttribute('data-row', this.row)
        this.domCell.setAttribute('data-col', this.col)
    }
}
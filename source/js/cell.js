class Cell {
    constructor(row, col, domCell){
        this.row = row
        this.col = col
        this.domCell = domCell
        this.number = null
        this.turn = null
    }

    render(){
        this.create()
    }

    create(){
        this.domCell.setAttribute('data-row', this.row)
        this.domCell.setAttribute('data-col', this.col)
    }
}